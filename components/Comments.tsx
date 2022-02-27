import {
  Alert,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  Link as MaterialLink,
} from '@mui/material';
import Link from 'next/link';
import useForm from '../lib/useForm';
import {
  refetchGetSinglePostQuery,
  useCreateCommentMutation,
  useGetNumberOfCommentsOnPostQuery,
  useUserQuery,
} from '../types/generated-queries';
import SingleComment from './SingleComment';

type CommentsProps = {
  id: string;
  comments:
    | {
        __typename?: 'Comment' | undefined;
        id: string;
        comment?: string | null | undefined;
        user?:
          | {
              __typename?: 'User' | undefined;
              id: string;
              name?: string | null | undefined;
              image?:
                | {
                    __typename?: 'ProfileImage' | undefined;
                    image?:
                      | {
                          __typename?: 'CloudinaryImage_File' | undefined;
                          publicUrlTransformed?: string | null | undefined;
                        }
                      | null
                      | undefined;
                  }
                | null
                | undefined;
            }
          | null
          | undefined;
      }[]
    | undefined;
};

export default function Comments({ comments, id }: CommentsProps) {
  const { inputs, handleChange, clearForm } = useForm({
    comment: '',
  });

  const [createComment, { loading, error }] = useCreateCommentMutation({
    variables: {
      id: id,
      comment: inputs.comment!,
    },
    refetchQueries: [
      refetchGetSinglePostQuery({
        id: id,
      }),
    ],
  });

  const { data: numberOfComments } = useGetNumberOfCommentsOnPostQuery({
    variables: {
      id: id,
    },
  });

  const user = useUserQuery();

  if (error) {
    return <Alert severity="error">Error: {error.message}</Alert>;
  }

  return (
    <Container sx={{ marginTop: 10 }}>
      <Typography variant="h6" sx={{ marginBottom: 3 }}>
        Comments: {numberOfComments?._allCommentsMeta?.count}
      </Typography>
      <Container>
        {user.data?.authenticatedItem && (
          <>
            <TextField
              label="Type your Comment"
              fullWidth
              name="comment"
              id="comment"
              autoComplete="OFF"
              type="text"
              value={inputs.comment}
              onChange={handleChange}
            />
            <Button
              variant="contained"
              disabled={loading}
              sx={{ marginTop: 2 }}
              onClick={async () => {
                await createComment();
                clearForm();
              }}
            >
              Comment
            </Button>
          </>
        )}
        {!user.data?.authenticatedItem && (
          <Typography sx={{ fontSize: 20 }}>
            <Link href="/signin" passHref>
              <MaterialLink>Sign in</MaterialLink>
            </Link>{' '}
            to Comment
          </Typography>
        )}

        <Grid container spacing={5} sx={{ marginTop: 3, marginBottom: 20 }}>
          {comments?.map((comment) => (
            <Grid
              item
              xs={12}
              md={12}
              lg={12}
              justifyContent="flex-start"
              key={comment.id}
            >
              <SingleComment comment={comment} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Container>
  );
}
