import {
  Alert,
  Button,
  CircularProgress,
  Container,
  TextField,
  Typography,
} from '@mui/material';
import Head from 'next/head';
import Router from 'next/router';
import { FormEvent } from 'react';
import useForm from '../lib/useForm';
import {
  useGetSinglePostQuery,
  useUpdatePostMutation,
} from '../types/generated-queries';

export default function UpdatePost({ id }: { id: string }) {
  const {
    data: postQueryData,
    loading: postQueryLoading,
    error: postQueryError,
  } = useGetSinglePostQuery({
    variables: {
      id: id,
    },
  });

  const { inputs, clearForm, handleChange } = useForm({
    title: postQueryData?.Post?.title!,
    description: postQueryData?.Post?.description!,
  });

  const [updatePost, { loading, error }] = useUpdatePostMutation({
    variables: {
      id: id,
      title: inputs.title,
      description: inputs.description,
    },
  });

  if (postQueryLoading) return <CircularProgress />;
  if (postQueryError) {
    return <Alert severity="error">Error: {postQueryError.message}</Alert>;
  }
  if (loading) return <CircularProgress />;
  if (error) {
    return <Alert severity="error">Error: {error.message}</Alert>;
  }

  return (
    <Container>
      <Head>
        <title>PlaceHolder | Edit Post</title>
      </Head>
      <form
        onSubmit={async (event: FormEvent<HTMLFormElement>) => {
          event.preventDefault();

          const res = await updatePost();
          clearForm();

          Router.push({
            pathname: `/post/${res.data?.updatePost?.id}`,
          });
        }}
      >
        <Typography variant="h4" color="primary" gutterBottom>
          Update Post
        </Typography>

        <div>
          <TextField
            type="text"
            placeholder="Title"
            sx={{ margin: 1, padding: 1 }}
            label="Title"
            disabled={loading}
            helperText="Update the Title of the Post"
            required
            name="title"
            id="title"
            fullWidth
            value={inputs.title}
            onChange={handleChange}
          />
        </div>
        <div>
          <TextField
            type="text"
            multiline
            minRows={6}
            disabled={loading}
            placeholder="Description"
            sx={{ margin: 1, padding: 1 }}
            label="Description"
            helperText="Update the Description of the Post"
            required
            name="description"
            id="description"
            fullWidth
            value={inputs.description}
            onChange={handleChange}
          />
        </div>
        <Button
          sx={{ marginTop: 1, marginLeft: 2, padding: 1 }}
          type="submit"
          variant="contained"
          disabled={loading}
        >
          Update Post
        </Button>
      </form>
    </Container>
  );
}
