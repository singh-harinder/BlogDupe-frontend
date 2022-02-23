import { Button, Container } from '@mui/material';
import useForm from '../lib/useForm';
import { useUpdateUserProfilePictureMutation } from '../types/generated-queries';
import Alert from '@mui/material/Alert';

export default function UpdateProfilePicture({
  id,
}: {
  id: string | undefined;
}) {
  const { inputs, handleChange } = useForm({
    image: undefined,
  });

  const [updateUserProfilePicture, { loading, data, error }] =
    useUpdateUserProfilePictureMutation({
      variables: {
        id: id!,
        image: inputs.image,
      },
    });

  return (
    <Container sx={{ marginTop: 2, display: 'flex' }}>
      {data?.updateUser?.image?.image?.publicUrlTransformed && (
        <Alert severity="success">Avatar Upload Successful!</Alert>
      )}
      {error && <Alert severity="error">Avatar Upload failed!</Alert>}

      <Button
        variant="contained"
        component="label"
        sx={{ marginLeft: 2, marginTop: 3 }}
      >
        Select Profile Avatar
        <input
          type="file"
          id="image"
          name="image"
          disabled={loading}
          onChange={handleChange}
          hidden
        />
      </Button>
      <Button
        variant="contained"
        sx={{ marginLeft: 10, marginTop: 3 }}
        onClick={async () => {
          await updateUserProfilePicture();
        }}
      >
        Upload
      </Button>
    </Container>
  );
}
