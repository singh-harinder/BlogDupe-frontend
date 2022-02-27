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
import Comments from './Comments';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';

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

  const [open, setOpen] = useState(false);

  function handleClose() {
    setOpen(false);
  }

  function handleClickOpen() {
    setOpen(true);
  }

  const [deletePost, { loading: deleteLoading, error: deleteError }] =
    useDeletePostMutation({
      variables: {
        id,
      },
      update,
    });

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
    <>
      <Container>
        <Head>
          <title>BlogDupe | {data?.Post?.title}</title>
        </Head>
        <Card>
          <CardHeader
            action={
              user.data?.authenticatedItem?.id === data?.Post?.author?.id && (
                <>
                  <Button size="small" onClick={handleClickOpen}>
                    <DeleteIcon />
                  </Button>
                  <Button
                    size="small"
                    onClick={() => handleEdit(data?.Post?.id!)}
                  >
                    <EditIcon />
                  </Button>
                  <Dialog open={open}>
                    <DialogTitle>
                      Are you sure you want to delete this post?
                    </DialogTitle>
                    <DialogActions>
                      <Button
                        onClick={async () => {
                          await deletePost();
                          Router.push({
                            pathname: '/',
                          });
                        }}
                      >
                        Yes
                      </Button>
                      <Button
                        onClick={() => {
                          handleClose();
                        }}
                      >
                        No
                      </Button>
                    </DialogActions>
                  </Dialog>
                </>
              )
            }
            title={data?.Post?.title}
            avatar={
              <Link passHref href={`/profile/${data?.Post?.author?.id}`}>
                <Avatar
                  src={data?.Post?.author?.image?.image?.publicUrlTransformed!}
                  sx={{ width: 50, height: 50, cursor: 'pointer' }}
                />
              </Link>
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
      <Container>
        <Comments comments={data?.Post?.comments} id={data?.Post?.id!} />
      </Container>
    </>
  );
}
