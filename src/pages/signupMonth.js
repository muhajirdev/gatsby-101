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

import { Flex } from "rebass";

const StyledLink = styled(Link)`
  font-size: 9;
  text-decoration: none;
  color: #ff8000;
`;

const styles = theme => ({
  heading: {
    color: "#fff",
    marginBottom: "1rem",
    fontWeight: "normal",
    padding: "1em 5em 1em 0em",
    border: "2px solid #FF8000"
  },
  blocksatz: {
    padding: "5px 0px 5px 0px"
  },
  copyright: {
    color: "#fff",
    textAlign: "center"
  },
  link: {
    color: "#FF8000",
    textDecoration: "none"
  },
  logo: {
    fontWeight: 700
  }
});

const StyledIframe = styled.iframe`
  height: -webkit-fill-available;
  height: 100%;
  width: 1px;
  min-width: 100%;
  *width: 100%;
  overflow: -moz-scrollbars-none;
  border: none;
  margin-bottom: 1rem;
  &::-webkit-scrollbar {
    width: 0;
    background-color: transparent;
    display: none;
  }
`;

class Abonnement extends Component {
  render() {
    const { classes } = this.props;
    const dt = new Date();
    const year = dt.getFullYear();
    return (
      <Layout type="home">
        <SEO title="Boost" keywords={[`gatsby`, `application`, `react`]} />
        <div
          style={{
            minHeight: "100vh",
            width: "100%",
            background: "rgba(0, 0, 0, 0.3)",
            position: "absolute",
            zIndex: 0
          }}
        />
        <div
          style={{
            minHeight: "100vh",
            width: "100%",
            backgroundImage: "url(/pricing.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center center",
            position: "absolute",
            zIndex: 0
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignSelf: "center",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100vh",
            width: "100%",
            background:
              "linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.6))",
            position: "absolute",
            textAlign: "center",
            zIndex: 0
          }}
        >
         <Flex
            className={classes.textContainer}
            // bg={['red', 'blue', 'green']}
            minHeight={["100vh","100vh","100vh"]}
            minWidth={["100%", "75%", "60%"]}
            // Header 5rem
            pt="10rem"
            mx="auto"
            flexDirection="column"
            flex="1 1 auto"
            flexWrap="nowrap"
            justifyContent="flexStart"
            alignItems="left"
            >
            <div 
              style={{
                minHeight: "80vh",
                minWidth: "60vw",
                border: "10px solid #fff",
                alignText: "left",
                marginBottom: "1rem"
            }}>
            <StyledIframe     
              src="https://sandbox.billwerk.com/portal/signup.html#/5c88c072443e550ea0751415?language=de&country=DE"
            />
            </div>
          </Flex>
        </div>
      </Layout>
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
    );
  }
}

export default withStyles(styles)(Abonnement);
