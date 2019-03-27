import React from "react";
import { Component } from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";

import SEO from "../components/seo";
import Layout from "../components/layout";

/* Components */
import Icon from "../components/icon";
import LinkBrand from "../components/linkBrand";

/* styled */
import styled from "styled-components";

/* MUI */
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableFooter from "@material-ui/core/TableFooter";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Paper from "@material-ui/core/Paper";

import { Flex } from "rebass";

// <Link to="/">Go back to the homepage</Link>

const styles = theme => ({
  heading: {
    fontFamily: "Copernicus-Roman, acumin-pro, sans-serif !important",
    color: "#000",
    paddingTop: "1rem",
  },
  display: {
    fontFamily: "Copernicus-Roman, acumin-pro, sans-serif !important",
    color: "#000",
    paddingTop: "1rem",
  },  
  subheader: {
    fontFamily: "Copernicus-Roman, acumin-pro, sans-serif !important",
    color: "#000",
    paddingTop: "1rem",   
  },
  blocksatz: {
    fontFamily: "Copernicus-Roman, acumin-pro, sans-serif !important",
    color: "#000",
    paddingTop: "1rem",
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


const pageHeader = "Vorteile";


class Vorteile extends Component {
  render() {
    const { classes } = this.props;
    return (
      // backgroundColor="#fdf22f" textColor="black"
      <Layout >
        <SEO title={pageHeader} />
      
        <div 
          style={{
            // backgroundColor: "#1c222e",
            backgroundColor:"#fff",
            backgroundImage: "linear-gradient(135deg,#1b3d60,#1a3057 51.95%,#1f232f)",
            backgroundRepeat: "repeat-x",
            height: "15rem",
          }} >     

          <Flex 
        // Wrapper Header
          // className={classes.textContainer}
          flexDirection={["row", "row", "row"]}
          flexWrap="nowrap"
          height= "100vh"    
          width={["100%", '75%', '40%']}
          // Header 5rem
          pt="1rem"
          mx="auto"
          alignItems = "flexStart"
          justifyContent= "flexStart"
          textAlign="left"
          >
          <Typography variant="display1" style={{ paddingTop:"10rem"}}> {pageHeader} </Typography>     
          </Flex>
        </div>

        <Flex
          // className={classes.textContainer}
          flexDirection={["column", "column", "column"]}
          flexWrap="nowrap"
          height= "100vh"    
          width={["100%", '75%', '40%']}
          // Header 5rem
          pt="5rem"
          mx="auto"
          alignItems = "flexStart"
          justifyContent= "flexStart"
          textAlign="left"
          >        
            <Typography variant="subheading" className={classes.blocksatz} >
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
    </Layout>
    );
  }
}

export default withStyles(styles)(Vorteile);
