import React, { useState } from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql, Link } from "gatsby";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { Button } from "rebass";

import Header from "../header";
import Footer from "../footer";
import "../../styles/layout.css";

// Fonts
import CopernicusEot from "../../assets/fonts/Copernicus-Roman.eot";
import CopernicusTTF from "../../assets/fonts/Copernicus-Roman.ttf";
import CopernicusWoff from "../../assets/fonts/Copernicus-Roman.woff";
import DejaVuSerif from "../../assets/fonts/DejaVuSerif.ttf";
import NotoSerifRegular from "../../assets/fonts/NotoSerif-Regular.ttf";

// CookieConsent 
import CookieConsent from "react-cookie-consent";


const styledComponentsTheme = {
  brand: "#ff8000"
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
    useNextVariants: true
    /* fontFamily: ["acumin-pro", "sans-serif"].join(","), */
    // Copernicus-Roman?
    // fontFamily: [
    //   "Helvetica",
    //   "Montserrat",
    //   "Helvetica Neue",
    //   "Arial",
    //   "Georgia",
    //   "sans-serif"
    // ].join(","),
    // fontWight: 700,
    // fontWeight: "bold",
    // fontStyle: "normal",
    // fontSize: 12
  }
});

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "DejaVuSerif";
    font-style: normal;
    font-weight: normal;
    src: local("DejaVuSerif"), local("DejaVuSerif"), url(${DejaVuSerif}) format("ttf");
  }
  @font-face {
    font-family: "Noto Serif", serif;
    font-style: normal;
    font-weight: normal;
    src: local("NotoSerif-Regular"), local("NotoSerif-Regular"), url(${NotoSerifRegular}) format("ttf");
  }
  @font-face {
    font-family: "Copernicus-Roman";
    font-style: normal;
    font-weight: normal;
    src: local("Copernicus-Roman"), local("Copernicus-Roman"), url(${CopernicusTTF}) format("ttf"), url(${CopernicusWoff}) format("woff"), url(${CopernicusEot}) format("eot");
  }
  html {
    // Acumin Pro Bold - font-weight: 700; 
    // Acumin Pro Regular - font-weight: 400; 
    font-family: 'acumin-pro', sans-serif !important; 
    font-weight: 700; 
    font-style: normal;
  }
`;

const Layout = ({ children, backgroundColor, textColor }) => {
  const [selectedDropdown, setSelectedDropdown] = useState("");
  // const [GDPRVisible, setGDPRVisible] = useState(true);
  return (
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
          <ThemeProvider theme={styledComponentsTheme}>
            <MuiThemeProvider theme={theme}>
              <Header
                selectedDropdown={selectedDropdown}
                setSelectedDropdown={setSelectedDropdown}
                siteTitle={data.site.siteMetadata.title}
                backgroundColor={backgroundColor}
                textColor={textColor}
              />
              <GlobalStyle />
              <div onClick={() => setSelectedDropdown("")}>
                <main style={{ minHeight: "100vh" }}>{children}</main>
              </div>
              <div
                style={{
                  height: "4rem",
                  marginTop: "auto",
                  marginBottom: "auto"
                }}
              />
              <Footer />
              <CookieConsent  
                              acceptOnScroll={true}
                              acceptOnScrollPercentage={50}
                              location="bottom"
                              buttonText="Okay"
                              cookieName="www.StockBoost.de"
                              style={{ background: "rgba(0,0,0,0.8)" }}
                              buttonStyle={{ color: "#4e503b", fontWeight: "bold", textAlign:"center", alignItems:"center", borderRadius:"0", fontSize: "13px", background:"transparent" }}
                              expires={1}
          >              
                  <span>
                    Wir verwenden Cookies, um unser Angebot für Sie zu
                    verbessern. Mehr Informationen dazu finden Sie in unserer
                    Datenschutzerklärung.
                  </span>
                  <Link to="/datenschutz">
                    <Button ml="3" borderRadius="0" bg="transparent">
                      Mehr Infos
                    </Button>
                  </Link>
               
              </CookieConsent>
              
              {/* {GDPRVisible && (
                <Flex
                  width={1}
                  justifyContent="center"
                  alignItems="center"
                  bg="rgba(0,0,0,0.8)"
                  color="white"
                  py="3"
                  style={{
                    position: "fixed",
                    bottom: 0,
                    zIndex: 500
                  }}
                >
                  <span>
                    Wir verwenden Cookies, um unser Angebot für Sie zu
                    verbessern. Mehr Informationen dazu finden Sie in unserer
                    Datenschutzerklärung.
                  </span>
                  <Button
                    ml="3"
                    borderRadius="0"
                    bg="transparent"
                    onClick={() => setGDPRVisible(false)}
                  >
                    Okay
                  </Button>
                  <Link to="/datenschutz">
                    <Button ml="3" borderRadius="0" bg="transparent">
                      Mehr Infos
                    </Button>
                  </Link>
                </Flex>
              )} */}
            </MuiThemeProvider>
          </ThemeProvider>
        </>
      )}
    />
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
