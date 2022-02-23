import useForm from '../lib/useForm';
import { Button, Container, TextField, Typography } from '@mui/material';
import Router from 'next/router';
import {
  refetchAllPostsQuery,
  useCreatePostMutation,
} from '../types/generated-queries';
import { FormEvent } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import Head from 'next/head';

export default function CreatePost() {
  const { inputs, handleChange, clearForm } = useForm({
    title: '',
    description: '',
  });

  const [createPost, { error, loading }] = useCreatePostMutation({
    variables: {
      title: inputs.title!,
      description: inputs.description!,
    },
    refetchQueries: [refetchAllPostsQuery()],
  });

  if (loading) return <CircularProgress />;

  if (error) return <Alert severity="error">Error: {error.message}</Alert>;

  return (
    <Container>
      <Head>
        <title>PlaceHolder | Create a Post</title>
      </Head>
      <form
        onSubmit={async (event: FormEvent<HTMLFormElement>) => {
          event.preventDefault();

          const res = await createPost();
          clearForm();

          Router.push({
            pathname: `/post/${res.data?.createPost?.id}`,
          });
        }}
      >
        <Typography variant="h4" color="primary" gutterBottom>
          Create a Post
        </Typography>

        <div>
          <TextField
            type="text"
            placeholder="Title"
            sx={{ margin: 1, padding: 1 }}
            label="Title"
            disabled={loading}
            helperText="Enter the Title of the Post"
            required
            name="title"
            id="title"
            fullWidth
            value={inputs.title}
            onChange={handleChange}
          />
        </div>
        <div>
          <TextField
            type="text"
            multiline
            minRows={6}
            disabled={loading}
            placeholder="Description"
            sx={{ margin: 1, padding: 1 }}
            label="Description"
            helperText="Enter the Description of the Post"
            required
            name="description"
            id="description"
            fullWidth
            value={inputs.description}
            onChange={handleChange}
          />
        </div>
        <Button
          sx={{ marginTop: 1, marginLeft: 2, padding: 1 }}
          type="submit"
          variant="contained"
          disabled={loading}
        >
          Create Post
        </Button>
      </form>
    </Container>
  );
}
