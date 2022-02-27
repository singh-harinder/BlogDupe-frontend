import Post from './Post';
import { Alert, Grid } from '@mui/material';
import { useAllPostsQuery } from '../types/generated-queries';
import CircularProgress from '@mui/material/CircularProgress';
import { Box } from '@mui/system';
import Head from 'next/head';

export default function Posts({ page }: { page: number }) {
  const perPage = 4;

  const { data, error, loading } = useAllPostsQuery({
    variables: {
      skip: page * perPage - perPage,
      first: perPage,
    },
  });

  if (loading) return <CircularProgress />;

  if (error) return <Alert severity="error">Error: {error.message}</Alert>;

  return (
    <Box>
      <Head>
        <title>BlogDupe</title>
      </Head>
      <Grid container spacing={5}>
        {data?.allPosts &&
          data?.allPosts.map((post) => (
            <Grid
              item
              xs={12}
              md={12}
              lg={12}
              justifyContent="flex-start"
              key={post && post.id}
            >
              <Post post={post} />
            </Grid>
          ))}
      </Grid>
    </Box>
  );
}
