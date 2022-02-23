import Header from './Header';
import { Box } from '@mui/system';
import { ReactNode } from 'react';

type PageProps = {
  children: ReactNode;
};

export default function Page({ children }: PageProps) {
  return (
    <div>
      <Header />
      <Box></Box>
      {children}
    </div>
  );
}
