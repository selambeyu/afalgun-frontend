import { useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Box, Card, Container, Divider,  Typography } from '@mui/material';
// import { GuestGuard } from '../../components/authentication/guest-guard';
// import { AuthBanner } from '../../components/authentication/auth-banner';
// import { AmplifyRegister } from '../../components/authentication/amplify-register';
// import { Auth0Register } from '../../components/authentication/auth0-register';
// import { FirebaseRegister } from '../../components/authentication/firebase-register';
// import { JWTRegister } from '../../components/authentication/jwt-register';
import { JWTRegister } from '../../components/authentication/register';
// import { Logo } from '../../components/logo';
import { MainLayout } from '../../layouts/main-layout';
// import { useAuth } from '../../hooks/use-auth';
import { gtm } from '../../lib/gtm';

const platformIcons = {
  Amplify: '/static/icons/amplify.svg',
  Auth0: '/static/icons/auth0.svg',
  Firebase: '/static/icons/firebase.svg',
  JWT: '/static/icons/jwt.svg'
};

const Register = () => {
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
          Register </title>
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
            </Typography>
            <img
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
              {/* <NextLink
                href="/"
                passHref
              >
                <a>
                  <Logo
                    sx={{
                      height: 40,
                      width: 40
                    }}
                  />
                </a>
              </NextLink> */}
              <Typography variant="h4">
                Register
              </Typography>
              <Typography
                color="textSecondary"
                sx={{ mt: 2 }}
                variant="body2"
              >
                Register on the internal platform
              </Typography>
            </Box>
            <Box
              sx={{
                flexGrow: 1,
                mt: 3
              }}
            >
            <JWTRegister/>
            </Box>
            <Divider sx={{ my: 3 }} />
            <div>
              <Link
                href={disableGuard
                  ? `/auth/login?disableGuard=${disableGuard}`
                  : '/auth/login'}
                passHref
              >
                <Typography
                  color="textSecondary"
                  variant="body2"
                >
                  Having an account
                </Typography>
              </Link>
            </div>
          </Card>
        </Container>
      </Box>
    </>
  );
};

Register.getLayout = (page) => (
  <MainLayout>
    {page}
  </MainLayout>
);

export default Register;
