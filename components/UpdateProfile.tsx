import useForm from '../lib/useForm';
import { Button, Container, TextField, Typography } from '@mui/material';
import Router from 'next/router';
import {
  refetchUserQuery,
  useUpdateUserMutation,
  useUserQuery,
} from '../types/generated-queries';
import { SyntheticEvent } from 'react';
import { Box } from '@mui/system';
import EditProfilePicture from './UpdateProfilePicture';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import Head from 'next/head';

export default function UpdateProfile() {
  const { data, loading: userLoading, error } = useUserQuery();

  const { inputs, handleChange, clearForm } = useForm({
    name: data?.authenticatedItem?.name || '',
    email: data?.authenticatedItem?.email || '',
    location: data?.authenticatedItem?.location || '',
    skills: data?.authenticatedItem?.skills || '',
    hobbies: data?.authenticatedItem?.hobbies || '',
  });

  const [updateUser, { loading }] = useUpdateUserMutation({
    variables: {
      id: data?.authenticatedItem?.id!,
      name: inputs.name,
      email: inputs.email,
      location: inputs.location,
      skills: inputs.skills,
      hobbies: inputs.hobbies,
    },
    refetchQueries: [refetchUserQuery()],
  });

  if (userLoading) return <CircularProgress />;

  if (error) return <Alert severity="error">Error: {error.message}</Alert>;

  async function handleSubmit(event: SyntheticEvent) {
    event.preventDefault();
    await updateUser();
    clearForm();
    Router.push({
      pathname: `/profile/${data?.authenticatedItem?.id}`,
    });
  }

  return (
    <Container>
      <Head>
        <title>PlaceHolder | Update Profile</title>
      </Head>
      <form onSubmit={handleSubmit}>
        <Typography variant="h4" color="primary">
          Edit Profile
        </Typography>
        <Box>
          <Box>
            <Typography variant="h6" sx={{ marginTop: 5 }}>
              Avatar:
            </Typography>
            <EditProfilePicture id={data?.authenticatedItem?.id} />
          </Box>
          <div>
            <Typography variant="h6" sx={{ marginTop: 5 }}>
              Details:
            </Typography>
            <TextField
              fullWidth
              placeholder="Name"
              disabled={loading}
              helperText="Name"
              sx={{ margin: 1, padding: 1 }}
              type="text"
              name="name"
              id="name"
              value={inputs.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <TextField
              fullWidth
              placeholder="Email"
              disabled={loading}
              helperText="Email Address"
              sx={{ margin: 1, padding: 1 }}
              type="text"
              name="email"
              id="email"
              value={inputs.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <TextField
              fullWidth
              placeholder="Location"
              disabled={loading}
              helperText="Location"
              sx={{ margin: 1, padding: 1 }}
              type="text"
              name="location"
              id="location"
              value={inputs.location}
              onChange={handleChange}
            />
          </div>
          <div>
            <TextField
              fullWidth
              placeholder="Skills"
              disabled={loading}
              helperText="Skills"
              sx={{ margin: 1, padding: 1 }}
              type="text"
              name="skills"
              id="skills"
              value={inputs.skills}
              onChange={handleChange}
            />
          </div>
          <div>
            <TextField
              fullWidth
              placeholder="Hobbies"
              helperText="Hobbies"
              disabled={loading}
              sx={{ margin: 1, padding: 1 }}
              type="text"
              name="hobbies"
              id="hobbies"
              value={inputs.hobbies}
              onChange={handleChange}
            />
          </div>
          <Button
            sx={{ marginTop: 1, marginLeft: 2, padding: 1 }}
            type="submit"
            disabled={loading}
            variant="contained"
          >
            Update Profile
          </Button>
        </Box>
      </form>
    </Container>
  );
}
