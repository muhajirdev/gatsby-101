import React, { useEffect, useRef } from "react";
import PageLayout from "../components/layouts/pagelayouts/index";
import BackgroundImage from "../components/background-image";
import Typography from "@material-ui/core/Typography";
import { StaticQuery, graphql } from "gatsby";
// gsap
import { TweenMax } from "gsap";
// rebass
import { Text, Box, Flex } from "rebass";
//
// import styles, { StyledLink as StyledLink } from "../styles/styles";
import styles, { StyledLink } from "../styles/styles";
import { Link } from "gatsby";
import styled from "styled-components";

const gsapStyle = {
  // textTransform: "uppercase",
  fontFamily: "acumin-pro, sans-serif !important",
  fontWeight: "700",
  textAlign: "left",
  letterSpacing: "-0.1rem",
  whiteSpace: "nowrap",
  lineHeight: "2.75rem",
  opacity: "0.6",
  color: "#fff"
};

const GreenSock = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  useEffect(() => {
    TweenMax.staggerFrom(
      [ref1.current, ref2.current, ref3.current],
      5,
      {
        y: "-5000%"
      },
      0.5
    );
  }, []);

  return (
    <>
      <Typography variant="display" style={gsapStyle}>
        <Text fontSize={[4, 6, 6]} fontWeight="bold" ref={ref1}>
          Systematische Regeln
        </Text>
      </Typography>
      <Typography variant="display" style={gsapStyle}>
        <Text fontSize={[4, 6, 6]} fontWeight="bold" ref={ref2}>
          Transparente Echtgeld Umsetzung
        </Text>
      </Typography>
      <Typography variant="display" style={gsapStyle}>
        <Text fontSize={[4, 6, 6]} fontWeight="bold" ref={ref3}>
          Umsetzbar in wenigen Minuten pro Woche
        </Text>
      </Typography>
    </>
  );
};

export default ({ classes = styles }) => (
  <PageLayout
    seoTitle="Stockboost"
    // navigationView=""
    Background={Background}
  >
    <Box
      flexDirection={["column", "column", "column"]}
      // Header 5rem
      // bg='magenta'
      minHeight="100%"
      fontSize={4}
      width={[1, 1, 3 / 4]}
      color="#fff"
      justifyContent="flexEnd"
      alignItems="flexEnd"
      textAlign="flexEnd"
      alignSelf="flexEnd"
      // mx="auto"
    >
      <GreenSock />
    </Box>

    <Flex
      flexDirection="column"
      px={2}
      color="white"
      //bg='black'
      alignItems="center"
      justifyContent="center"
    >
      <Text
        style={{
          color: "#fff",
          fontWeight: "bold",
          lineHeight: "2.55rem",
          padding: "1rem 0rem 1rem 0rem"
        }}
        fontSize={[3, 6]}
      >
        Wie man systematisch & entspannt in Aktien investiert - StockBoost
      </Text>
      <Text
        style={{
          color: "#fff",
          fontWeight: "normal",
          padding: "1rem 0rem 1rem 0rem"
        }}
        fontSize={[2, 4]}
      >
        Ein Team aus erfahrenen Händlern schlägt die Brücke in die Wissenschaft!
        Basierend auf akademischer Literatur haben wir ein Regelwerk
        zusammengestellt, das wir systematisch als Anlagestrategie in einem
        Echtgelddepot anwenden. Sie wollen wissen, worauf genau wir uns
        beziehen? Kein Problem!
      </Text>

      <Text
        style={{
          color: "#FF8000",
          fontWeight: "bold",
          padding: "1rem 0rem 1rem 0rem"
        }}
        fontSize={[2, 5]}
      >
        <StyledLink to="/Strategie/anlagestrategie"> Mehr erfahren</StyledLink>
      </Text>

      <StyledLink to="/Strategie/anlagestrategie">
        <div>
          <img
            alt="bulb.svg"
            style={{ width: "2rem" }}
            src={require("../icons/bulb.svg")}
          />
        </div>
      </StyledLink>
    </Flex>
  </PageLayout>
);

const Background = ({ children }) => {
  return (
    <StaticQuery
      query={graphql`
        query {
          desktop: file(relativePath: { eq: "wallpaper/brooklynBridge.jpg" }) {
            childImageSharp {
              fluid(quality: 100, maxWidth: 4160) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      `}
      render={data => <BackgroundImage data={data}>{children}</BackgroundImage>}
    />
  );
};
