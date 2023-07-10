import React from "react";
import "../styles/globals.css";
import { AuthProvider } from "../context/AuthContext";
import { ThemeProvider } from "@mui/material/styles";
import {
  SettingsConsumer,
  SettingsProvider,
} from "../context/settings-context";
import {createTheme} from "../theme";
import { QueryClient, QueryClientProvider } from "react-query";


function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  const queryClient = new QueryClient();

  return (
    <AuthProvider>
       <QueryClientProvider client={queryClient}>

      <SettingsProvider>
        <SettingsConsumer>
          {({ settings }) => (
            <ThemeProvider
              theme={createTheme({
                direction: settings.direction,
                responsiveFontSizes: settings.responsiveFontSizes,
                mode: settings.theme,
              })}
            >
              {getLayout(<Component {...pageProps} />)}
            </ThemeProvider>
          )}
        </SettingsConsumer>
      </SettingsProvider>
      </QueryClientProvider>
    </AuthProvider>
  );
}

export default MyApp;
