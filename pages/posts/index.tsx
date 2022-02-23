import PaginationComponent from '../../components/PaginationComponent';
import Posts from '../../components/Posts';

type ProductPageProps = {
  query: {
    page?: string;
  };
};

export default function PostsPage({ query }: ProductPageProps) {
  return (
    <>
      <Posts page={Number(query.page) || 1} />
      <PaginationComponent page={Number(query.page) || 1} />
    </>
  );
}
