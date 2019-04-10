import React from "react";
import { Component } from "react";
import { StaticQuery, graphql } from "gatsby";
import { Box } from "rebass";
import Layout from "../layout";
import FullScreen from "../fullscreen";
import SEO from "../../seo";
import styles from "../../../styles/styles";
/* MUI */
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
// import globalSvg from "../../../assets/svg/global.svg";

const Background2 = ({ children }) => (
  <div
    style={{
      minHeight: "100vh",
      minWidth: "100%",
      background:
        "linear-gradient(0deg, rgba(44, 44, 44, 0.2), rgba(224, 23, 3, 0.6))",
      backgroundSize: "cover",
      backgroundPosition: "center center",
      zIndex: -100
    }}
  >
    {children}
  </div>
);
const Background3 = ({ children }) => (
  <div
    style={{
      minHeight: "100vh",
      minWidth: "100%",
      background: "rgba(0, 0, 0, 0.3)",
      backgroundSize: "cover",
      backgroundPosition: "center center",
      zIndex: -100
    }}
  >
    {children}
  </div>
);

class PageLayout extends Component {
  render() {
    const {
      classes,
      children,
      // backgroundGraphqlSource,
      graphqlSource,
      seoTitle,
      navigationView,
      Background
    } = this.props;

    return (
      <Layout>
        <SEO title={seoTitle} />
        {/* <img src={globalSvg} /> */}

        <FullScreen
          // Header 5rem
          // bg='magenta'
          minHeight={[1, 1, 1]}
          minWidth={[1, 1, 1]}
          flexDirection={["column", "column", "column"]}
          flexWrap="nowrap"
          alignSelf="center"
          alignItems="center"
          justifyContent="flexStart"
          textAlign="center"
          marginLeft="auto"
          marginRight="auto"
        >
          {/* <Background1 graphql={backgroundGraphqlSource}> */}
          <Background src={graphqlSource}>
            <Background2>
              <Background3>
                <Box
                  flexDirection={["row", "row", "row"]}
                  width={[1, 1, 1 / 2]}
                  // Header 5rem
                  // bg='magenta'
                  fontSize={4}
                  pt="12rem"
                  marginRight="auto"
                  marginLeft="auto"
                  color="#fff"
                  justifyContent="flexStart"
                  alignItems="flexStart"
                  textAlign="flexStart"
                  alignSelf="flexStart"
                  mx="auto"
                  p={10}
                  padding="40px"
                >
                  <Typography variant="caption" className={classes.nav}>
                    {/* <img
                      style={{
                        width: "1rem",
                        margin: 0,
                        padding: 0,
                        transform: "rotate(180deg)"
                      }}
                      src={require("../icons/muiHome.svg")}
                    />{" "}
                    >  */}
                    {navigationView}
                  </Typography>
                  <Typography
                    variant="display1"
                    className={classes.nav}
                    style={{ paddingBottom: "1rem" }}
                  >
                    {" "}
                    {seoTitle}
                  </Typography>
                  <div style={{ paddingBottom: "0rem" }}>{children}</div>
                </Box>
              </Background3>
            </Background2>
          </Background>
        </FullScreen>
      </Layout>
    );
  }
}
export default withStyles(styles)(PageLayout);
