import React, { useEffect, useRef } from "react";
import { Link } from "gatsby";
import { TweenLite } from "gsap";
import Typography from "@material-ui/core/Typography";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Icon from "../components/icon";
import styled from "styled-components";
// rebass 
import { Flex, Box, Text } from "rebass";

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
        opacity: "0.2",
        color: "#fff", 
};
 

const GreenSock = () => {
  const ref = useRef(null);

  useEffect(() => {
    TweenLite.from(ref.current, 1, { x: "-1000%", y: "-500%" },{scale: 5, autoAlpha:1}, {delay:1000}, {duration: 100} );
  }, []);

  return (  
    <>
    <Typography variant="display" style={gsapStyle}>
      <Text fontSize={[ 4, 6, 6 ]} fontWeight='bold' ref={ref}>
        Systematische Regeln        
      </Text>
    </Typography> 
    <Typography variant="display" style={gsapStyle}>
      <Text fontSize={[ 4, 6, 6 ]} fontWeight='bold' ref={ref}>
        Transparente Echtgeld Umsetzung         
      </Text>
    </Typography> 
    <Typography variant="display" style={gsapStyle}>
      <Text fontSize={[ 4, 6, 6 ]} fontWeight='bold' ref={ref}>
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
`;

const IndexPage = () => (
  <Layout
    backgroundColor=""
    textColor="white"
  >
    <SEO title="Boost" keywords={[`gatsby`, `application`, `react`]} />
    
    <Flex
      // Header 5rem
      // bg='magenta'
      minHeight={[ 1, 1, 1 ]}
      minWidth={[ 1, 1, 1 ]}
      flexDirection={["column", "column", "column"]}
      flexWrap="nowrap"   
      alignSelf = "center"
      alignItems = "center"
      justifyContent= "flexStart"
      textAlign="center"
      marginLeft="auto"
      marginRight="auto"
    >
   
    <div
      style={{
        minHeight: "100vh",
        minWidth: "100%",
        background:"linear-gradient(0deg, rgba(64, 51, 51, 0), rgba(31, 26, 26, 0.6))",
        backgroundImage: "url(/brooklyn-bridge.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        position: "absolute",
        zIndex: -100
      }}
    />
    <div
      style={{
        minHeight: "100vh",
        minWidth: "100%",
        background: "linear-gradient(0deg, rgba(44, 44, 44, 0.2), rgba(224, 23, 3, 0.6))",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        position: "absolute",
        zIndex: -100
      }}
    />
    <div
      style={{
        minHeight: "100vh",
        minWidth: "100%",
        background: "rgba(0, 0, 0, 0.3)",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        position: "absolute",
        zIndex: -100
      }}
    />
       
   <Box
      flexDirection={["row", "row", "row"]}
      // Header 5rem
      // bg='magenta'
      pt="13.5rem"
      marginRight="auto"
      marginLeft="auto"
      fontSize={40}
      width={[ 1, 1, 1/2 ]}
      color='#fff'
      justifyContent="center"
      alignItems="center"
      textAlign="center"
      alignSelf="center"
      mx="auto"
      p={10}    
      padding="40px" 
      style={{textAlign:"center"}}
   >   
      
              <Typography variant="heading" style={{color:"#fff", fontWeight:"bold"}}>
                Wie man systematisch & entspannt in Aktien investiert - Boost
              </Typography>
              <Typography variant="heading">
                Ein Team aus erfahrenen Händlern schlägt die Brücke in die Wissenschaft!
                <br />
                Basierend auf akademischer Literatur haben wir ein Regelwerk zusammengestellt, das wir systematisch als Anlagestrategie in einem Echtgelddepot(!) anwenden. Sie wollen wissen, worauf genau wir uns beziehen? Kein Problem!
              </Typography>
              
              <StyledLink to="/anlagekonzept">
                <Typography variant="display1" style={{color:"#FF8000"}}>
                  Mehr erfahren
                </Typography>
              </StyledLink>
              <StyledLink to="/anlagekonzept" >
                  <Icon source={require("../icons/bulb.svg")}  />
              </StyledLink>
     
      </Box>

      <Box
        flexDirection={["column", "column", "column"]}
        // Header 5rem
        // bg='magenta'
        height="100%"
        marginTop= "-75%"
        paddingTop="75%"
        mx="auto"
        fontSize={4}
        width={[ 1, 1, 1/2 ]}
        color='#fff'
        justifyContent="flexStart"
        alignItems="flexStart"
        textAlign="flexStart"
        alignSelf="flexStart"
        mx="auto"                    
        > 
          <GreenSock /> 
      </Box>
    </Flex>
  </Layout>
);

export default IndexPage;
