import { useEffect } from 'react';
import Head from 'next/head';
import { Box, Container } from '@mui/material';
import { MainLayout } from '../../layouts/main-layout';
import { AddPost } from '../../components/post/add-post';
import { gtm } from '../../lib/gtm';

const Page = () => {
  useEffect(() => {
    gtm.push({ event: 'page_view' });
  }, []);

  return (
    <>
      <Head>
        <title>
          Browse: Forms | Material Kit Pro
        </title>
      </Head>
      <Box
        component="main"
        sx={{
          backgroundColor: 'background.paper',
          flexGrow: 1,
          py: 8
        }}
      >
        <Container maxWidth="lg">
            <AddPost/>
          {/* <WidgetPreviewer
            element={<AddPost />}
            // name="Form with input fields and switches"
          /> */}
          
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page) => (
  <MainLayout>
    {/* <BrowseLayout> */}
      {page}
    {/* </BrowseLayout> */}
  </MainLayout>
);

export default Page;
