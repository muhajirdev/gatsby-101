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

import { Box } from "rebass";

const styles = theme => ({
  heading: {
    color: "#fff",
    marginBottom: "1rem",
    fontWeight: "normal",
    padding: "1em 5em 1em 0em",
    border: "2px solid #FF8000"
  },
  blocksatz: {
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

class Datenschutz extends Component {
  render() {
    const { classes } = this.props;
    const dt = new Date();
    const year = dt.getFullYear();
    return (
      <Layout>
        <SEO title="Allgemeine Geschäfts- und Lieferbedingungen - AGB" />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flexWrap: "nowrap",
            backgroundColor: "#FF8000",
            height: "10rem",
            justifyContent: "center",
            alignItems: "center"
          }}
        />

        <Box
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
          <Typography variant="display2">Allgemeine Geschäfts- und Lieferbedingungen - AGB</Typography>
          <div className={classes.blocksatz}>
            <Typography variant="heading">
            </Typography>
          </div>
          <div className={classes.heading}>
            <Typography variant="display1">1. Geltungsbereich</Typography>
          </div>
          <div className={classes.blocksatz}>
            <Typography variant="subheading">
            1.1 Die nachstehenden allgemeinen Geschäfts- und Lieferbedingungen (AGB) gelten für Rechtsgeschäfte zwischen dem Verlag und Herausgeber: SoftQuote GmbH, Säntisstrasse 6, 9100 Herisau, Schweiz, CHE-115.008.531, UID: , DE999999999,  Gerichtsstand: Herisau und dem Kunden/Verbraucher. Abweichende Allgemeine Geschäfts- und Lieferbedingugen des Kunden/Verbraucher gelten nicht. Bestellungen des Abo Dienstes "StockBoost" dürfen vom Kunden nur in Auftrag gegeben werden, wenn der Kunde diese Allgemeinen Geschäfts- und Lieferbedingungen von "StockBoost" anerkennt. <br />
            1.2 Mit dem Zugriff, der Benutzung oder Bestellung von Informationen, Sachen oder Dienstleistungen des Abo Dienstes "StockBoost" erklärt sich der Kunde mit den AGB ausdrücklich einverstanden und erkennt sie damit maßgeblich an. 
            Diese AGB gelten für alle Informationen und Dienstleistungen, welche durch den Verlag und Herausgeber SoftQuote GmbH, Säntisstrasse 6, 9100 Herisau, Schweiz, im Internet publiziert werden, bzw. welche im Abo Dienst "StockBoost" veröffentlicht werden oder auf ihrer Online-Plattformen erbringt als auch für alle Dienstleistungen im Bereich mobiles Internet. 


              <br />
            </Typography>
          </div>
          <div className={classes.heading}>
            <Typography variant="display1">2. Vertragsschluss</Typography>
          </div>
          <div className={classes.blocksatz}>
            <Typography variant="subheading">
              2.1 Die Bestellung des Abonnements "StockBoost" ist ein bindendes Angebot. Der Verlag kann dieses Angebot zur Zusendung einer Auftragsbestätigung innerhalb von einer Woche annehmen. Ein Anspruch auf Vertragsabschluss besteht nicht. Der Herausgeber kann den Vertrag mit einem Kunden ohne Begründung ablehnen. 
              <br />
              Der Widerruf einer Abonnementsbestellung muss innerhalb von 14 Tagen seit der Abonnementsbestellung mittels eingeschriebenen Briefs an SoftQuote GmbH, Säntisstrasse 6, 9100 Herisau, Schweiz, CHE-115.008.531, UID: , DE999999999, Gerichtsstand: Herisau, bzw. alternativ per Email an bestellung@stockboost.de erfolgen.
              <br />
              2.2 Nach Abschluss des Bestellvorgangs auf www.stockboost.de erhält der Abonnent an die von ihm angegebene E-Mail-Adresse unverzüglich – spätestens innerhalb von 24 Stunden – eine Bestätigung, in welcher die SoftQuote GmbH die vom Abonnenten angegebenen Daten zu dessen Information sowie den Inhalt des vom Abonnenten erklärten Angebots wiedergibt (Bestellbestätigung).
              <br />
              Der Kunde steht dafür ein, dass alle von ihm in den Bestellungsunterlagen angegebenen Daten der Wahrheit entsprechen und vollständig sind und alle eintretenden Änderungen der gemachten Registrierungsangaben unverzüglich mitzuteilen. Änderungen der Lieferadresse sind mindestens 4 Wochen vorher mitzuteilen. Fehlende Zustellungen des Titels aufgrund der Nichtmitteilung einer geänderten Adresse des Kunden fallen nicht in den Haftungsbereich der SoftQuote GmbH.
              <br />
              2.3 Mit dem Absenden der Bestellbestätigung durch die SoftQuote GmbH ist der Bestellvorgang abgeschlossen und ein Vertragsverhältnis (Abonnementvertrag) ist zustande gekommen.
            </Typography>
          </div>
          <div className={classes.heading}>
            <Typography variant="display1">3. Vertragsgegenstand</Typography>
          </div>
          <div className={classes.blocksatz}>
            <Typography variant="subheading">
            3.1 Der Vertrag beinhaltet das Abonnement des wöchentlich (ca. 50 Ausgaben, ohne Gewähr) per E-Mail übersandten "StockBoost" Newsletters (zzgl. Update-Ausgaben) für "Boost-Signale" an die von dem Abonnenten eingegebene E-Mail-Adresse (nachfolgend „Leistungsangebot“).
            <br />
            3.2 Der Abo Dienst "StockBoost" ist ein Informationsprodukt. Er beinhaltet keine Anlageberatung und keine Anlagevermittlung. Er ist nicht auf die individuellen Verhältnisse der Leser zugeschnitten. Dies gilt auch für etwaigen Schriftverkehr oder sonstige Kommunikation im Verlauf des Bezugs.
            <br />
            Der Abo Dienst "StockBoost" vermittelt die persönlichen Kenntnisse und Methoden der Autoren. Die mitgeteilten Informationen stellen eine Auswahl allgemein zugänglicher Informationen der Autoren dar. Die auf den ausgewählten Informationen fußenden Prognosen und Empfehlungen geben die Gedanken und Meinung der Autoren wieder.
            <br />
            Im Abo Dienst "StockBoost" mitgeteilte Informationen sind keine Aufforderungen zum Kauf oder Verkauf von Wertpapieren und beinhalten auch keine Garantie hinsichtlich der weiteren Marktentwicklung oder der Entwicklung bestimmter Papiere. Die in dem Abo Dienst "StockBoost" bereitgestellten Informationen ersetzen insbesondere nicht die eigene Recherche sowie die eigenverantwortliche Reflektion und Entscheidung durch den Leser bzw. die Beratung durch einen Anlageberater. Jede Entscheidung Geschäfte zu tätigen oder nicht zu tätigen, wird von dem Leser eigenverantwortlich getroffen. Wir empfehlen dem Leser gegebenenfalls, seinen Anlage-, Steuer- oder Rechtsberater zu konsultieren.
            <br />
            3.3 Um das Leistungsangebot der SoftQuote GmbH zu nutzen, sind die im Bestellprozess aufgezeigten Systemvoraussetzungen vom Abonnenten auf eigene Kosten bereitzuhalten. Die Systemvoraussetzungen können sich entsprechend der technischen Entwicklung verändern.
            <br />
            </Typography>
          </div>
          <div className={classes.heading}>
            <Typography variant="display1">4. Nutzungsrechte</Typography>
          </div>
          <div className={classes.blocksatz}>
            <Typography variant="subheading">
              4.1 Der Abonnent erwirbt mit Vertragsschluss das einfache, nicht übertragbare, zeitlich auf die Vertragslaufzeit beschränkte, nicht unterlizenzierbare Recht, das Leistungsangebot zum ausschließlich persönlichen Gebrauch in der von der SoftQuote GmbH angebotenen Art und Weise zu nutzen (nachfolgend „Nutzungsberechtigung“).
              <br />
              4.2 Jede über die vorstehend aufgeführte Nutzungsberechtigung hinausgehende Nutzung ist nicht gestattet. Insbesondere ist der Abonnent nicht berechtigt,
              <br />
              - Marken, Namen, Unternehmenskennzeichen, Logos oder sonstige Bestandteile des Leistungsangebots oder der Website außerhalb der gesetzlich zugelassenen freien Nutzung zu verwenden;.
              <br />
              - das Leistungsangebot in irgendeiner Weise inhaltlich oder redaktionell zu ändern,
              <br />
              - das Leistungsangebot für Dritte zu kopieren, öffentlich zugänglich zu machen bzw. weiterzuleiten, im Internet oder in andere Netzwerke entgeltlich oder unentgeltlich einzustellen, nachzuahmen, weiterzuverkaufen oder für kommerzielle Zwecke zu nutzen.
              <br />
            </Typography>
          </div>
          <div className={classes.heading}>
            <Typography variant="display1">5. Aussetzung der Nutzungsberechtigung</Typography>
          </div>
          <div className={classes.blocksatz}>
            <Typography variant="subheading">
              5.1 Die SoftQuote GmbH ist berechtigt, die Nutzungsberechtigung auszusetzen (nachfolgend „Aussetzung“), wenn
              <br />
              - der Abonnent mit der Zahlung der fälligen Vergütung in Verzug ist,
              <br />
              - begründete Anhaltspunkte einer missbräuchlichen Nutzung des Leistungsangebots durch den Abonnent erfolgt
              <br />
              5.2 Die SoftQuote GmbH wird dem Abonnenten die Aussetzung unter Angabe der Gründe mitteilen.
              <br />
              5.3 Die SoftQuote GmbH wird die Aussetzung aufheben, sobald der Grund für die Aussetzung weggefallen ist.
              <br />
              5.4 Im Falle einer berechtigten Aussetzung bestehen die Zahlungsansprüche von der SoftQuote GmbH gegenüber dem Abonnenten für die Dauer der Vertragslaufzeit fort. Das Recht zur außerordentlichen Kündigung von der SoftQuote GmbH bleibt unberührt.         
            </Typography>
          </div>
          <div className={classes.heading}>
            <Typography variant="display1">6. Preise und Zahlungsbedingungen</Typography>
          </div>
          <div className={classes.blocksatz}>
            <Typography variant="subheading">
              Die Preise und Zahlungsbedingungen sind im Bestellvorgang ausgewiesen. Mit der Zahlung des ausgewiesenen Preises sind die Nutzungsrechte gemäß Ziffer 4. abgegolten.
            </Typography>
          </div>
          <div className={classes.heading}>
            <Typography variant="display1">7. Widerrufsrechte des Kunden als Verbraucher</Typography>
          </div>
          <div className={classes.blocksatz}>
            <Typography variant="subheading">
              Widerrufsrecht für Verbraucher 
              <br />
              Verbrauchern steht ein Widerrufsrecht nachfolgender Maßgabe zu, wobei Verbraucher jede natürliche Person ist, die ein Rechtsgeschäft zu Zwecken abschließt, die überwiegend weder ihrer gewerblichen noch ihrer selbständigen beruflichen Tätigkeit zugerechnet werden können:
              <br />
              Widerrufsbelehrung
              <br />
              Widerrufsrecht
              <br />
              Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen. Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag des Vertragsschlusses.
              Um Ihr Widerrufsrecht auszuüben, müssen Sie uns mittels einer eindeutigen Erklärung (z.B. mittels eingeschriebenen Briefs an SoftQuote GmbH, Säntisstrasse 6, 9100 Herisau, Schweiz, CHE-115.008.531, UID: CHE-184.223.405, DE999999999,  Gerichtsstand: Herisau, bzw. alternativ per Email an bestellung@stockboost.de informieren.
            </Typography>
          </div>
        
        </Box>
      </Layout>
    );
  }
}

export default withStyles(styles)(Datenschutz);
