import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import { Alert, Avatar, Button, Container, Typography } from '@mui/material';
import Router from 'next/router';
import {
  useDeletePostMutation,
  useGetSinglePostQuery,
  useUserQuery,
} from '../types/generated-queries';
import DeleteIcon from '@mui/icons-material/Delete';
import CircularProgress from '@mui/material/CircularProgress';
import Link from 'next/link';
import { Link as MaterialLink } from '@mui/material';
import Head from 'next/head';
import EditIcon from '@mui/icons-material/Edit';

function update(cache: any, payload: any) {
  cache.evict(cache.identify(payload.data.deletePost));
}

export default function SinglePost({ id }: { id: string }) {
  const { data, loading, error } = useGetSinglePostQuery({
    variables: {
      id,
    },
  });

  const user = useUserQuery();

  const [deletePost, { loading: deleteLoading, error: deleteError }] =
    useDeletePostMutation({
      variables: {
        id,
      },
      update,
    });

  function handleDelete() {
    if (window.confirm('Are you sure you want to delete this post')) {
      deletePost();
      Router.push({
        pathname: '/',
      });
    }
  }

  function handleEdit(id: string) {
    Router.push({
      pathname: `/updatepost/${id}`,
    });
  }

  if (user.loading) return <CircularProgress />;

  if (user.error) {
    return <Alert severity="error">Error: {user.error.message}</Alert>;
  }

  if (loading) return <CircularProgress />;

  if (error) {
    return <Alert severity="error">Error: {error.message}</Alert>;
  }

  if (deleteLoading) return <CircularProgress />;

  if (deleteError) {
    return <Alert severity="error">Error: {deleteError.message}</Alert>;
  }

  return (
    <Container>
      <Head>
        <title>PlaceHolder | {data?.Post?.title}</title>
      </Head>
      <Card>
        <CardHeader
          action={
            user.data?.authenticatedItem?.id === data?.Post?.author?.id && (
              <>
                <Button size="small" onClick={() => handleDelete()}>
                  <DeleteIcon />
                </Button>
                <Button
                  size="small"
                  onClick={() => handleEdit(data?.Post?.id!)}
                >
                  <EditIcon />
                </Button>
              </>
            )
          }
          title={data?.Post?.title}
          avatar={
            <Avatar
              src={data?.Post?.author?.image?.image?.publicUrlTransformed!}
              sx={{ width: 50, height: 50 }}
            />
          }
          subheader={
            <Link href={`/profile/${data?.Post?.author?.id}`} passHref>
              <MaterialLink underline="none">
                {data?.Post?.author?.name}
              </MaterialLink>
            </Link>
          }
          titleTypographyProps={{ fontSize: 30 }}
        />
        <CardContent>
          <Typography>{data?.Post?.description}</Typography>
        </CardContent>
      </Card>
    </Container>
  );
}
