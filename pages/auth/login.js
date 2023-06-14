import { useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Box, Card, Container, Divider,  Typography } from '@mui/material';
// import { GuestGuard } from '../../components/authentication/guest-guard';
// import { AuthBanner } from '../../components/authentication/auth-banner';
import {MainLayout} from '../../layouts/main-layout'
// import { Logo } from '../../components/logo';
// import { useAuth } from '../../hooks/use-auth';
import { JWTLogin } from '../../components/authentication/login';
import { gtm } from '../../lib/gtm';


const LoginPage = () => {
  const router = useRouter();
//   const { platform } = useAuth();
  const { disableGuard } = router.query;

  useEffect(() => {
    gtm.push({ event: 'page_view' });
  }, []);

  return (
    <>
      <Head>
        <title>
          Login 
        </title>
      </Head>
      <Box
        component="main"
        sx={{
          backgroundColor: 'background.default',
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh'
        }}
      >
        {/* <AuthBanner /> */}
        <Container
          maxWidth="sm"
          sx={{
            py: {
              xs: '60px',
              md: '120px'
            }
          }}
        >
          <Box
            sx={{
              alignItems: 'center',
              backgroundColor: (theme) => theme.palette.mode === 'dark'
                ? 'neutral.900'
                : 'neutral.100',
              borderColor: 'divider',
              borderRadius: 1,
              borderStyle: 'solid',
              borderWidth: 1,
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              mb: 4,
              p: 2,
              '& > img': {
                height: 32,
                width: 'auto',
                flexGrow: 0,
                flexShrink: 0
              }
            }}
          >
            {/* <Typography
              color="textSecondary"
              variant="caption"
            >
              The app authenticates via {platform}
            </Typography> */}
            {/* <img
              alt="Auth platform"
              src={platformIcons[platform]}
            /> */}
          </Box>
          <Card
            elevation={16}
            sx={{ p: 4 }}
          >
            <Box
              sx={{
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}
            >
              <Link
                href="/"
                passHref
              >
                {/* <a>
                  <Logo
                    sx={{
                      height: 40,
                      width: 40
                    }}
                  />
                </a> */}
              </Link>
              <Typography variant="h4">
                Log in
              </Typography>
              {/* <Typography
                color="textSecondary"
                sx={{ mt: 2 }}
                variant="body2"
              >
                Sign in on the internal platform
              </Typography> */}
            </Box>
            <Box
              sx={{
                flexGrow: 1,
                mt: 3
              }}
            >
              
            <JWTLogin />
            </Box>
            <Divider sx={{ my: 3 }} />
            <div>
              <Link
                href={disableGuard
                  ? `/auth/register?disableGuard=${disableGuard}`
                  : '/auth/register'}
                passHref
              >
                <Typography
                  color="textSecondary"
                  variant="body2"
                >
                  Create new account
                </Typography>
              </Link>
            </div>
            {/* {platform === 'Amplify' && ( */}
              <Box sx={{ mt: 1 }}>
                <Link
                  href={disableGuard
                    ? `/auth/password-recovery?disableGuard=${disableGuard}`
                    : '/auth/password-recovery'}
                  passHref
                >
                  <Typography
                    color="textSecondary"
                    variant="body2"
                  >
                    Forgot password
                  </Typography>
                </Link>
              </Box>
            {/* )} */}
          </Card>
        </Container>
      </Box>
    </>
  );
};

LoginPage.getLayout = (page) => (
  <MainLayout>
    {page}
  </MainLayout>
);

export default LoginPage;
