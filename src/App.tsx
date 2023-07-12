import React, {useState} from "react";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";
import { languages, languagesType, localization } from './localization'
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Container, Grid } from "@mui/material";
import {maxWidth} from './common/constants'

const theme = createTheme({
  palette: {
    primary: {
      light: "#27AE60",
      main: "#27AE60",
      dark: "#27AE60",
      contrastText: "#fff",
    },
    secondary: {
      light: "#27AE60",
      main: "#27AE60",
      dark: "#27AE60",
      contrastText: "#27AE60",
    },
  },

  components: {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          color: "#0E263E",
          backgroundColor: "#fff",
        },
      },
    },
  },
});

function App() {
  const [language, setLanguage] = useState<languagesType>(languages[0])

  return (
    <ThemeProvider theme={theme}>
      <Container
        sx={{
          minHeight: "100%",
          maxWidth: maxWidth,
        }}
        maxWidth={false}
      >
        <Grid container>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <Header setLanguage={setLanguage}/>
          </Grid>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <Main language={language.code}/>
          </Grid>
        </Grid>
      </Container>
      <Footer language={language.code}/>
    </ThemeProvider>
  );
}

export default App;
