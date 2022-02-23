import PleaseSignIn from '../../components/PleaseSignIn';
import UpdatePost from '../../components/UpdatePost';

type UpdatePostPageProps = {
  query: {
    id: string;
  };
};

export default function UpdatePostPage({ query }: UpdatePostPageProps) {
  return (
    <PleaseSignIn>
      <UpdatePost id={query.id} />
    </PleaseSignIn>
  );
}
