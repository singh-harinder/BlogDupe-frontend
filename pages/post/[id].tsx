import SinglePost from '../../components/SinglePost';

type SinglePostProps = {
  query: {
    id: string;
  };
};

export default function SinglePostPage({ query }: SinglePostProps) {
  return <SinglePost id={query.id} />;
}
