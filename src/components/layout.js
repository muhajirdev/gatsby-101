import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import { createGlobalStyle } from "styled-components";

import Header from "./header";
import Footer from "./footer";
import "./layout.css";

const yellow = {
  50: "#3ea5d7",
  100: "#3ea5d7",
  200: "#3ea5d7",
  300: "#3ea5d7",
  400: "#3ea5d7",
  500: "#3ea5d7",
  600: "#3ea5d7",
  700: "#3ea5d7",
  800: "#3ea5d7",
  900: "#3ea5d7",
  A100: "#3ea5d7",
  A200: "#3ea5d7",
  A400: "#3ea5d7",
  A700: "#3ea5d7",
  contrastDefaultColor: "light"
};

const theme = createMuiTheme({
  root: {
    backgroundColor: "transparent"
  },
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: "#FFFFFF"
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: "#0066ff",
      main: "#0044ff",
      // dark: will be calculated from palette.secondary.main,
      contrastText: "#ffcc00"
    }
    // error: will use the default color
  },
  accent: {
    light: "#0066ff",
    main: "#0044ff",
    // dark: will be calculated from palette.secondary.main,
    contrastText: "#ffcc00"
  },
  overrides: {
    MuiDrawer: {
      paper: {
        background: "#18202c",
        backgroundColor: "transparent",
        boxShadow: "none",
        overflow: "hidden",
        // this is where magic happens
        "& *": { color: "rgba(255, 255, 255, 0.7)" }
      }
    }
  },
  typography: {
    useNextVariants: true,
    /* fontFamily: ["acumin-pro", "sans-serif"].join(","), */
    fontFamily: ["Montserrat", "Helvetica Neue", "Arial", "sans-serif"].join(
      ","
    ),
    fontWight: 700,
    fontWeight: "bold",
    fontStyle: "normal",
    fontSize: 12
  }
});

const GlobalStyle = createGlobalStyle`
  html {
    font-family: 'acumin-pro', sans-serif !important; 
    font-weight: 700; 
    font-style: normal;
  }
`;

const Layout = ({ children, type }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <MuiThemeProvider theme={theme}>
          <Header siteTitle={data.site.siteMetadata.title} type={type} />
          <GlobalStyle />
          <div>
            <main style={{ minHeight: "100vh" }}>{children}</main>
          </div>
          <div style={{ height: "5rem" }} />
          <Footer />
        </MuiThemeProvider>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
