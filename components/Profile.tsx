import Link from 'next/link';
import {
  Button,
  Grid,
  Typography,
  Container,
  CardActions,
  Alert,
} from '@mui/material';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import EditIcon from '@mui/icons-material/Edit';
import { Paper } from '@mui/material';
import {
  useDeletePostMutation,
  useSingleUserQuery,
  useUserQuery,
} from '../types/generated-queries';
import CardActionArea from '@mui/material/CardActionArea';
import DeleteIcon from '@mui/icons-material/Delete';
import CircularProgress from '@mui/material/CircularProgress';
import Head from 'next/head';
import CustomDialog from './CustomDialog';

// function update(cache: any, payload: any) {
//   cache.evict(cache.identify(payload.data.deletePost));
// }

export default function Profile({ id }: { id: string }) {
  const {
    data: signedInUserData,
    loading: signedInUserLoading,
    error: signedInUserError,
  } = useUserQuery();

  const {
    data: profileData,
    loading: profileLoading,
    error: profileError,
  } = useSingleUserQuery({
    variables: {
      id,
    },
  });

  // const [deletePost, { loading: deleteLoading, error: deleteError }] =
  //   useDeletePostMutation({
  //     update,
  //   });

  if (signedInUserLoading) return <CircularProgress />;

  if (signedInUserError) {
    return <Alert severity="error">Error: {signedInUserError.message}</Alert>;
  }

  if (profileLoading) return <CircularProgress />;

  if (profileError) {
    return <Alert severity="error">Error: {profileError.message}</Alert>;
  }

  // if (deleteLoading) return <CircularProgress />;

  // if (deleteError) {
  //   return <Alert severity="error">Error: {deleteError.message}</Alert>;
  // }

  return (
    <Container>
      <Head>
        <title>BlogDupe | Profile</title>
      </Head>
      <Card>
        <CardHeader
          avatar={
            <Avatar
              src={profileData?.User?.image?.image?.publicUrlTransformed!}
              sx={{ width: 150, height: 150, marginLeft: 10 }}
            />
          }
          action={
            <>
              {profileData?.User?.id ===
                signedInUserData?.authenticatedItem?.id && (
                <Button
                  sx={{
                    margin: 1,
                    padding: 1,
                    '& a': {
                      textDecoration: 'none',
                      color: 'white',
                    },
                  }}
                  type="button"
                  variant="contained"
                >
                  <Link
                    href={{
                      pathname: '/updateprofile',
                      query: { id: signedInUserData?.authenticatedItem?.id },
                    }}
                    passHref
                  >
                    <EditIcon />
                  </Link>
                </Button>
              )}
            </>
          }
          title={profileData?.User?.name}
          titleTypographyProps={{ fontSize: 38 }}
          subheader={profileData?.User?.email}
          subheaderTypographyProps={{ fontSize: 24 }}
        />
        <CardContent>
          <Paper>
            <Typography variant="h6" sx={{ marginLeft: 5 }}>
              Location: {profileData?.User?.location}
            </Typography>
          </Paper>
        </CardContent>
        <CardContent>
          <Paper>
            <Typography variant="h6" sx={{ marginLeft: 5 }}>
              Skills: {profileData?.User?.skills}
            </Typography>
          </Paper>
        </CardContent>
        <CardContent>
          <Paper>
            <Typography variant="h6" sx={{ marginLeft: 5 }}>
              Hobbies: {profileData?.User?.hobbies}
            </Typography>
          </Paper>
        </CardContent>
        <CardContent>
          <Typography variant="h6" sx={{ marginLeft: 5 }}>
            Posts:{' '}
            <Grid container>
              {profileData?.User?.posts.map((post) => (
                <Grid
                  item
                  sx={{
                    paddingLeft: 8,
                    paddingTop: 2,
                    paddingBottom: 2,
                    margin: 2,
                    display: 'flex',
                    justifyContent: 'space-between',
                    borderRadius: 5,
                    borderColor: 'grey',
                  }}
                  key={post.id}
                >
                  <Card>
                    <CardActionArea href={`/post/${post?.id}`}>
                      <CardHeader title={post.title} />
                    </CardActionArea>
                    <CardActions>
                      {signedInUserData?.authenticatedItem?.id ===
                        profileData.User?.id && (
                        // <Button
                        //   size="small"
                        //   sx={{ float: 'left' }}
                        //   // onClick={async () => {
                        //   //   if (
                        //   //     window.confirm(
                        //   //       'Are you sure you want to delete this post'
                        //   //     )
                        //   //   ) {
                        //   //     await deletePost({
                        //   //       variables: {
                        //   //         id: post.id,
                        //   //       },
                        //   //     });
                        //   //   }
                        //   // }}
                        //   onClick={handleClick}
                        // >
                        //   <DeleteIcon />
                        // </Button>
                        <CustomDialog id={post.id} />
                      )}
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}
