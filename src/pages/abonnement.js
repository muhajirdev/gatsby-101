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
import { Box,Flex } from "rebass";

/* Icons */
import MonthIcon from "@material-ui/icons/Explore";
import YearIcon from "@material-ui/icons/PowerSettingsNew";


import {
  position,
  zIndex,
  top,
  right,
  bottom,
  left,
} from 'styled-system';


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
    padding: "1rem 0rem 1rem 0rem",
    // border: "2px solid #FF8000"
    // border: "1px solid #fdf22f"
  },
  display: {
    fontWeight: "bold",
    color: "#fff",
    paddingTop: "5rem",
  },  
  subheader: {
    fontWeight: "bold",  
    color: "#fff",
    paddingTop: "0rem", 
  },
  blocksatz: {
    fontFamily: "Copernicus-Roman, acumin-pro, sans-serif !important",
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


const itemsHeader = "Abonnement";

class Abonnement extends Component {
  render() {
    const { classes } = this.props;
    const dt = new Date();
    const year = dt.getFullYear();
    return (
      // backgroundColor="#fdf22f" textColor="black"
      <Layout>
        <SEO title="Abonnement" keywords={[`gatsby`, `application`, `react`]} />      
        
        <div className={classes.heading}
          style={{
            display: "flex",
            flexDirection: "column",
            flexWrap: "nowrap",
            // backgroundColor: "#1c222e",
            backgroundColor:"#fff",
            backgroundImage: "linear-gradient(135deg,#1b3d60,#1a3057 51.95%,#1f232f)",
            backgroundRepeat: "repeat-x",
            height: "15rem",
            justifyContent: "center",
            alignItems: "left",
          }}
        >
        <Flex
          // bg={['red', 'blue']}
          width={["97.5%", '75%', '60%']}
          style={{
            display: "flex",
            flexDirection: "column",
            flexWrap: "nowrap",
            justifyContent: "flexStart",
            alignItems: "left",
            alignText: "left",
            marginLeft: "auto",
            marginRight: "auto",  
          }}
        >
        <Typography variant="display1" className={classes.display}> {itemsHeader} </Typography>
        </Flex>    
        </div>

        
        <Flex
              // className={classes.textContainer}
              minWidth={["100%", "100%", "100%"]}
              minHeight={["100%","100%","100%",]}
              // Header 5rem
              pt="5rem"
            >         
        
        <div
          style={{
            minHeight: "100vh",
            minWidth: "100%",           
            backgroundImage: "url(/pricing.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center center",
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
              position="fixed" 
              // Header 5rem
              px="4rem"
              alignSelf = "center"
              alignItems = "center"
              justifyContent= "flexStart"
              textAlign="left"
              mx="auto"
              pt="12rem"
        
                 
             
             
            >  
                <div>   
                <StyledLink to="/signupMonth">
                <MonthIcon className={classes.largeIcon} />
                <Typography variant="display1" className={classes.subheader}>Monatliche Zahlungsweise</Typography>
                <Typography variant="heading">X / Monat</Typography>
                </StyledLink>
                </div> 

               <div> 
               <StyledLink to="/signupYear">
                  <YearIcon className={classes.largeIcon} />
                  <Typography variant="display1" className={classes.subheader}>Jährliche Zahlungsweise</Typography>
                  <Typography variant="heading">X / Jahr</Typography>
                </StyledLink>
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
