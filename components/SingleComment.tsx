import { Avatar, Button, Card, CardHeader } from '@mui/material';
import { Box } from '@mui/system';
import {
  useDeleteCommentMutation,
  useUserQuery,
} from '../types/generated-queries';
import DeleteIcon from '@mui/icons-material/Delete';
import Link from 'next/link';
import { Link as MaterialLink } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';

type SingleCommentProps = {
  comment: {
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
  };
};

function update(cache: any, payload: any) {
  cache.evict(cache.identify(payload.data.deleteComment));
}

export default function SingleComment({ comment }: SingleCommentProps) {
  const { data } = useUserQuery();
  const [deleteComment] = useDeleteCommentMutation({
    variables: {
      id: comment.id,
    },
    update,
  });

  const [open, setOpen] = useState(false);

  function handleClose() {
    setOpen(false);
  }

  function handleClickOpen() {
    setOpen(true);
  }

  return (
    <Box>
      <Card>
        <CardHeader
          action={
            data?.authenticatedItem?.id === comment.user?.id && (
              <>
                <Button size="small" onClick={handleClickOpen}>
                  <DeleteIcon />
                </Button>
                <Dialog open={open}>
                  <DialogTitle>
                    Are you sure you want to delete this comment?
                  </DialogTitle>
                  <DialogActions>
                    <Button
                      onClick={async () => {
                        await deleteComment();
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
          avatar={
            <Link passHref href={`/profile/${comment.user?.id}`}>
              <Avatar
                src={comment.user?.image?.image?.publicUrlTransformed!}
                sx={{ width: 50, height: 50, cursor: 'pointer' }}
              />
            </Link>
          }
          title={comment.comment}
          subheader={
            <Link href={`/profile/${comment.user?.id}`} passHref>
              <MaterialLink underline="none">
                {`${comment.user?.name}`}
              </MaterialLink>
            </Link>
          }
          titleTypographyProps={{ fontSize: 20 }}
        />
      </Card>
    </Box>
  );
}
