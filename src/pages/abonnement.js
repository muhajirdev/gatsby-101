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

import { Box,Flex } from "rebass";

/* Icons */
import MonthIcon from "@material-ui/icons/Explore";
import YearIcon from "@material-ui/icons/PowerSettingsNew";

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
  },
  largeIcon: {
    width: 60,
    height: 60
  }
});

class Abonnement extends Component {
  render() {
    const { classes } = this.props;
    const dt = new Date();
    const year = dt.getFullYear();
    return (
      <Layout backgroundColor="#fdf22f" textColor="black">
        <SEO title="Abonnement" keywords={[`gatsby`, `application`, `react`]} />      
        
        
        <Flex
              className={classes.textContainer}
              minWidth={["100%", "100%", "100%"]}
              minHeight={["100%","100%","100%",]}
              // Header 5rem
              pt="5rem"
            >         

        <div
          style={{
            minHeight: "100vh",
            minWidth: "100vw",           
            backgroundImage: "url(/pricing.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center center",
            zIndex: -100
          }}
        >   
        <div
          style={{
            minHeight: "100vh",
            minWidth: "100vw",    
            background: "rgba(0, 0, 0, 0.3)",
            backgroundSize: "cover",
            backgroundPosition: "center center",
            zIndex: -50
          }}
        > 
        <div
          style={{
            minHeight: "100vh",
            minWidth: "100vw",     
            background: "linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.6))",
            backgroundSize: "cover",
            backgroundPosition: "center center",
            zIndex: -50
          }}
        > 

           <Flex
              className={classes.textContainer}
              flexDirection={["column", "column", "row"]}
              width={["100%", "80%", "40%"]}
              // Header 5rem
              pt="12rem"
              alignSelf = "center"
              alignItems = "center"
              justifyContent= "flexStart"
              textAlign="left"
              mx="auto"
              px="4"       
            
            > 
              <div
                style={{ color: "#FF8000" }}
              > 
                 <a href="/signupMonth" className={classes.link}>
                  <MonthIcon className={classes.largeIcon} />
                  <Typography variant="display1">Monatliche Zahlungsweise</Typography>
                  <Typography variant="heading">X / Monat</Typography>
                </a> 
               </div> 

              <div>
                <a href="/signupYear" className={classes.link}>
                  <YearIcon className={classes.largeIcon} />
                  <Typography variant="display1">Jährliche Zahlungsweise</Typography>
                  <Typography variant="heading">X / Jahr</Typography>
                </a>
              </div>   
          </Flex> 

      </div>
      </div>
      </div>
      </Flex>
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
