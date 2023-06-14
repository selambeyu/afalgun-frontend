import { useEffect } from "react";
import Head from "next/head";

// import { MainLayout } from '../components/main-layout';
import { MainLayout } from "../layouts/main-layout";

import { gtm } from "../lib/gtm";

const Home = () => {
  useEffect(() => {
    gtm.push({ event: "page_view" });
  }, []);

  return (
    <>
      <Head>
        <title>Material Kit Pro</title>
      </Head>
      <main>
        <p>home</p>
      </main>
    </>
  );
};

Home.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default Home;
