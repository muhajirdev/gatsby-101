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
import Avatar from '@material-ui/core/Avatar';

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
  },
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60,
  }
};



class Vorteile extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Layout backgroundColor="#fdf22f" textColor="black">
        <SEO title="TEAM" />
        
        <Flex
              className={classes.textContainer}
              minWidth={["100%", "100%", "100%"]}
              minHeight={["100%","100%","100%",]}
              // Header 5rem
              pt="5rem"
            >         

        <div
          style={{
            // minheight: "100vh",
            // minWidth: "100vh",           
            backgroundImage: "url(/pricing.jpg)",
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
              pt="5rem"
              alignSelf = "center"
              alignItems = "center"
              justifyContent= "flexStart"
              textAlign="left"
              mx="auto"
              // px="4"       
            >         
            <div>
            <Typography variant="display1" style={{color: '#fff', padding: '1rem'}} >Marco</Typography>
            <Avatar alt="Marco Schai" src="/static/avatar/marco.jpg" className={classes.avatar} />
            <Typography variant="subheading" style={{color: '#fff', padding: '1rem'}} >
                Marco absolvierte die Matura mit Schwerpunkt Ökonomie am Gymnasium Friedberg. Vor dem Studium arbeitete er für zwei grosse Schweizer Bankinstitute.  Danach studierte er Wirtschaftswissenschaften mit dem Schwerpunkt Banking and Finance. Anfang 2009 schloss er an der Universität Zürich mit den Master of Arts UZH und der Note "Magna cum Laude" ab. Seit 2009 ist er als privater Vollzeit-Trader tätig. Marco tradet vorwiegend mit Aktien aus dem Nebenwertebereich. Er lebt und arbeitet in Herisau (Schweiz), das im Appenzellerland, in der Nähe des Bodensees liegt. Als Ausgleich zur Börse liebt er alles, was mit Bewegung zu tun hat. Er fährt gerne Rennrad, trainiert im Fitnesscenter oder spielt Tennis und Squash.            </Typography>
            </div>
         
            <div>
            <Avatar alt="Rami Altonji" src="/static/avatar/Rami-BVH-All-Stars.jpg" className={classes.avatar} />
            <Typography variant="display1" style={{color: '#fff', padding: '1rem'}} >Rami </Typography>
            <Typography variant="subheading" style={{color: '#fff', padding: '1rem'}} >
                Rami absolvierte die Matura mit Schwerpunkt Ökonomie am Gymnasium Friedberg. Vor dem Studium arbeitete er für zwei grosse Schweizer Bankinstitute.  Danach studierte er Wirtschaftswissenschaften mit dem Schwerpunkt Banking and Finance. Anfang 2009 schloss er an der Universität Zürich mit den Master of Arts UZH und der Note "Magna cum Laude" ab. Seit 2009 ist er als privater Vollzeit-Trader tätig. Marco tradet vorwiegend mit Aktien aus dem Nebenwertebereich. Er lebt und arbeitet in Herisau (Schweiz), das im Appenzellerland, in der Nähe des Bodensees liegt. Als Ausgleich zur Börse liebt er alles, was mit Bewegung zu tun hat. Er fährt gerne Rennrad, trainiert im Fitnesscenter oder spielt Tennis und Squash.
            </Typography>      
            </div>
          </Flex>


          </div>  
          </div>  
          </div>  
        </Flex>
      </Layout>
    );
  }
}

export default withStyles(styles)(Vorteile);
