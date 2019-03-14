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
import { Flex,Box } from "rebass";

/* Components */
import Icon from '../components/icon'

// Link 
// <h6><Link to="/">Go back to the homepage</Link></h6>

const styles = {
  header: {
    backgroundColor: "transparent",
    boxShadow: "none",
    color: '#fff'

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
    fontWeight: 400,
    color:'#fff'
  }
};



class Vorteile extends Component {
  render() {
    const { classes } = this.props;
    return (

      <Layout backgroundColor="#fdf22f" textColor="black">
        <SEO title="VORTEILE" />


      
        <Flex
              className={classes.textContainer}
              minWidth={["100%", "100%", "100%"]}
              minHeight={["100%","100%","100%",]}
              // Header 5rem
              pt="5rem"
              pb="1rem"
            >         

        <div
          style={{
            minHeight: "100vh",
            minWidth: "100vw",    
            backgroundImage: "url(/cedric-frixon.jpg)",
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
            background: "rgba(0, 0, 0.3, 0.3)",
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
              width={["100%", "80%", "75%"]}
              // Header 5rem
              pt="5rem"
              alignSelf = "center"
              alignItems = "center"
              justifyContent= "flexStart"
              textAlign="left"
              mx="auto"
              // px="4"       
            >         

            <Table style={{ maxWidth: '50%', marginTop: 'theme.spacing.unit * 3', overflowX: 'auto', margin: "0 auto" }}>

                <TableHead className={classes.logo}>

                <TableCell className={classes.logo}><Typography className={classes.logo} variant="headline" > Boost bietet dir:</Typography> </TableCell>
                  <TableCell className={classes.logo} align="left"><Typography className={classes.logo} variant="headline">Deine Vorteile:</Typography> </TableCell>

                </TableHead> 

                <TableBody className={classes.logo}>
                  <TableRow >
                    <TableCell className={classes.logo}>Seine Aktienstrategie mit quantitativem Ansatz. Diversifiziere dein Depot mit System oder verwende StockBoost als aktive Komponente für passiv ausgerichtete ETF-Portfolios.</TableCell>
                    <TableCell className={classes.logo}>nutze Boost als Beimischung - egal ob als Investor oder Trader</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell className={classes.logo} >ein systematisches Regelwerk um mittelgroße US-Aktien mit hohem Kurspotential auszuwählen.</TableCell>
                    <TableCell className={classes.logo} >erhalte liquide Werte mit Substanz und Wachstumspotential ohne eigenen aufwendigen Auswahlprozess</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell className={classes.logo} >ausschließlich Aktien und verwendet keinen Hebel.</TableCell>
                    <TableCell className={classes.logo} >eine einfache Risikobewertung & ausgewogene Sektor Diversifikation</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell className={classes.logo} >klare Regeln und 1x pro Woche konkrete Information zu den Anpassungen im Depot (Käufe/Verkäufe). </TableCell>
                    <TableCell className={classes.logo} >einfache Handhabung, da alle Ein- und Ausstiege per Market Order in liquiden Werten umsetzbar sind.</TableCell>
                  </TableRow>



                  <TableRow>
                    <TableCell className={classes.logo} >bei positivem Marktumfeld eine zweite Swing Strategie als Depot-Boost. Ihr erhaltet die Information zu diesen zusätzlichen Ein- & Ausstiegen immer direkt (max. 1 Mail/Tag)</TableCell>
                    <TableCell className={classes.logo} >erhalte trendstarke Aktien zum richtigen Zeitpunkt. Die Umsetzung ist identisch zu den wöchentlichen Umschichtungen.</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell className={classes.logo} >Die Aktienquote liegt zwischen 66% bis 100% (unter Berücksichtigung des Marktumfelds)</TableCell>
                    <TableCell className={classes.logo} >dein Depot unterliegt geringeren Schwankungen bei Marktrücksetzern</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell className={classes.logo} >eine detaillierte Liveumsetzung mit ausgewerteten Track Record unseres Echtgelddepots</TableCell>
                    <TableCell className={classes.logo} >keine leeren Versprechungen und die langfristige Entwicklung ist nachvollziehbar</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell className={classes.logo} >eine unkomplizierte und zeitschonende Umsetzung</TableCell>
                    <TableCell className={classes.logo} >nur ca. 15 Minuten Zeitaufwand pro Woche</TableCell>
                  </TableRow>
                  <TableRow>
                  </TableRow>

                </TableBody>
              </Table>  
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
