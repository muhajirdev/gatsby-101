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

            <Typography variant="display1" style={{color: '#fff', padding: '1rem'}} >Deine Vorteile</Typography>
            <Typography variant="subheading" style={{color: '#fff', padding: '1rem'}} >
                Die StockBoost Aktienstrategie basiert auf quantitativem Ansatz; verdichtet historische Aktienpreisentwicklung, positive Gewinnüberraschung sowie Analystendaten.
                <br /><br />
                Der Stock Ansatz filtert systematisch ein Aktienuniversum bestehend aus 4000 US-Amerikanischen Unternehmen mit einer Marktkapitalisierung von 500 Mio. - 10 Mrd. USD. So stehen US-Midcap-Aktien und nicht Mainstreamwerte im Fokus der Aktienstrategie bei Beachtung notwendiger Portfolio-Diversifikation.
                <br /><br />
                Der Boost Ansatz, der Depot-Boost, investiert bei gegebener positiver Marktlage in US-Amerikanische Unternehmen, die vor neuen Bewertungen stehen und somit ein starkes Momentum, eine sich beschleunigende positive Trendbewegung, aufweisen.
                <br /><br />
                Subjektive Entscheidungen sind insgesamt unbedeutend, naiv konstruierte Portfolios, die hoch konzentriert sind, ausgeschlossen. Eine deutliche Reduzierung des Maximum Drawdown des Portfolios ist durch die konsequent sukzessive Reduzierung der Aktienquote von 100% auf 66%, in potentiellen Seitwärtsphasen und Bärenmärkten, gewährleistet.
                <br /><br />
                Die StockBoost Aktienstrategie eignet sich als Beimischung für klassische Wertschriftenportfolios (Wertschriften: schweizerisch für Aktien und Anleihen) oder auch als aktive Komponente für passiv ausgerichtete ETF-Portfolios.
                <br /><br />
                Empirische Studien haben in der Vergangenheit für sämtliche Komponenten der StockBoost Aktienstrategie eine risikoadjustierte Überrendite – Outperformance - nachgewiesen.
                <br /><br />
                Diesen Nachweis führen wir permanent transparent ‘ungehebelt’ in einem USD 20'000 Echtgelddepot, bei einer Aktienquote von 66% - 100%, weiter.
                <br /><br />
                Abonnenten der STOCKBOOST Aktienstraegie werden unmittelbar nach den Portfolio Umschichtungen über sämtliche Käufe / Verkäufe informiert.
                <br /><br />
                Der Aufwand für die Umsetzung von STOCKBOOST beträgt ca. 15 Minuten pro Woche.
          </Typography>
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
