import { useEffect } from "react";
import Head from "next/head";
import NextLink from "next/link";
import { Grid, Box, Card, Container, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { BrowseLayout } from "../layouts/browse-layout";
import { MainLayout } from "../layouts/main-layout";

import { gtm } from "../lib/gtm";
import { GridList1 } from "../components/grid-lists/grid-list-1";
import { Stack } from "@mui/system";
import {CategoryCard} from "../components/category/category-card";
import { CategoryList } from "../components/category/category-listing";
const getSections = (mode) => [
  {
    title: "Data Display",
    items: [
      {
        title: "Detail Lists",
        subtitle: "8 components",
        image: `/static/browse/data-display-detail-list_${mode}.png`,
        path: "/browse/data-display/detail-lists",
      },
      {
        title: "Tables",
        subtitle: "11 components",
        image: `/static/browse/data-display-tables_${mode}.png`,
        path: "/browse/data-display/tables",
      },
      {
        title: "Quick Stats",
        subtitle: "8 components",
        image: `/static/browse/data-display-quick-stats_${mode}.png`,
        path: "/browse/data-display/quick-stats",
      },
    ],
  },
  {
    title: "Lists",
    items: [
      {
        title: "Grouped Lists",
        subtitle: "11 components",
        image: `/static/browse/lists-grouped_${mode}.png`,
        path: "/browse/lists/grouped-lists",
      },
      {
        title: "Grid Lists",
        subtitle: "6 components",
        image: `/static/browse/lists-grid_${mode}.png`,
        path: "/browse/lists/grid-lists",
      },
    ],
  },
  {
    title: "Forms",
    items: [
      {
        title: "Forms",
        subtitle: "17 components",
        image: `/static/browse/forms_${mode}.png`,
        path: "/browse/forms",
      },
    ],
  },
  {
    title: "Overlays",
    items: [
      {
        title: "Modals",
        subtitle: "12 components",
        image: `/static/browse/overlays-dialog_${mode}.png`,
        path: "/browse/modals",
      },
    ],
  },
  {
    title: "Charts",
    items: [
      {
        title: "Charts",
        subtitle: "12 components",
        image: `/static/browse/charts_${mode}.png`,
        path: "/browse/charts",
      },
    ],
  },
  {
    title: "Components",
    items: [
      {
        title: "Buttons",
        subtitle: "",
        image: `/static/browse/base-buttons_${mode}.png`,
        path: "/browse/buttons",
      },
      {
        title: "Typography",
        subtitle: "",
        image: `/static/browse/base-typography_${mode}.png`,
        path: "/browse/typography",
      },
      {
        title: "Colors",
        subtitle: "",
        image: `/static/browse/base-colors_${mode}.png`,
        path: "/browse/colors",
      },
      {
        title: "Inputs",
        subtitle: "",
        image: `/static/browse/base-inputs_${mode}.png`,
        path: "/browse/inputs",
      },
    ],
  },
];

const Home = () => {
  const theme = useTheme();
  const sections = getSections(theme.palette.mode);

  useEffect(() => {
    gtm.push({ event: "page_view" });
  }, []);

  return (
    <>
      <Head>
        <title>Afalgun</title>
      </Head>
      <Box
        component="main"
        sx={{
          backgroundColor: "background.paper",
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth="lg">
          <Stack>
            <CategoryList/>
          </Stack>
          <Stack marginTop={2}>
            <Typography variant="h2" align="center">
              {" "}
              Latest Ads
            </Typography>
            <GridList1 />
          </Stack>
        </Container>
      </Box>
    </>
  );
};

Home.getLayout = (page) => (
  <MainLayout>
    <BrowseLayout>{page}</BrowseLayout>
  </MainLayout>
);

export default Home;

