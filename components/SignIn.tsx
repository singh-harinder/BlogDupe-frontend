import useForm from '../lib/useForm';
import { Alert, Button, Container, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import Link from 'next/link';
import { SyntheticEvent, useEffect } from 'react';
import {
  refetchUserQuery,
  useSignInMutation,
  useUserQuery,
} from '../types/generated-queries';
import Router from 'next/router';
import CircularProgress from '@mui/material/CircularProgress';
import { Box } from '@mui/system';

export default function SignIn() {
  const { inputs, handleChange, resetForm } = useForm({
    email: '',
    password: '',
  });

  const [signIn, { data, loading, error: signInError }] = useSignInMutation({
    variables: {
      email: inputs?.email!,
      password: inputs?.password!,
    },
    refetchQueries: [refetchUserQuery()],
  });

  const user = useUserQuery();

  useEffect(() => {
    if (user.data?.authenticatedItem) {
      Router.push({
        pathname: '/',
      });
    }
  });

  if (user.loading) return <CircularProgress />;

  if (user.error) {
    return <Alert severity="error">Error: {user.error.message}</Alert>;
  }

  if (signInError) {
    return <Alert severity="error">Error: {signInError.message}</Alert>;
  }

  const error =
    data?.authenticateUserWithPassword.__typename ===
    'UserAuthenticationWithPasswordFailure'
      ? data?.authenticateUserWithPassword
      : undefined;

  async function handleSubmit(event: SyntheticEvent) {
    event.preventDefault();
    await signIn();
    resetForm();
  }

  return (
    <Container>
      <Typography variant="h4" color="primary" gutterBottom sx={{ margin: 1 }}>
        Sign in to your Account
        <Box>{error && <Alert severity="error">{error.message}</Alert>}</Box>
      </Typography>
      <form method="POST" onSubmit={handleSubmit}>
        <div>
          <TextField
            label="Email"
            helperText="Enter your Email Address"
            required
            fullWidth
            disabled={loading}
            name="email"
            sx={{ margin: 1, padding: 1 }}
            id="email"
            type="text"
            autoComplete="email"
            value={inputs.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <TextField
            label="Password"
            helperText="Enter your Password"
            required
            name="password"
            disabled={loading}
            fullWidth
            sx={{ margin: 1, padding: 1 }}
            type="password"
            id="password"
            value={inputs.password}
            onChange={handleChange}
          />
        </div>
        <Button
          sx={{ marginLeft: 2, marginTop: 1, padding: 1 }}
          type="submit"
          variant="contained"
          disabled={loading}
        >
          Sign In
        </Button>
        <Box sx={{ marginTop: 5, marginBottom: 5 }}>
          <Typography sx={{ marginLeft: 1, marginTop: 1, padding: 1 }}>
            Don&apos;t have an account? Sign Up for one below
          </Typography>
          <Link href="/signup" passHref>
            <Button
              variant="contained"
              type="button"
              sx={{ marginLeft: 2, marginTop: 1, padding: 1 }}
            >
              Create an Account
            </Button>
          </Link>
        </Box>
      </form>
    </Container>
  );
}
