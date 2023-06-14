import PropTypes from "prop-types";
import Link from "next/link";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,

  Toolbar,
  Typography,
} from "@mui/material";
import { Menu as MenuIcon } from "../icons/menu";
// import { Logo } from "./logo";

export const MainNavbar = (props) => {
  const { onOpenSidebar } = props;

  return (
    <AppBar
      elevation={0}
      sx={{
        backgroundColor: "background.paper",
        borderBottomColor: "divider",
        borderBottomStyle: "solid",
        borderBottomWidth: 1,
        color: "text.secondary",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ minHeight: 64 }}>
         
          <Box sx={{ flexGrow: 1 }} />
          <IconButton
            color="inherit"
            onClick={onOpenSidebar}
            sx={{
              display: {
                md: "none",
              },
            }}
          >
            <MenuIcon fontSize="small" />
          </IconButton>
          <Box
            sx={{
              alignItems: "center",
              display: {
                md: "flex",
                xs: "none",
              },
            }}
          >
            <Link href="/" passHref>
             
              <Typography
                sx={{ ml: 2 }}
                color="textSecondary"
                underline="none"
                variant="subtitle2"
              >
               
                Home
              </Typography>
            </Link>
            <Link href="/" passHref>
              <Typography
                sx={{ ml: 2 }}
                color="textSecondary"
                underline="none"
                variant="subtitle2"
              >
                Post or report
              </Typography>
            </Link>
            <Link href="/" passHref>
              <Typography
                sx={{ ml: 2 }}
                color="textSecondary"
                underline="none"
                variant="subtitle2"
              >
                how to post ?{" "}
              </Typography>
            </Link>
            <Link href="/auth/login" passHref>
              
                <Button
                
                  size="medium"
                  sx={{ ml: 2 }}
                  target="_blank"
                  variant="contained"
                >
                  Login
                </Button>
             
            </Link>
            <Link href="/browse" passHref>
              <Typography
                color="textSecondary"
                sx={{ ml: 2 }}
                underline="none"
                variant="subtitle2"
              >
                Components
              </Typography>
            </Link>
            <Link href="/docs/welcome" passHref>
              <Typography
                color="textSecondary"
                
                sx={{ ml: 2 }}
                underline="none"
                variant="subtitle2"
              >
                Documentation
              </Typography>
            </Link>
            {/* <Button
              component="a"
              href="https://material-ui.com/store/items/devias-kit-pro"
              size="medium"
              sx={{ ml: 2 }}
              target="_blank"
              variant="contained"
            >
              Buy Now
            </Button> */}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

MainNavbar.propTypes = {
  onOpenSidebar: PropTypes.func,
};
