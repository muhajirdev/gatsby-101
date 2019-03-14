import React from "react";
import { Link } from "gatsby";
import { Component } from "react";

/* SubscribeCSS */

import Layout from "../components/layout";

import SEO from "../components/seo";
import SubscribeForm from "../components/subscribeForm";
import Icon from "../components/icon";

/* styled */
import styled from "styled-components";

/* material-ui */
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

/* rebass */
import { Box, Flex } from "rebass";

const StyledLink = styled(Link)`
  font-size: 9;
  text-decoration: none;
  color: #ff8000;
`;

const styles = {
  heading: {
    color: "#fff"
  },
  copyright: {
    color: "#fff",
    textAlign: "center"
  },
  link: {
    color: "#FF8000",
    textDecoration: "none"
  },
  container: {
    display: "flex",
    flexFlow: "column wrap",
    marginTop: "auto",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "auto",
    background: "#353535"
  },
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },

  logo: {
    fontWeight: 700
  }
};

const Subscribe = () => (
  <Layout type="home">
    <SEO title="Boost" keywords={[`gatsby`, `application`, `react`]} />
    <Flex
      // className={classes.textContainer}
      minWidth={["100%", "100%", "100%"]}
      minHeight={["100%", "100%", "100%"]}
      // Header 5rem
      pt="5rem"
    >
      <div
        style={{
          // minheight: "100vh",
          // minWidth: "100vh",
          backgroundImage: "url(/daniela-cuevas.jpg)",
          width: "100%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          zIndex: -100
        }}
      >
        <div
          style={{
            // minheight: "100vh",
            // minWidth: "100vh",
            background: "rgba(0, 0, 0, 0.3)",
            backgroundSize: "cover",
            backgroundPosition: "center center",
            zIndex: -50
          }}
        >
          <div
            style={{
              // minheight: "100vh",
              // minWidth: "100vh",
              background:
                "linear-gradient(0deg, rgba(44, 44, 44, 0.2), rgba(224, 23, 3, 0.6))",
              backgroundSize: "cover",
              backgroundPosition: "center center",
              zIndex: -50
            }}
          >
            <Flex
              // className={classes.textContainer}
              flexDirection={["column", "column", "row"]}
              width={["100%", "80%", "40%"]}
              // Header 5rem
              pt="5rem"
              alignSelf="center"
              alignItems="center"
              justifyContent="flexStart"
              textAlign="left"
              mx="auto"
              // px="4"
            >
              <div>
                <SubscribeForm />
              </div>
            </Flex>
          </div>
        </div>
      </div>
    </Flex>
    {/* <div
    style={{
      height: "100%",
      width: "100%",
      background: "rgba(0, 0, 0, 0.3)",
      position: "absolute",
      zIndex: 100
    }}
  />
      <div
        style={{
          height: "100%",
          width: "100%",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          position: "absolute",
          zIndex: 100
        }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignSelf: "center",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          width: "100%",
          background:
            "linear-gradient(0deg, rgba(44, 44, 44, 0.2), rgba(224, 23, 3, 0.6))",
          position: "absolute",
          textAlign: "center",
          zIndex: 100
        }}
      >

        <Box
              //className={classes.textContainer}
              // bg={['red', 'blue']}
              width={["90%", "75%", "25%"]}
              height={["100%"]}
              style={{
                display: "flex",
                flexDirection: "column",
                flexWrap: "nowrap",
                justifyContent: "center",
                alignItems: "center",
                alignText: "left",
                marginTop: "5rem",
                marginBottom: "5rem",
                marginLeft: "auto",
                marginRight: "auto",
                color: "#fff"
              }}
            >
        
        <Typography
          variant="display2"
          style={{ color: "#fff", maxWidth: "20em" }}
        >
          MELDEN SIE SICH AN, UM UPDATES ZU ERHALTEN
        </Typography>
        <Typography variant="heading" style={{ color: "white" }}>
          Wir möchten, dass Sie als Erster Neuigkeiten, besondere Angebote und
          Einladungen erhalten. Füllen Sie zur Registrierung das Formular aus.
        </Typography>
        
        {/* SubscribeForm  */}
    {/* <SubscribeForm />         */}
    {/* </Box> */}
    {/* // </div>  */} */}
  </Layout>
);
// class Subscribe extends Component {
//   render() {
//     const { classes } = this.props;
//     return (
//       <Layout>
//         <SEO title="Newsletter" />
//         <div
//           style={{
//             height: "100vh",
//             backgroundSize: "cover"
//           }}
//         >
//         <div>

//         </div>
//           <div
//             style={{
//               height: "100%",
//               justifyContent: "center",
//               alignItems: "center",
//               flexDirection: "column",
//               display: "flex",
//               maxWidth: "50%",
//               marginLeft: "auto",
//               marginRight: "auto"
//             }}
//             classesName={classes.container}
//           >
//           </div>
//         </div>
//       </Layout>
//     );
//   }
// }
export default withStyles(styles)(Subscribe);
