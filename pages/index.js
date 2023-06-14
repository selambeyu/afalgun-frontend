import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { MainNavbar } from "../layouts/main-navbar";

import { MainLayout } from "../layouts/main-layout";

const Home = () => {
  return (
    <>
      {/* <MainNavbar/> */}
      <Head>CreateNext app</Head>
    </>
  );
};

Home.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default Home;
