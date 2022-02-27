import { Alert, Button, CircularProgress } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import { Box } from '@mui/system';
import { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDeletePostMutation } from '../types/generated-queries';

type CustomDialogProps = {
  id?: string;
};

function update(cache: any, payload: any) {
  cache.evict(cache.identify(payload.data.deletePost));
}

export default function CustomDialog({ id }: CustomDialogProps) {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [deletePost, { loading: deleteLoading, error: deleteError }] =
    useDeletePostMutation({
      update,
    });

  if (deleteLoading) return <CircularProgress />;

  if (deleteError) {
    return <Alert severity="error">Error: {deleteError.message}</Alert>;
  }

  async function handleDelete() {
    await deletePost({
      variables: {
        id: id!,
      },
    });
  }

  return (
    <>
      <Button size="small" sx={{ float: 'left' }} onClick={handleOpen}>
        <DeleteIcon />
      </Button>
      <Box>
        <Dialog open={open}>
          <DialogTitle>Are you sure you want to delete this post?</DialogTitle>
          <DialogActions>
            <Button onClick={handleDelete}>Yes</Button>
            <Button onClick={handleClose}>No</Button>
          </DialogActions>
        </Dialog>
      </Box>
    </>
  );
}
