import React, { useState } from "react";
import { Component } from "react";
import { StaticQuery } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import { Box } from "rebass";
import styles from "../styles";

import SEO from "../components/seo";
import Layout from "../components/layout";

// rebass
import FullScreen from "../components/fullscreen";

/* MUI */
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

const Background1 = ({ children, graphqlSource }) => {
  return (
    // <div
    //   style={{
    //     minHeight: "100vh",
    //     minWidth: "100%",
    //     background:
    //       "linear-gradient(0deg, rgba(64, 51, 51, 0), rgba(31, 26, 26, 0.6))",
    //     // backgroundImage: `url(/tyler-reynolds.jpg)`,
    //     backgroundImage: `url(${source})`,
    //     backgroundSize: "cover",
    //     backgroundPosition: "center center",
    // backgroundAttachment: "fixed",
    //     zIndex: 0
    //   }}
    // >
    //   {children}
    // </div>
    <StaticQuery
      query={graphqlSource}
      render={data => {
        // Set ImageData.
        const imageData = data.desktop.childImageSharp.fluid;
        return (
          <BackgroundImage
            Tag="section"
            fluid={imageData}
            backgroundColor={`#040e18`}
          >
            {children}
          </BackgroundImage>
        );
      }}
    />
  );
};

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
      backgroundGraphqlSource,
      seoTitle,
      navigationView
    } = this.props;
    const dt = new Date();
    const year = dt.getFullYear();
    return (
      <Layout>
        <SEO title={seoTitle} />

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
          <Background1 graphqlSource={backgroundGraphqlSource}>
            <Background2>
              <Background3>
                <Box
                  flexDirection={["row", "row", "row"]}
                  // Header 5rem
                  // bg='magenta'
                  pt="6rem"
                  marginRight="auto"
                  marginLeft="auto"
                  fontSize={4}
                  width={[1, 1, 2 / 3]}
                  color="#fff"
                  // justifyContent="flexStart"
                  // alignItems="flexStart"
                  // textAlign="flexStart"
                  // alignSelf="flexStart"
                  mx="auto"
                  p={10}
                  padding="40px"
                >
                  <Typography variant="subheading">
                    <img
                      style={{
                        width: "1rem",
                        margin: 0,
                        padding: 0,
                        transform: "rotate(270deg)"
                      }}
                      src={require("../icons/muiHome.svg")}
                    />{" "}
                    > {navigationView}
                  </Typography>
                  <Typography variant="display1"> {seoTitle} </Typography>
                  {children}
                </Box>
              </Background3>
            </Background2>
          </Background1>
        </FullScreen>
      </Layout>
    );
  }
}
export default withStyles(styles)(PageLayout);
