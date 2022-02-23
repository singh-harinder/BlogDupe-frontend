import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import { Avatar, Typography } from '@mui/material';
import CardActionArea from '@mui/material/CardActionArea';
import { Box } from '@mui/system';

type PostViewProps = {
  post: {
    __typename?: 'Post' | undefined;
    id: string;
    title?: string | null | undefined;
    description?: string | null | undefined;
    author?:
      | {
          __typename?: 'User' | undefined;
          id: string;
          name?: string | null | undefined;
          email?: string | null | undefined;
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
  } | null;
};

export default function Post({ post }: PostViewProps) {
  return (
    <Box>
      <Card>
        <CardActionArea href={`/post/${post?.id}`}>
          <CardHeader
            avatar={
              <Avatar
                src={post?.author?.image?.image?.publicUrlTransformed!}
                sx={{ width: 50, height: 50 }}
              />
            }
            sx={{ marginLeft: 2 }}
            title={post?.title}
            subheader={post?.author?.name}
            titleTypographyProps={{ fontSize: 30 }}
          />
          <CardContent>
            <Typography sx={{ marginLeft: 2 }}>
              {post?.description?.length! > 200 &&
                post?.description?.slice(0, 200).concat('.........')}
              {post?.description?.length! < 200 && post?.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
}
