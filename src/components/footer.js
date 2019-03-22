import React from "react";
import { Component } from "react";

/* Mailto */
import Mailto from 'react-protected-mailto'


/* Gatsby */
import { Link } from "gatsby";
import PropTypes from "prop-types";
/* styled */
import styled from "styled-components";


import LinkBrand from "./linkBrand";

/* material-ui */
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import CuboIcon from "../icons/cuboIcon";
import Icon from "../components/icon";
import { Flex, Box } from "rebass";
import HoverSubscribe from "./hoverSubscribe";

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

const styles = {
  heading: {
    color: "#fff",
    marginBottom: "1rem",
    fontSize: "1.2857142857142856rem",
    fontWeight: "normal"
  },
  copyright: {
    color: "#fff",
    textAlign: "center"
  },
  link: {
    color: "#fff",
    textDecoration: "none"
  },
  container: {
    width: "100%",
    display: "flex",
    maxWidth: "75%",
    marginLeft: "auto",
    marginRight: "auto"
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

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  height: 300px;
  margin: auto;
`;

const DivFooterStyled = styled.div`
  /*
    1/3  - 3 columns per row
    10px - spacing between columns 
    */
  box-sizing: border-box;
  margin-bottom: 10px;
  width: 25%;
  background: #202020;
  padding: 10px;
  color: #fff;
`;

const columns = [
  {
    title: "Geld anlegen",
    items: [
      { name: "Angebot", url: "/abonnement" },
      { name: "Anlagekonzept", url: "/anlagekonzept" },
      { name: "Kosten", url: "/abonnement" },
      { name: "Wertentwicklung", url: "#" },
      { name: "Sicherheit", url: "#" },
      { name: "Wissen", url: "/vorteile" },
    ]
  },
  {
    title: "Service",
    items: [
      { name: "Blog", url: "#" },
      { name: "Presse", url: "#" },
      { name: "Kontakt", url: "/impressum" },
    ]
  },
  {
    title: "Rechtliches",
    items: [
      { name: "AGB", url: "/AGB" },
      { name: "Impressum", url: "/impressum" },
      { name: "FAQ", url: "#" },
    ]
  },
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

    const { classes } = this.props;
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
     

          <Flex flexDirection={["column", "row", "row"]}>
            {columns.map(column => (
              <Flex
                width={["100%", "40%", "20%"]}
                mx="auto"
                pt="2rem"
                flexDirection={"column"}
                px="4"
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
                >
                  <a className={classes.link} href="/subscribe" alt="Newsletter">
                    <HoverSubscribe>STOCKBOOST</HoverSubscribe>
                  </a>
                  <StyledLink style={{ padding: "1rem" }}><h6>Säntisstrasse 6 | CH-9100 Herisau</h6></StyledLink>
                </Typography>
                {/* <a href="https://www.twitter.com" alt="Twitter"><Icon source={require("../icons/twitter.svg")} /></a> */}
                <MailIcon className={classes.link} />
                <Mailto className={classes.link} email="info@stockboost.de"
                  headers={
                    { subject: 'NoFAQ / Kunde ist König', body: 'Sehr geehrtes StockBoost Team, ' }
                  } />
          
              <Typography
                variant="headline"
                gutterBottom
                className={classes.heading}
              >
                <a className={classes.link} href="/subscribe" alt="Newsletter">
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
              Copyright © {year} BOOST All Rights Reserved. |{" "}
              <a className={classes.link} href="/impressum" to="/impressum">
                Impressum{" "}
              </a>
              |{" "}
              <a className={classes.link} href="/datenschutz" to="/datenschutz">
                <LinkBrand>Datenschutz</LinkBrand>
              </a>{" "}
              | Risikohinweis | Wiederrufsbelehrung
          </Typography>
          </div>
      
     </div>    
  
    );
  }
}

export default withStyles(styles)(Footer);
