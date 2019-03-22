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

const itemsHeader = "Impressum";


class Datenschutz extends Component {
  render() {
    const { classes } = this.props;
    const dt = new Date();
    const year = dt.getFullYear();
    return (
      <Layout>
        <SEO title="Impressum" />
        
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
          className={classes.textContainer}
          // bg={['red', 'blue']}
          width={["100%", '75%', '60%']}
          style={{
            display: "flex",
            flexDirection: "column",
            flexWrap: "nowrap",
            justifyContent: "flexStart",
            alignItems: "left",
            alignText: "left",
            marginLeft: "auto",
            marginRight: "auto"
          }}
        >
          <Typography variant="display2">Impressum</Typography>
          <div className={classes.blocksatz}>
            <Typography variant="heading">
            </Typography>
          </div>
          <div className={classes.heading}>
            <Typography variant="display1">Angaben gemäß § 5 TMG</Typography>
          </div>
          <div className={classes.blocksatz}>
            <Typography variant="subheading">
            SoftQuote GmbH<br />
            Säntisstrasse 6<br />
            CH-9100 Herisau<br />
              <br />
            Handelsregister: CHE-184.223.405<br />
            Registergericht: Appenzell Ausserrhoden<br />
            <br />
            Vertreten durch die Geschäftsführer:<br />
            Marco Schai<br />
            <br />
            </Typography>
          </div>
          <div className={classes.heading}>
            <Typography variant="display1">Kontakt</Typography>
          </div>
          <div className={classes.blocksatz}>
            <Typography variant="subheading">
              E-Mail: info@stockboost.de
              <br />
              Tel.: +41 71 351 16 20 (Schweiz)
            </Typography>
          </div>
          <div className={classes.heading}>
            <Typography variant="display1">Umsatzsteuer-ID</Typography>
          </div>
          <div className={classes.blocksatz}>
            <Typography variant="subheading">
            Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:
            <br />
            DE322475454
            </Typography>
          </div>
          <div className={classes.heading}>
            <Typography variant="display1">Streitschlichtung</Typography>
          </div>
          <div className={classes.blocksatz}>
            <Typography variant="subheading">
            Die Europäische Kommission stellt eine Plattform zur <a className={classes.link} href="https://ec.europa.eu/consumers/odr">Online-Streitbeilegung (OS)</a> bereit.
            <br />
            <br />
            Unsere E-Mail-Adresse finden Sie oben im Impressum. <br />
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle teilzunehmen.
            </Typography>
          </div>
          <div className={classes.heading}>
            <Typography variant="display1">Haftung für Inhalte</Typography>
          </div>
          <div className={classes.blocksatz}>
            <Typography variant="subheading">
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den
              allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
              verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu
              forschen, die auf eine rechtswidrige Tätigkeit hinweisen.             
              <br />
              Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen
              Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der
              Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden
              Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
            </Typography>
          </div>
          <div className={classes.heading}>
            <Typography variant="display1">Haftung für Links</Typography>
          </div>
          <div className={classes.blocksatz}>
            <Typography variant="subheading">
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.
            Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
            verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten
            Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte
            waren zum Zeitpunkt der Verlinkung nicht erkennbar.
            <br />
            Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer
            Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links
            umgehend entfernen.
            </Typography>
          </div>
          <div className={classes.heading}>
            <Typography variant="display1">Urheberrecht</Typography>
          </div>
          <div className={classes.blocksatz}>
            <Typography variant="subheading">
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
            Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
            Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
            <br />
            Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter
            beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine
            Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei
            Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
            <br />
            Quelle - <a className={classes.link} href="https://www.e-recht24.de/impressum-generator.html">eRecht24</a>
            </Typography>
          </div>
        
        </Flex>
      </Layout>
    );
  }
}

export default withStyles(styles)(Datenschutz);
