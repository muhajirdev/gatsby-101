import React from "react";
import { Component } from "react";

/* SubscribeCSS */

import Layout from "../../components/layouts/layout";

import SEO from "../../components/seo";
import SubscribeForm from "../../components/subscribe/subscribeForm";

/* material-ui */
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

/* rebass */
import { Flex } from "rebass";

/* Mailto */
import Mailto from 'react-protected-mailto'


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
    fontWeight: 700,
    // fontWeight: "bold" 
    width: "20rem", 
    color: "white",
    padding: "0em 1rem 0em 1rem",   
  }
};

class Subscribe extends Component {
  render() {
    const { classes } = this.props;
    const dt = new Date();
    const year = dt.getFullYear();

    return (
      <Layout backgroundColor="white" textColor="black">
        <SEO title="Boost" keywords={[`gatsby`, `application`, `react`]} />
        {/* <Flex
          // className={classes.textContainer}
          minWidth={["100%", "100%", "100%"]}
          minHeight={["100%", "100%", "100%"]}
          // Header 5rem
          pt="5rem"
        > */}
          <div
            style={{
              minHeight: "100vh",
              minWidth: "100%",
              backgroundImage: "url(/daniela-cuevas.jpg)",
              width: "100%",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center center",
              // Header's zIndex == 200
              zIndex: 200
            }}
          >
            <div
              style={{
                minHeight: "100vh",
                minWidth: "100%",
                background: "rgba(0, 0, 0, 0.3)",
                backgroundSize: "cover",
                backgroundPosition: "center center",
                zIndex: -50
              }}
            >
              <div
                style={{
                  minHeight: "100vh",
                  minWidth: "100%",
                  background:
                    "linear-gradient(0deg, rgba(44, 44, 44, 0.2), rgba(224, 23, 3, 0.6))",
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                  zIndex: -50
                }}
              >
                <Flex
                  // className={classes.textContainer}
                  flexDirection={["column", "column", "column"]}
                  width={["100%", "60%", "25%"]}
                  // Header 5rem
                  pt="12rem"
                  alignSelf="center"
                  alignItems="center"
                  justifyContent="center"
                  mx="auto"
                  px="4"
                >
                  <div
                    style={{
                      color: "white",
                      maxWidth: "40em",
                      textAlign: "center",
                      paddingBottom: "1em"
                    }}
                  >
                    <Typography
                      variant="display2"
                      style={{
                        color: "white",
                        maxWidth: "20em",
                        textAlign: "center"
                      }}
                    >
                      MELDEN SIE SICH AN, UM UPDATES ZU ERHALTEN
                    </Typography>
                    <Typography
                      variant="heading"
                      style={{
                        color: "white",
                        maxWidth: "25em",
                        textAlign: "center"
                      }}
                    >
                      Wir möchten, dass Sie als Erster Neuigkeiten, besondere
                      Angebote und Einladungen erhalten. Füllen Sie zur
                      Registrierung das Formular aus.
                    </Typography>
                  </div>

                  <div>
                    <SubscribeForm />
                  </div>

                  {/* <Flex
              // className={classes.textContainer}
              flexDirection={["row", "row", "row"]}
              width={["100%", "100%", "100%"]}
              // Header 5rem
              pt="0.5rem"
              alignSelf="left"
              alignItems="left"
              justifyContent="center"
              textAlign="left"
              padding="10em"
              mx="auto"
              px="5em"
              py="1em"
            > */}
                </Flex>
                <div>
                  <Flex mx="auto" justifyContent="center">
                    <Typography variant="heading" className={classes.logo}>need help?&nbsp;
                    <Mailto className={classes.link} email="info@stockboost.de"
                       headers={{ subject: 'NoFAQ / Kunde ist König', body: 'Sehr geehrtes StockBoost Team, ' }} />  
                    </Typography>           
                    <Typography variant="subheading" className={classes.logo} style={{color: "#FF8000"}}>
                      <a className={classes.link} href="/">Copyright © {year} BOOST All Rights Reserved.</a>
                    </Typography>
                    {/* </Flex> */}
                   
                  </Flex>
                  </div>
           
              </div>
            </div>
          </div>
        {/* </Flex> */}
      </Layout>
    );
  }
}

export default withStyles(styles)(Subscribe);
