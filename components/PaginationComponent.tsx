import { Typography } from '@mui/material';
import Link from 'next/link';
import { use_AllPostsMetaQuery } from '../types/generated-queries';
import { Link as MaterialLink } from '@mui/material';
import { Box } from '@mui/system';

export default function PaginationComponent({ page }: { page: number }) {
  const { data } = use_AllPostsMetaQuery();

  const totalPostsCount = data?._allPostsMeta?.count!;

  const postsPerPage = 4;

  const totalPages = Math.ceil(totalPostsCount / postsPerPage);

  return (
    <Box
      sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
    >
      <Link href={`/posts/${page - 1}`} passHref>
        <MaterialLink
          component="button"
          disabled={page <= 1}
          sx={{
            '&[disabled]': {
              color: 'grey',
              pointerEvents: 'none',
              '&:hover': {
                textDecoration: 'none',
              },
            },
            marginRight: 5,
            fontSize: 25,
          }}
        >
          ← Prev
        </MaterialLink>
      </Link>
      <Typography sx={{ padding: 5, fontSize: 20 }}>
        Page {page} of {totalPages}
      </Typography>
      <Link href={`/posts/${page + 1}`} passHref>
        <MaterialLink
          component="button"
          disabled={page >= totalPages}
          sx={{
            '&[disabled]': {
              color: 'grey',
              pointerEvents: 'none',
              '&:hover': {
                textDecoration: 'none',
              },
            },
            marginLeft: 5,
            fontSize: 25,
          }}
        >
          Next →
        </MaterialLink>
      </Link>
    </Box>
  );
}
