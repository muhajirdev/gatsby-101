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
    fontFamily: "Noto Serif, serif !important",
    color: "#000",
    paddingTop: "1rem",
  },
  display: {
    fontFamily: "Noto Serif, serif !important",    
    color: "#000",
    paddingTop: "1rem",
  },  
  subheader: {
    fontFamily: "Noto Serif, serif !important",
    color: "#000",
    paddingTop: "1rem",   
  },
  blocksatz: {
    fontFamily: "Noto Serif, serif !important",
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

const pageHeader = "Anlagekonzept";

class Anlagekonzept extends Component {
  render() {
    const { classes } = this.props;
    const dt = new Date();
    const year = dt.getFullYear();
    return (
      <Layout>
        <SEO title={pageHeader} />
        
        <div
          style={{
            minHeight: "100vh",
            minWidth: "100%",          
            backgroundImage: "url(/img/rob-bates.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center center",
            zIndex: -100
          }}
        /> 

        <div
          style={{
            minHeight: "100vh",
            minWidth: "100%",       
            background: "rgba(0, 0, 0.3, 0.3)",
            backgroundSize: "cover",
            backgroundPosition: "center center",
            zIndex: -50
          }}
        /> 
        
        <div
          style={{
            minHeight: "100vh",
            minWidth: "100%",       
            background: "linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.6))",
            backgroundSize: "cover",
            backgroundPosition: "center center",
            zIndex: -50
          }}
        /> 




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


          
            <Typography variant="display1" className={classes.heading}>Regelwerk StockBoost</Typography>
          
            <Typography className={classes.blocksatz} variant="subheading">
            In StockBoost stellen wir aus den Erkenntnissen der akademischen Literatur ein Regelwerk
            auf, das wir systematisch in einem Echtgelddepot bei Interactive Brokers Ltd. anwenden. Die
            Erkenntnisse, inklusive dem Literaturverzeichnis, stellen wir unseren Kunden im Dokument
            „StockBoost Fakten und Hintergründe“ gerne zu Verfügung.
            <br />   
            </Typography>     
          
            <Typography variant="display1" className={classes.heading}>Erkenntnisse</Typography>
       
       
            <Typography variant="subheading" className={classes.blocksatz}>
            - Die Preisreaktion nach Earnings Surprises und Prognoserevisionen ist unvollständig.
            <br />
            - Der Post-Announcement-Drift nach Prognoserevisionen von Analysten & nach Gewinn-Überraschungen existiert und hält über mehrere Monate an.
            <br />
            - Unternehmen mit einer positiven Earnings Surprise im vergangenen Quartal haben eine höhere Wahrscheinlichkeit einer erneuten Earnings Surprise im kommenden Quartal.
            <br />
            <br />
            Der positive Aktienpreis-Drift ist…
            <br />
            … in den ersten Tagen am grössten & hält für mindestens drei Monate in abgeschwächter Form an.
            <br />
            … bei High-Innovation-Revisionen grösser, als bei Low-Innovation-Revisionen.
            <br />
            … bei Aktien mit geringer Analystendichte (kleinkapitalisierte Unternehmen) grösser, als bei Aktien mit hoher Analystendichte.
            <br />
            … umso grösser, je positiver die Prognoserevision und je positiver die Gewinnüberraschung.
            <br />
            <br />
            StockBoost ist ein Informationsdienst von StockBoost.de und besteht aus den beiden
            Teilstrategien „Stock“ und „Boost“. Zwei Drittel bzw. 30 Aktien werden permanent in Stock
            investiert. Ein Drittel bzw. maximal 15 Aktien werden bei positivem Aktienumfeld in Boost
            angelegt. StockBoost besteht aus maximal 45 Aktien und die Aktienquote liegt, je nach
            Marktumfeld, zwischen 66,7 und 100 Prozent. StockBoost wird als Echtgelddepot bei
            Interactive Brokers Ltd. umgesetzt. Die Wertentwicklung und die einzelnen Trades werden
            für die Kunden transparent gezeigt.
            <br />
            </Typography>
   

         
            <Typography variant="display1" className={classes.heading}>Regelwerk Stock (mit 66,66% gewichtete Teilstrategie von StockBoost)</Typography>
     
            <Typography variant="subheading" className={classes.blocksatz}>
            Mithilfe von Aktienscreenern und inhouse entwickelter Software suchen wir - in Anlehnung
            an die Erkenntnisse der oben erwähnten Studien zu Gewinn-Revisionen und -Überraschungen
            - zweimal pro Woche die bestklassierten Aktien aus einem Universum von 4‘200 USamerikanischen Aktien.
            <br />
            </Typography>

            <Typography variant="display" className={classes.heading}>Voraussetzungen für Käufe:</Typography>
            
            <Typography variant="subheading" className={classes.blocksatz}>
            - Die Aktien sind aktuell und vor einer halben Woche in den besten 5% des Aktienuniversums rangiert.
            <br /> 
            - Die Marktkapitalisierung der Aktien liegt zwischen 500 Millionen und 15 Milliarden US Dollar.
            <br /> 
            - Die Unternehmen werden von mindestens zwei Analysten abgedeckt.
            <br /> 
            - Aus der Liste von etwa 90 Aktien werden 30 ausgewählt, wobei wir bei StockBoost auf Sektordiversifikation und Diversifikation hinsichtlich der Markkapitalisierung (zwischen 500 Millionen bis 15 Milliarden US Dollar) achten.
            <br /> 
            - Einmal pro Woche findet eine Umschichtung statt, bei dem Aktien mit Verkaufssignal durch neue Aktien aus den besten 5% der Rangliste ersetzt werden.
            <br /> 
            - Verkauft werden Aktien, die nicht in den besten 20% des Universums rangieren.
            <br /> 
            - Alle 30 Aktien werden beim Kauf mit 1/45 des StockBoost-Portfolios gleich gewichtet (entspricht 2,222% Gewichtung pro Aktie).
            <br />
            - Stock ist in jedem Marktumfeld dauernd investiert.
            </Typography>
            


           
            <Typography variant="display1" className={classes.heading}>Regelwerk Boost (mit 33,33% gewichtete Teilstrategie von StockBoost)</Typography>
       
            <Typography variant="subheading" className={classes.blocksatz}>
            In Boost kombinieren wir Momentum und Jahreshöchststände mit positiven Gewinnüberraschungen.
            <br />
            Das Universum besteht aus US-gelisteten Aktien mit einer Marktkapitalisierung von mehr als einer Milliarde US Dollar. Im März 2019 umfasste das Universum ungefähr 2‘500 Aktien. Alle 15 Aktien werden beim Kauf mit 1/45 des StockBoost-Portfolios gleich gewichtet (entspricht 2,222% Gewichtung pro Aktie). 
            <br />
            <br />
            </Typography>
            
            <Typography variant="headline" >Voraussetzungen für die maximal 15 Stock-Aktien:</Typography>
            
            <Typography variant="subheading" className={classes.blocksatz}>

            <br />
            - Der 'S&P' 500 notiert über seinem einfachen, gleitenden Durchschnitt der letzten 200 Handelstage.
            <br /> 
            - Die Aktie hat zur Börseneröffnung - in Verbindung mit einer positiven Gewinnüberraschung bzw. einer anderweitigen, positiven Unternehmensnachricht - mit einer Kurslücke eröffnet.
            <br /> 
            - Die Aktie erreichte in den letzten 20 Handelstagen ein neues Jahreshoch.
            <br /> 
            - Die Aktie wird i.d.R. am Tag der positiven Gewinnüberraschung gekauft
            <br /> 
            <br />
            </Typography>
            
            <Typography variant="headline">Verkaufskriterien:</Typography>
            
            <Typography variant="subheading" className={classes.blocksatz}>
            - Die Aktie hat in den letzten drei Monaten kein neues Jahreshoch erreicht.
            <br /> 
            - Die Aktie ist unter einen systematisch berechneten Schwellenwert zurückgefallen.
            <br /> 
            - In Boost wird die Hälfte der Positionen verkauft, wenn der S&P 500 unter den 200-TageGleitenden-Durchschnitt fällt.
            <br /> 
            </Typography>
        </Flex>
      </Layout>
    );
  }
}
export default withStyles(styles)(Anlagekonzept);