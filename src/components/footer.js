import React from "react";
import { Component } from "react";

/* Mailto */
import Mailto from 'react-protected-mailto'


/* Gatsby */
import { Link } from "gatsby";
/* styled */
import styled from "styled-components";
import styles from "../styles/styles";

import LinkBrand from "../styles/linkBrand";


/* material-ui */
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import Icon from "./layouts/icon";
import { Flex, Box } from "rebass";
import HoverSubscribe from "../styles/hoverSubscribe";

/* Icons */
import MailIcon from "@material-ui/icons/MailOutline";

// Millionen-Farbe: Ein Blau klickt einfach besser
// http://www.spiegel.de/fotostrecke/millionen-farbe-ein-blau-klickt-einfach-besser-fotostrecke-52926.html

const StyledLink = styled(Link)`
  font-size: 4;
  text-decoration: none;
  color: #fff;

  &:hover {
    color: #FF8000;
  }
`;

const columns = [
  {
    title: "StockBoost",
    items: [
      { name: "Anlagestrategie", url: "/Strategie/anlagestrategie" },
      { name: "Abonnement", url: "/Strategie/abonnement" },
      { name: "Das Team StockBoost", url: "/Team/team" },
      { name: "Vision", url: "/Team/vision" },
      { name: "Vorteile", url: "/Strategie/vorteile" },
    ]
  },
  {
    title: "Service",
    items: [
      { name: "FAQ", url: "/Strategie/faq" },
      // { name: "Kontakt", url: "/Rechtliches/impressum" },
      // { name: "Kundenbereich", url: "/404" },
      { name: "Newsletter", url: "/Finanzbildung/subscribe" },
      // { name: "Presse", url: "/404" },
     
    ]
  },
  // {
  //   title: "Rechtliches",
  //   items: [
  //     { name: "AGB", url: "/Rechtliches/AGB" },
  //     { name: "Datenschutz", url: "/Rechtliches/datenschutz" },
  //     { name: "Impressum", url: "/Rechtliches/impressum" },
       
  //   ]
  // },
  // {
  //   title: "Kontakt",
  //   items: [
  //     { name: "Risikohinweis", url: "/AGB" },
  //     { name: "AGB", url: "/AGB" },
  //     { name: "Impressum", url: "/impressum" },
  //     { name: "FAQ", url: "#" },
  //   ]
  // },
];

class Footer extends Component {

  render() {

    const { classes = styles } = this.props;
    const dt = new Date();
    const year = dt.getFullYear();


    return (
      <div
        style={{
          minWidth: "100%",
          background: "#202020",
          paddingBottom: "0.5rem",
          paddingTop: "0.5rem",
          marginLeft: "auto",
          marginRight:"auto"
        }}
      >
     
     <Box  
          width={["100%", "60%", "60%"]}
          mx="auto"
          >

     

          <Flex flexDirection={["column", "row", "row"]}>
            {columns.map(column => (
              <Flex
                width={["100%", "40%", "20%"]}
                mx="auto"
                px="4"
                pt="2rem"
                flexDirection={"column"}               
                alignItems="flexStart"
                alignSelf="flexStart"
              >
                <Typography
                  variant="headline"
                  gutterBottom
                  className={classes.heading}
                >
                  {column.title}
                </Typography>
                {column.items.map(item => (
                  <h6>
                    <StyledLink className={classes.link} href={item.url} to={item.url}>
                      {item.name}
                    </StyledLink>
                  </h6>
                ))}
              </Flex>
            ))}
 

            <Flex
              width={["100%", "50%", "25%"]}
              mx="auto"
              flexDirection={"column"}
              alignItems="center"
              px="4"

            >
              <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                borderLeft: "2px solid #fff",
                borderRight: "2px solid #fff",
                marginLeft: "auto",
                marginRight: "auto",
                padding: "0rem 1rem 0rem 1rem"
              }}
              >
                <Typography
                  variant="headline"
                  gutterBottom
                  className={classes.heading}
                  style={{textAlign:"center"}}
                >
                  <a className={classes.link} href="/Finanzbildung/subscribe" alt="Newsletter">
                    <HoverSubscribe>STOCKBOOST</HoverSubscribe>
                  </a>
                 
                  <h6 style={{ padding: "1rem" }}>Säntisstrasse 6 | CH-9100 Herisau 
                    <br />
                    Phone +41 71 3511 620
                   </h6>
                            
                </Typography>
                
               
                {/* <a href="https://www.twitter.com" alt="Twitter"><Icon source={require("../icons/twitter.svg")} /></a> */}
                <MailIcon className={classes.link} />
                <Mailto className={classes.link} email="info@stockboost.de"
                  headers={
                    { subject: 'StockBoost // Kontakt - Kunde ist König', body: 'Sehr geehrtes StockBoost Team, ' }
                  } />
          
              <Typography
                variant="headline"
                gutterBottom
                className={classes.heading}
              >
                <a className={classes.link} href="/Finanzbildung/subscribe" alt="Newsletter">
                  <HoverSubscribe>Subscribe</HoverSubscribe>
                </a>
              </Typography>
              <a href="https://www.twitter.com" alt="Twitter"><Icon source={require("../icons/twitter.svg")} /></a>
              <a href="https://www.facebook.com" alt="Facebook"><Icon source={require("../icons/facebook.svg")} /></a>
              <a href="https://www.instagram.com" alt="Instagram"><Icon source={require("../icons/instagram.svg")} /></a>
              <a href="https://www.github.com" alt="GitHub"><Icon source={require("../icons/github.svg")} /></a>
              </div>
          </Flex>
          </Flex>

          <div
            style={{
              maxWidth: "75%",
              marginTop: "2em",
              marginLeft: "auto",
              marginRight: "auto",
              paddingTop: "0.1em",
              paddingBottom: "0.1em",
              borderTop: "1px solid #fff"
            }}
          >

            <Typography
              variant="caption"
              gutterBottom
              className={classes.copyright}
            >
              Copyright © {year} StockBoost All Rights Reserved. |{" "}
              <a className={classes.link} href="/Rechtliches/AGB" alt="AGB" to="/AGB">
                AGB{" "}
              </a>
              |{" "}
              <a className={classes.link} href="/Rechtliches/datenschutz" to="/datenschutz">
                <LinkBrand>Datenschutz</LinkBrand>
              </a>{" "}
              |{" "}
              <a className={classes.link} href="/Rechtliches/impressum" alt="Impressum" to="/impressum">
                Impressum{" "}
              </a>
          </Typography>
          </div>
      
          </Box>
     </div>    
  
    );
  }
}

export default withStyles(styles)(Footer);
