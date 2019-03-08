import React from "react";
import { Component } from "react";
/* Gatsby */
import { Link } from "gatsby";
import PropTypes from "prop-types";
/* styled */
import styled from "styled-components";
/* material-ui */
import { withStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import CuboIcon from "../icons/cuboIcon";
import Icon from '../components/icon'
/* Icons */

const StyledLink = styled(Link)`
  font-size: 4;
  text-decoration: none;
  color: #fff;
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
    width: "100%",
    display: "flex",
    height: "20rem",
    maxWidth: "75%",
    marginLeft: "auto",
    marginRight: "auto",
    background: "#353535",
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
  width: calc(1 / 3 * 100% - (1 - 1 / 3) * 10px);
  background: #353535;
  padding: 10px;
  color: #fff;
`;

class Footer extends Component {
  render() {
    const { classes } = this.props;
    const dt = new Date();
    const year = dt.getFullYear();
    return (
      <div
        style={{
          width: "100%",
          background: "#353535",
          paddingBottom: "0.5em",
          paddingTop: "1em"
        }}
      >
        <BottomNavigation className={classes.container}>
          <DivFooterStyled>
            <Typography
              variant="headline"
              gutterBottom
              className={classes.heading}
            >Hello World!</Typography>
            <h6>Angebot</h6>
            <h6>Anlagekonzept</h6>
            <h6>Kosten</h6>
            <h6>Wertentwicklung</h6>
            <h6>sicherheit</h6>
            <h6>Wissen</h6>
          </DivFooterStyled>

          <DivFooterStyled>
            <Typography
              variant="headline"
              gutterBottom
              className={classes.heading}
            >Service</Typography>
            <h6>Blog</h6>
            <h6>Presse</h6>
            <h6>Kontakt</h6>
          </DivFooterStyled>

          <DivFooterStyled>
            <Typography
              variant="headline"
              gutterBottom
              className={classes.heading}
            >Rechtliches</Typography>
            <h6>Rechtliche Hinweise</h6>
            <h6>Datenschutzhinweise</h6>
            <h6>Impressum</h6>
            <h6>FAQ</h6>
          </DivFooterStyled>

          <DivFooterStyled>
            <Typography
              variant="headline"
              gutterBottom
              className={classes.heading}
            >
            <a className={classes.link} href="/subscribe">        
            Subscribe</a>
            </Typography>
            <Icon source={require('../icons/twitter.svg')} />
            <Icon source={require('../icons/facebook.svg')} />
            <Icon source={require('../icons/instagram.svg')} />
            <Icon source={require('../icons/github.svg')} />
          </DivFooterStyled>
        </BottomNavigation>
      
     
      <div
        style={{
          maxWidth: "75%",
          margin: "2em",
          marginLeft: "auto",
          marginRight: "auto",
          padding: "0.1em",
          borderTop: "1px solid #fff"
        }}
      >
        <Typography
          variant="caption"
          gutterBottom
          className={classes.copyright}
        >
          Copyright © {year} BOOST All Rights Reserved. | Impressum |{" "}
          <a className={classes.link} href="/datenschutz">
            Datenschutz
            </a>{" "}
          | Risikohinweis | Wiederrufsbelehrung
          </Typography>
          </div> 

           
    </div >   
    );
  }
}

export default withStyles(styles)(Footer);
