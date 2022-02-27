import Link from 'next/link';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import {
  Typography,
  Box,
  Alert,
  IconButton,
  Divider,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import {
  refetchUserQuery,
  useSignOutMutation,
  useUserQuery,
} from '../types/generated-queries';
import { ButtonBase } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItemButton from '@mui/material/ListItemButton';

const drawerWidth = 240;

export default function Nav() {
  const user = useUserQuery();

  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [signout, { loading, error }] = useSignOutMutation({
    refetchQueries: [refetchUserQuery()],
  });

  if (user.loading) return <CircularProgress />;

  if (user.error) {
    return <Alert severity="error">Error: {user.error.message}</Alert>;
  }

  if (loading) return <CircularProgress />;

  if (error) return <Alert severity="error">Error: {error.message}</Alert>;

  return (
    <Box sx={{ marginBottom: 10 }}>
      <Box
        sx={{
          flexGrow: 1,
          display: {
            xs: 'none',
            md: 'flex',
          },
        }}
      >
        <AppBar position="static" elevation={0}>
          <Toolbar disableGutters>
            <Typography
              variant="h2"
              noWrap
              component="div"
              sx={{
                flexGrow: 1,
                '& a': {
                  textDecoration: 'none',
                  color: 'white',
                  padding: 0.5,
                },
              }}
            >
              <Link href="/">BlogDupe</Link>
            </Typography>
            {!user.data?.authenticatedItem && (
              <Typography
                variant="h5"
                sx={{
                  '& a': {
                    textDecoration: 'none',
                    color: 'white',
                    padding: 5,
                  },
                }}
              >
                <Link href="/signin">SignIn</Link>
              </Typography>
            )}
            {user.data?.authenticatedItem && (
              <>
                <Typography
                  variant="h5"
                  sx={{
                    '& a': {
                      textDecoration: 'none',
                      color: 'white',
                      padding: 2,
                    },
                  }}
                >
                  <Link href="/createpost">Create a Post</Link>
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    '& a': {
                      textDecoration: 'none',
                      color: 'white',
                      padding: 2,
                    },
                  }}
                >
                  <Link href={`/profile/${user.data.authenticatedItem.id}`}>
                    Profile
                  </Link>
                </Typography>
                <Typography>
                  <ButtonBase
                    color="inherit"
                    sx={{
                      textDecoration: 'none',
                      padding: 2,
                      fontSize: '24px',
                    }}
                    onClick={async () => {
                      await signout();
                    }}
                  >
                    Sign Out
                  </ButtonBase>
                </Typography>
              </>
            )}
          </Toolbar>
        </AppBar>
        <Toolbar />
      </Box>
      {/*  */}
      <Box
        sx={{
          display: {
            xs: 'flex',
            md: 'none',
          },
        }}
      >
        <Box sx={{ display: 'flex' }}>
          <AppBar position="fixed">
            <Toolbar>
              <Typography
                variant="h4"
                noWrap
                sx={{
                  flexGrow: 1,
                  '& a': {
                    textDecoration: 'none',
                    color: 'white',
                    padding: 0.5,
                  },
                }}
                component="div"
                onClick={handleDrawerClose}
              >
                <Link href="/">BlogDupe</Link>
              </Typography>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerOpen}
                sx={{ ...(open && { display: 'none' }) }}
              >
                <MenuIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
          <Drawer
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              '& .MuiDrawer-paper': {
                width: drawerWidth,
              },
            }}
            variant="persistent"
            anchor="right"
            open={open}
          >
            <IconButton onClick={handleDrawerClose}>
              <ChevronRightIcon />
            </IconButton>
            <Divider />
            <List>
              {user.data?.authenticatedItem && (
                <>
                  <Link href="/createpost" passHref>
                    <ListItem>
                      <ListItemButton component="a" onClick={handleDrawerClose}>
                        <ListItemText primary="Create a Post" />
                      </ListItemButton>
                    </ListItem>
                  </Link>
                  <Link
                    href={`/profile/${user.data.authenticatedItem.id}`}
                    passHref
                  >
                    <ListItem>
                      <ListItemButton component="a" onClick={handleDrawerClose}>
                        <ListItemText primary="Profile" />
                      </ListItemButton>
                    </ListItem>
                  </Link>

                  <ListItem>
                    <ListItemButton
                      onClick={async () => {
                        await signout();
                        handleDrawerClose();
                      }}
                    >
                      <ListItemText primary="Sign Out" />
                    </ListItemButton>
                  </ListItem>
                </>
              )}

              {!user.data?.authenticatedItem && (
                <Link href="/signin" passHref>
                  <ListItem>
                    <ListItemButton component="a" onClick={handleDrawerClose}>
                      <ListItemText primary="Sign In" />
                    </ListItemButton>
                  </ListItem>
                </Link>
              )}
            </List>
            <Divider />
          </Drawer>
        </Box>
      </Box>
    </Box>
  );
}
