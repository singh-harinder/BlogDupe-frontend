import UpdateProfile from '../components/UpdateProfile';
import PleaseSignIn from '../components/PleaseSignIn';

export default function UpdateProfilePage() {
  return (
    <PleaseSignIn>
      <UpdateProfile />
    </PleaseSignIn>
  );
}
