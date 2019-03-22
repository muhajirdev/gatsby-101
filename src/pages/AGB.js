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

const itemsHeader = "Allgemeine Geschäfts- und Lieferbedingungen - AGB";


class Datenschutz extends Component {
  render() {
    const { classes } = this.props;
    const dt = new Date();
    const year = dt.getFullYear();
    return (
      <Layout>
        <SEO title="Allgemeine Geschäfts- und Lieferbedingungen - AGB" />
        
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
            1.1 Die nachstehenden allgemeinen Geschäfts- und Lieferbedingungen (AGB) gelten für Rechtsgeschäfte zwischen dem Verlag und Herausgeber: SoftQuote GmbH, Säntisstrasse 6, 9100 Herisau, Schweiz, CHE-184.223.405, Gerichtsstand: Herisau und dem Kunden/Verbraucher. Abweichende Allgemeine Geschäfts- und Lieferbedingungen des Kunden/Verbraucher gelten nicht. Bestellungen des Abo Dienstes "StockBoost" dürfen vom Kunden nur in Auftrag gegeben werden, wenn der Kunde diese Allgemeinen Geschäfts- und Lieferbedingungen von "StockBoost" anerkennt. <br />
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
              Der Widerruf einer Abonnementsbestellung muss innerhalb von 14 Tagen seit der Abonnementsbestellung mittels eingeschriebenen Briefs an SoftQuote GmbH, Säntisstrasse 6, 9100 Herisau, Schweiz, CHE-184.223.405, Gerichtsstand: Herisau, bzw. alternativ per Email an bestellung@stockboost.de erfolgen.
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
              <strong>Widerrufsbelehrung</strong>
              <br />
              <strong>Widerrufsrecht</strong>
              <br />
              Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen. Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag des Vertragsschlusses.
              Um Ihr Widerrufsrecht auszuüben, müssen Sie uns mittels einer eindeutigen Erklärung (z.B. mittels eingeschriebenen Briefs an SoftQuote GmbH, Säntisstrasse 6, 9100 Herisau, Schweiz, CHE-184.223.405, Gerichtsstand: Herisau, bzw. alternativ per Email an bestellung@stockboost.de informieren.
              <br />
              Zu Wahrung der Widerrufsfrist reicht es aus, dass Sie die Mitteilung über die Ausübung des Widerrufsrechts vor Ablauf der Widerrufsfrist absenden.
              <br />
              <strong>Folgen des Widerrufs</strong>
              <br />
              Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle Zahlungen, die wir von Ihnen erhalten haben, einschließlich der Lieferkosten (mit Ausnahme der zusätzlichen Kosten, die sich daraus ergeben, dass Sie eine andere Art der Lieferung als die von uns angebotene, günstigste Standardlieferung gewählt haben), unverzüglich und spätestens binnen vierzehn Tagen ab dem Tag zurückzahlen, an dem die Mitteilung über Ihren Widerruf dieses Vertrages bei uns eingegangen ist. Für diese Rückzahlung verwenden wir dasselbe Zahlungsmittel, das Sie bei der ursprünglichen Transaktion eingesetzt haben, es sei denn, mit Ihnen wurde ausdrücklich etwas anderes vereinbart; in keinem Fall werden Ihnen wegen dieser Rückzahlung Entgelte berechnet.
              <br />
              <strong>Ende der Widerrufsbelehrung</strong>
            </Typography>
          </div>
          <div className={classes.heading}>
            <Typography variant="display1">8. Laufzeit und Kündigung</Typography>
          </div>
          <div className={classes.blocksatz}>
            <Typography variant="subheading">
              8.1 Die Laufzeit der Nutzungsberechtigung gemäß Ziffer 4 dieser AGB ist in dem Bestellprozess ausgewiesen und in der Bestellbestätigung einsehbar (nachfolgend auch „Vertragslaufzeit“).
              <br />
              8.2 Die Vertragslaufzeit beträgt 12 Monate und verlängert sich nach Ablauf jeweils automatisch um weitere 12 Monate, wenn der Vertrag nicht von einer der Parteien mit einer Frist von 4 Wochen zum Ende der Vertragslaufzeit schriftlich an SoftQuote GmbH, Säntisstrasse 6, 9100 Herisau, Schweiz oder per E-Mail an bestellung@stockboost.de gekündigt wird.
              <br />
              8.3 Das Recht zur außerordentlichen Kündigung aus wichtigem Grund bleibt unberührt. Ein wichtiger Grund für die SoftQuote GmbH liegt insbesondere vor, im Falle der nachweislichen Verletzung der Nutzungsberechtigung.
              <br />
          </Typography>    
          </div>
          <div className={classes.heading}>
            <Typography variant="display1">9. Gewährleistung</Typography>
          </div>
          <div className={classes.blocksatz}>
            <Typography variant="subheading">
              9.1 Die SoftQuote GmbH wird alle angemessenen Anstrengungen unternehmen, um das Leistungsangebot verfügbar zu halten. Die SoftQuote GmbH übernimmt jedoch keine Gewährleistung für die Einschränkungen in der Verfügbarkeit aufgrund von technischen Störungen, mangelnder Internetverbindung oder sonstiger Störungen, die außerhalb des Einflussbereiches von der SoftQuote GmbH liegen, sowie für kurzzeitige Unterbrechungen aufgrund von erforderlichen Wartungsarbeiten. Die SoftQuote GmbH ist zudem berechtigt, den Zugang zum Leistungsangebot zu sperren, soweit dies aus Sicherheitsgründen oder datenschutzrechtlichen Gründen erforderlich sein sollte.
              <br />
              9.2 Die verschuldensunabhängige Haftung seitens der SoftQuote GmbH für anfängliche Sachmängel (§ 536a BGB) wird der SoftQuote GmbH vom Abonnenten erlassen.              <br />
          </Typography>
          </div>


          <div className={classes.heading}>
            <Typography variant="display1">10. Haftungsbeschränkung</Typography>
          </div>
          <div className={classes.blocksatz}>
            <Typography variant="subheading">
              10.1 Die SoftQuote GmbH haftet uneingeschränkt für Vorsatz und grobe Fahrlässigkeit und nach dem Produkthaftungsgesetz sowie im Falle von Arglist. Des Weiteren haftet die SoftQuote GmbH uneingeschränkt für Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit, die auf einer fahrlässigen Pflichtverletzung seitens der SoftQuote GmbH oder einer vorsätzlichen oder fahrlässigen Pflichtverletzung eines gesetzlichen Vertreters oder Erfüllungsgehilfen von der SoftQuote GmbH beruhen. Im Falle der Verletzung einer wesentlichen Vertragspflicht aufgrund leichter Fahrlässigkeit ist die Haftung von der SoftQuote GmbH auf den vorhersehbaren Schaden beschränkt.
              <br />
              10.2 Im Übrigen ist jede Haftung von der SoftQuote GmbH für sämtliche unmittelbaren und mittelbaren Schäden, die durch die Nutzung des Leistungsangebots entstehen, ausgeschlossen.
              <br />
              10.3 Die SoftQuote GmbH bzw. der Informationsdienst StockBoost stellt KEINE ANLAGEBERATUNG und KEINE EMPFEHLUNG ZUM KAUF ODER VERKAUF VON WERTPAPIEREN dar. Bitte beachten Sie, dass bei den Umschichtungen in StockBoost niemals die Aufforderung liegt, diese Transaktionen nachzubilden. StockBoost versteht sich als Angebot mit rein ausbildendem Charakter. Die SoftQuote GmbH haftet weder für Richtigkeit, noch Vollständigkeit der bereitgestellten Informationen, noch für Schäden, welche Ihnen daraus entstehen, dass Sie auf die Richtigkeit der Informationen im weitesten Sinne vertraut haben. Wir fordern Sie ausdrücklich auf, alle von uns bereitgestellten Informationen einer eingehenden Prüfung zu unterziehen und erst dann etwaige Entscheidungen auf Basis solcher Informationen eigenverantwortlich zu treffen. Eine kritische und skeptische Herangehensweise stellt bei Finanzanlagen generell eine Tugend dar.
          </Typography>
          </div>
          <div className={classes.heading}>
            <Typography variant="display1">11. Sonstiges</Typography>
          </div>
          <div className={classes.blocksatz}>
            <Typography variant="subheading">
            Die Nichtgeltendmachung einzelner in diesen AGB enthaltener Rechte führt nicht zum Verzicht auf diese Rechte, sondern der jeweils Berechtigte bleibt im Rahmen der gesetzlichen Bestimmungen jederzeit zur künftigen Geltendmachung berechtigt.
             </Typography>
          </div>
          <div className={classes.heading}>
            <Typography variant="display1">12. Schlussbestimmungen</Typography>
          </div>
          <div className={classes.blocksatz}>
            <Typography variant="subheading"> 
            Es gilt Schweizer Recht. Ausschliesslicher Gerichtsstand für alle Ansprüche im Zusammenhang mit der Geschäftsbeziehung zwischen dem Verlag und Herausgeber SoftQuote GmbH und dem Kunden ist Herisau, Schweiz.
            </Typography>
         </div>
        </Flex>
      </Layout>
    );
  }
}

export default withStyles(styles)(Datenschutz);
