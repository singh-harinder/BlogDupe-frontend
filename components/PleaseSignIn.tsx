import { useUserQuery } from '../types/generated-queries';
import SignIn from './SignIn';
import CircularProgress from '@mui/material/CircularProgress';
import { Alert } from '@mui/material';

type PleaseSignInProps = {
  children: JSX.Element;
};

export default function PleaseSignIn({ children }: PleaseSignInProps) {
  const me = useUserQuery();

  if (me.loading) return <CircularProgress />;

  if (me.error) {
    return <Alert severity="error">Error: {me.error.message}</Alert>;
  }

  if (!me.data?.authenticatedItem) return <SignIn />;
  return children;
}
