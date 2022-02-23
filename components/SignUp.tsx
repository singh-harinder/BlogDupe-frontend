import useForm from '../lib/useForm';
import Link from 'next/link';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Alert, Typography } from '@mui/material';
import { SyntheticEvent } from 'react';
import { useSignUpMutation } from '../types/generated-queries';
import CircularProgress from '@mui/material/CircularProgress';

export default function SignUp() {
  const { inputs, handleChange, resetForm } = useForm({
    name: '',
    email: '',
    password: '',
  });

  const [signup, { data, error, loading }] = useSignUpMutation({
    variables: {
      email: inputs.email!,
      password: inputs.password!,
      name: inputs.name!,
    },
  });

  if (loading) return <CircularProgress />;

  if (error) {
    return <Alert severity="error">Error: {error.message}</Alert>;
  }

  async function handleSubmit(event: SyntheticEvent) {
    event.preventDefault();

    const res = await signup().catch(console.error);
    resetForm();
  }

  return (
    <>
      <Typography variant="h2" gutterBottom color="primary">
        Sign Up for a new Account
      </Typography>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <fieldset>
          {data?.createUser && (
            <>
              <Typography variant="h4" gutterBottom color="primary">
                Account creation successful!
                <Link href="/signin" passHref>
                  <Button sx={{ margin: 1, padding: 1 }} variant="contained">
                    Click Here
                  </Button>
                </Link>
                to Log In
              </Typography>
            </>
          )}
          <div>
            <TextField
              label="Enter your Name"
              fullWidth
              type="text"
              variant="outlined"
              name="name"
              id="name"
              required
              sx={{ margin: 1, padding: 1 }}
              autoComplete="name"
              value={inputs.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <TextField
              label="Enter your Email"
              type="text"
              name="email"
              fullWidth
              id="email"
              sx={{ margin: 1, padding: 1 }}
              autoComplete="email"
              variant="outlined"
              required
              value={inputs.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <TextField
              label="Enter your password"
              variant="outlined"
              fullWidth
              type="password"
              sx={{ margin: 1, padding: 1 }}
              autoComplete="password"
              name="password"
              id="password"
              required
              value={inputs.password}
              onChange={handleChange}
            />
          </div>

          <Button
            sx={{ marginLeft: 2, marginTop: 1, padding: 1 }}
            type="submit"
            variant="contained"
          >
            Create an Account
          </Button>
        </fieldset>
      </form>
    </>
  );
}
