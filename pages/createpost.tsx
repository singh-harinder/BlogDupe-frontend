import CreatePost from '../components/CreatePost';
import PleaseSignIn from '../components/PleaseSignIn';

export default function CreatePostPage() {
  return (
    <PleaseSignIn>
      <CreatePost />
    </PleaseSignIn>
  );
}
