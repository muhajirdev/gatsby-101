import React, { useEffect, useRef } from "react";
import { Link } from "gatsby";
import { TweenLite, TweenMax } from "gsap";
import { Elastic } from "gsap/EasePack";
import Typography from "@material-ui/core/Typography";



import Layout from "../components/layout";
import SEO from "../components/seo";
import Icon from "../components/icon";
import styled from "styled-components";
// rebass
import { Flex, Box, Text } from "rebass";
import FullScreen from "../components/fullscreen";

// const FullScreen = Styled(Flex)`
//     // ${minHeight}
//     // ${minWidth}
//     width: 100vw;
//     height: 100vh;
// `

const gsapStyle = {
  // textTransform: "uppercase",
  fontFamily: "acumin-pro, sans-serif !important",
  fontWeight: "700",
  textAlign: "left",
  letterSpacing: "-0.25rem",
  whiteSpace: "nowrap",
  lineHeight: "1.85rem",
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

const StyledLink = styled(Link)`
  font-size: 15;
  text-decoration: none;
  color: #ff8000;
  z-index: 0;
`;

const Background1 = ({ children }) => (
  <div
    style={{
      minHeight: "100vh",
      minWidth: "100%",
      background:
        "linear-gradient(0deg, rgba(64, 51, 51, 0), rgba(31, 26, 26, 0.6))",
      backgroundImage: "url(/brooklyn-bridge.jpg)",
      backgroundSize: "cover",
      backgroundPosition: "center center",
      zIndex: 0
    }}
  >
    {children}
  </div>
);

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

const IndexPage = () => (
  <Layout backgroundColor="" textColor="white">
    <SEO title="StockBoost" keywords={[`gatsby`, `application`, `react`]} />

    <FullScreen
      // Header 5rem
      // bg='magenta'
      flexDirection={["column", "column", "column"]}
      flexWrap="nowrap"
      alignSelf="center"
      alignItems="center"
      justifyContent="space-between"
      textAlign="center"
      marginLeft="auto"
      marginRight="auto"
    >
      <Background1>
        <Background2>
          <Background3>
            <Box 
              flexDirection={["row", "row", "row"]}
              // Header 5rem
              // bg='magenta'
              pt="13.5rem"
              marginRight="auto"
              marginLeft="auto"
              fontSize={40}
              width={[1, 1, 3 / 4]}
              color="#fff"
              justifyContent="center"
              alignItems="center"
              textAlign="center"
              alignSelf="center"
              mx="auto"
              p={100}
              style={{ textAlign: "center" }}
            >
              <Text style={{ color: "#fff", fontWeight: "bold", padding: "1rem 0rem 1rem 0rem"}} fontSize={[3, 5]}>
                Wie man systematisch & entspannt in Aktien investiert - StockBoost
              </Text>
              <Text style={{ color: "#fff", fontWeight: "normal", padding: "1rem 0rem 1rem 0rem"}} fontSize={[2, 2]}>
                Ein Team aus erfahrenen Händlern schlägt die Brücke in die Wissenschaft!
                <br />
                Basierend auf akademischer Literatur haben wir ein Regelwerk zusammengestellt, das wir systematisch als Anlagestrategie in einem Echtgelddepot anwenden. 
                <br />
                Sie wollen wissen, worauf genau
                wir uns beziehen? Kein Problem!
              </Text>

              <Text style={{ color: "#FF8000", fontWeight: "bold", padding: "1rem 0rem 1rem 0rem"}} fontSize={[2, 5]}>
              <StyledLink to="/anlagestrategie"> Mehr erfahren</StyledLink>
              </Text>
         
              <StyledLink to="/anlagestrategie">
                <div>
                  <img
                    style={{ width: "2rem" }}
                    src={require("../icons/bulb.svg")}
                  />
                </div>
              </StyledLink>
            </Box>

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
              mx="auto"
            >
              <GreenSock />
            </Box>

          </Background3>
        </Background2>
      </Background1> 
    </FullScreen>
  </Layout>
);

export default IndexPage;
