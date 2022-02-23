import PleaseSignIn from '../../components/PleaseSignIn';
import Profile from '../../components/Profile';

type ProfilePageProps = {
  query: {
    id: string;
  };
};

export default function ProfilePage({ query }: ProfilePageProps) {
  return (
    <PleaseSignIn>
      <Profile id={query.id} />
    </PleaseSignIn>
  );
}
