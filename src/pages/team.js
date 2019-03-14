import React from "react";
import { Link } from "gatsby";
import { Component } from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

/* styled */
import styled from "styled-components";

/* MUI */
import PropTypes from 'prop-types';
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableFooter from '@material-ui/core/TableFooter';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Paper from '@material-ui/core/Paper';

/* rebass */
import { Flex, Box } from "rebass";

/* Components */
import Icon from '../components/icon'

// Link 
// <h6><Link to="/">Go back to the homepage</Link></h6>

const styles = {
  header: {
    backgroundColor: "transparent",
    boxShadow: "none"
  },
  root: {
    flexGrow: 1,
    position: "fixed",
    width: "100%",
    zIndex: 200,
    top: 0
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



class Vorteile extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Layout backgroundColor="#fdf22f" textColor="black">
        <SEO title="TEAM" />
        <div
          style={{
            height: "100%",
            width: "100%",
            background: "rgba(0, 0, 0, 0.3)",
            backgroundSize: "cover",
            backgroundPosition: "center center",
            position: "absolute",
            zIndex: -50
          }}
        />
          <div
          style={{
            height: "100%",
            width: "100%",
            background: "linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.6))",
            backgroundSize: "cover",
            backgroundPosition: "center center",
            position: "absolute",
            zIndex: -50
          }}
        />

        <div
          style={{
            height: "100%",
            width: "100%",
            backgroundImage: "url(/pricing.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center center",
            position: "absolute",
            zIndex: -100
          }}
        />
        
          <Flex
              className={classes.textContainer}
              width={["100%", "75%", "60%"]}
              height={["100%","100%","100%",]}
              flexDirection={"row"}
              alignSelf = "center"
              alignItems = "center"
              justifyContent= "flexStart"
              textAlign="left"
              mx="auto"
              pt="10rem"
              px="4"    
              zIndex= "100"    
             
            >
          <Flex
              className={classes.textContainer}
              width={["100%", "75%", "40%"]}
              height={["100%","100%","100%",]}
              flexDirection={"column"}
              alignSelf = "center"
              alignItems = "center"
              justifyContent= "flexStart"
              textAlign="left"
              mx="auto"
              pt="1rem"
              px="4"    
              zIndex= "100"    
             >
            
            <Typography variant="display1" style={{color: '#fff', padding: '1rem'}} >Rami </Typography>
            <Typography variant="subheading" style={{color: '#fff', padding: '1rem'}} >
                Rami absolvierte die Matura mit Schwerpunkt Ökonomie am Gymnasium Friedberg. Vor dem Studium arbeitete er für zwei grosse Schweizer Bankinstitute.  Danach studierte er Wirtschaftswissenschaften mit dem Schwerpunkt Banking and Finance. Anfang 2009 schloss er an der Universität Zürich mit den Master of Arts UZH und der Note "Magna cum Laude" ab. Seit 2009 ist er als privater Vollzeit-Trader tätig. Marco tradet vorwiegend mit Aktien aus dem Nebenwertebereich. Er lebt und arbeitet in Herisau (Schweiz), das im Appenzellerland, in der Nähe des Bodensees liegt. Als Ausgleich zur Börse liebt er alles, was mit Bewegung zu tun hat. Er fährt gerne Rennrad, trainiert im Fitnesscenter oder spielt Tennis und Squash.
          </Typography>
          </Flex>  

          <Flex
              className={classes.textContainer}
              width={["100%", "75%", "40%"]}
              height={["100%","100%","100%",]}
              background = "red"
              flexDirection={"column"}
              alignSelf = "center"
              alignItems = "center"
              justifyContent= "flexStart"
              textAlign="left"
              mx="auto"
              pt="1rem"
              px="4"    
              zIndex= "100"    
             >
            
            <Typography variant="display1" style={{color: '#fff', padding: '1rem'}} >Rami </Typography>
            <Typography variant="subheading" style={{color: '#fff', padding: '1rem'}} >
                Rami absolvierte die Matura mit Schwerpunkt Ökonomie am Gymnasium Friedberg. Vor dem Studium arbeitete er für zwei grosse Schweizer Bankinstitute.  Danach studierte er Wirtschaftswissenschaften mit dem Schwerpunkt Banking and Finance. Anfang 2009 schloss er an der Universität Zürich mit den Master of Arts UZH und der Note "Magna cum Laude" ab. Seit 2009 ist er als privater Vollzeit-Trader tätig. Marco tradet vorwiegend mit Aktien aus dem Nebenwertebereich. Er lebt und arbeitet in Herisau (Schweiz), das im Appenzellerland, in der Nähe des Bodensees liegt. Als Ausgleich zur Börse liebt er alles, was mit Bewegung zu tun hat. Er fährt gerne Rennrad, trainiert im Fitnesscenter oder spielt Tennis und Squash.
          </Typography>
          </Flex>  


          </Flex>  
      </Layout>
    );
  }
}

export default withStyles(styles)(Vorteile);
