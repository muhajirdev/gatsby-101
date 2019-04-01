import React, { useState } from "react";
import { Component } from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";

import SEO from "../components/seo";
import Layout from "../components/layout";

/* styled */
import styled from "styled-components";

// Expansion Panel
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/Add";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";

// rebass
import { Flex, Box, Text } from "rebass";
import FullScreen from "../components/fullscreen";

/* MUI */
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";


// 

const SEO_Title = "Vision";
const Navigation_View = "Team > Vision";

const CloseIcon = ({ active }) => {
  return (
    <ExpandMoreIcon
      style={{ fill: "#000", transform: active ? "rotate(45deg)" : null }}
    />
  );
};

const styles = theme => ({
  heading: {
    color: "#000"
  },
  display: {
    color: "#000",
    paddingTop: "1rem"
  },
  subheader: {
    color: "#000",
    paddingTop: "1rem"
  },
  blocksatz: {
    color: "#000",
    paddingTop: "1rem"
  },
  collapsable: {
    color: "#000",
    fontFamily: "Times New Roman,Noto Serif, serif !important",
    paddingTop: "1rem",
    marginTop:"100px",
    marginBottom:"100px",
    marginRight:"20%",
    marginLeft:"20%",
    textAlign:"justify"
  },
  copyright: {
    color: "#000",
    textAlign: "center"
  },
  link: {
    color: "#FF8000",
    textDecoration: "none"
  },
  logo: {
    fontWeight: 700
  },
  transparent: {
    background: "transparent",
    boxShadow: "none"
  },
  noPadding: {
    padding: 0
  },
  avatar: {
    width: 60,
    height: 60, 
    margin: 10,
    // marginBottom: 0,
    // display block  | inline-block
    display: "block"
  },
  bigAvatar: {
    margin: 10,
    width: 80,
    height: 80,
  }
});

const Background1 = ({ children }) => (
  <div
    style={{
      minHeight: "100vh",
      minWidth: "100%",
      background:
        "linear-gradient(0deg, rgba(64, 51, 51, 0), rgba(31, 26, 26, 0.6))",
      backgroundImage: "url(/rob-bates.jpg)",
      backgroundSize: "cover",
      backgroundPosition: "center center",
      backgroundAttachment: "fixed",
      zIndex: 0
    }}
  >
    {children}
  </div>
);

const Background2 = ({ children }) => (
  <div
    style={{
      minHeight: "100vh",
      minWidth: "100%",
      background:
        "linear-gradient(0deg, rgba(44, 44, 44, 0.2), rgba(224, 23, 3, 0.6))",
      backgroundSize: "cover",
      backgroundPosition: "center center",
      zIndex: -100
    }}
  >
    {children}
  </div>
);
const Background3 = ({ children }) => (
  <div
    style={{
      minHeight: "100vh",
      minWidth: "100%",
      background: "rgba(0, 0, 0, 0.3)",
      backgroundSize: "cover",
      backgroundPosition: "center center",
      zIndex: -100
    }}
  >
    {children}
  </div>
);


const Collapsable = withStyles(styles)(({ title, children, classes }) => {
  const [active, setActive] = useState(false);
  return (

      <ExpansionPanel
      onClick={() => setActive(!active)}
      style={{ background: "transparent", boxShadow: "none" }}
      >
      <ExpansionPanelSummary
        expandIcon={<CloseIcon active={active} />}
        style={{ background: "transparent", padding: 0 }}
      >
        <Typography variant="primary" className={classes.heading}>
          {title}
        </Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails style={{ background: "white", padding: 0 }}>
        <Typography variant="subheading" className={classes.blocksatz}>
          {children}
        </Typography>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
});

class Anlagestrategie extends Component {
  render() {
    const { classes } = this.props;
    const dt = new Date();
    const year = dt.getFullYear();
    return (
      <Layout>
        <SEO title={SEO_Title} />
       
        <FullScreen
          // Header 5rem
          // bg='magenta'
          minHeight={[1, 1, 1]}
          minWidth={[1, 1, 1]}
          flexDirection={["column", "column", "column"]}
          flexWrap="nowrap"
          alignSelf="center"
          alignItems="center"
          justifyContent="flexStart"
          textAlign="center"
          marginLeft="auto"
          marginRight="auto"
        >         

      <Background1>
        <Background2>
          <Background3>
       

          <Box
            flexDirection={["row", "row", "row"]}
            // Header 5rem
            // bg='magenta'
            pt="6rem"
            marginRight="auto"
            marginLeft="auto"
            fontSize={4}
            width={[1, 1, 1 / 2]}
            color="#000"
            // justifyContent="flexStart"
            // alignItems="flexStart"
            // textAlign="flexStart"
            // alignSelf="flexStart"
            mx="auto"
            p={10}
            padding="40px"
          >
            <Typography variant="subheading">
                <img style={{ width: "1rem", margin: 0, padding: 0, transform: "rotate(270deg)"}} src={require("../icons/muiHome.svg")}/> > {Navigation_View}
            </Typography>
            <Typography variant="display1"> {SEO_Title} </Typography>

            <Typography className={classes.blocksatz} variant="subheading">
            Im Allgemeinen wird mit großen Gewinnen und dem schnellen Geld an der Börse geworben.
            Die Wirklichkeit sieht leider anders aus . Die meisten Menschen verlieren Geld an den Börsen. Das ist auch logisch, da Geld an den Finanzmärkten nicht erschaffen, sondern umverteilt wird. Man benötigt viel Zeit, um zu verstehen warum das so ist und was die kritischen Punkte sind, die man als Trader oder Investor erlernen muss. 
              <br />
              Wir handeln selbst sein vielen Jahren an der Börse und wollen nicht die Unwissenheit anderer ausnutzen, um uns selbst zu bereichern. Das geht nur über Transparenz und Offenheit.
              <br />
              Mit StockBoost haben wir ein Projekt gestartet was diese Anforderungen umsetzt. 
            </Typography>

            <Collapsable title={"Vision"}>
      
            <Typography variant="subheading" className={classes.collapsable}>
            Wir wollen mit StockBoost eine transparente Basis für einen Investment-Ansatz zeigen und das Thema finanzielle Bildung vorantreiben.
            Viele andere sind mit so einem Ansatz bisher gescheitert. Warum wir uns trotzdem auf so einen steinigen Weg machen beschreiben wir im Detail im Menu-Punkt Team.
            <br />
            <h4>Für wen ist dieser Informationsdienst geeignet?</h4>
            <br />
Für Investoren, die uns an der langfristigen Umsetzung der StockBoost-Strategien begleiten und bei der praktischen Umsetzung über die Schultern schauen wollen. 
Je länger das Projekt StockBoost läuft, umso interessanter werden die Auswertungen unserer Umsetzungen in unterschiedlichen Börsenphasen.
            <br />
<h4> Warum ist StockBoost kostenpflichtig obwohl Ihr mit einem Echtgeldkonto an der Strategie partizipiert?</h4>
<br />
Die Angebote rund um das Thema Anlagemöglichkeiten sind in Ländern wie Deutschland aus unserer Sicht nicht optimal für die breite Masse ausgelegt. Das liegt einerseits an der vorliegenden Sparkultur und auch an der eher unzureichenden finanziellen Bildung. Wir wollen aber nicht nur meckern, sondern etwas verändern.

<br />
Wir haben StockBoost als nachvollziehbarer Infodienst konzipiert und werden aufzeigen, dass man mit geringen Kosten, wenig Zeitaufwand und einem angemessenen Risiko langfristig erfolgreich in Aktien investieren kann. 
            <br />
            Durch die Einnahmen wollen wir die Kosten für das Projekt decken und in der Lage sein sukzessive über unsere kostenfreien Beiträge und Videos das Thema finanzielle Bildung im deutschsprachigen Raum voranzutreiben.
            <br />
            Jeder muss an irgendeiner Stelle Geld für seine Arbeit verdienen. Ein kostenpflichtiger Beitrag ist transparent. Wir arbeiten nicht mit verdeckten Provisionen oder Vermittlungsgebühren von Dritten.
            <br />

            <h4> StockBoost – Zielsetzung</h4> 
            <br />
            Im Informationsdienst StockBoost soll die Entwicklung eines aktiv gemanagten Aktiendepots langfristig dokumentiert werden. Als Renditeziel soll eine Überperformance gegenüber den US-Indizes erreicht werden.
            <br />
            Neben einem transparenten Regelwerk können die Interessenten 1x wöchentlich alle Veränderungen direkt beobachten und nachvollziehen.
            <br />
            Als Grundlage des Regelwerkes dienen wissenschaftlich belegte, empirische Studien. Für die Umsetzung von StockBoost werden permanent umfangreiche Auswertungen von Analystenprognosen über den gesamten US-Markt erstellt. Durch ein Ranglistensystem werden die Aktien für StockBoost selektiert.
            <br />
            2/3 des Depotvolumens (30 Aktien) werden ständig in amerikanische Midcap Aktien investiert. 
            <br />
            1/3 des Depots (maximal 15 Aktien) wird in bullischen Börsenphasen in trendstarke US-Aktien investiert, die - nach einer Gewinnüberraschung - eine potenzielle neue Aufwärtsphase einleiten. 
Als Marktampel wird der Gleitende Durchschnitt (GD) eines grossen US-Indexes der letzten 200 Tage per Wochenschluss mit dem Indexstand verglichen. Bullische Börsenphasen sind für uns Indexstände über dem Gleitenden Durchschnitt der letzten 200 Tage. Im Bärenmarkt wird dieser Teil des Depots von 1/3 auf 1/6 halbiert und es werden keine Neueinstiege getätigt. 
            <br />
            Je länger der Bärenmarkt dauert, umso mehr Cash wird in diesem einen Drittel aufgebaut. In einem andauernden Bärenmarkt beträgt die Cashquote bis zu 33%.
            <br />
            Das Aktiendepot wird nicht gehebelt und dient den Autoren als Diversifikation zu weiteren Strategien, die sie als Vollzeithändler umsetzen.
            </Typography>
          </Collapsable>

          <Collapsable title={"Geschichte"}>
            <Typography variant="subheading" className={classes.collapsable}>
                Ich entdeckte bereits im Jahre 2001 zufällig, dass Prognoserevisionen von Analysten und Gewinnüberraschungen ein mächtiges Werkzeug sein können,  um eine systematische, nachhaltig erfolgsversprechende Anlagestrategie aufzubauen. Mit Nicolai baute ich ein Regelwerk auf und handelte die Aktienstrategie von 2001 bis 2002 in einem gemeinsamen Depot bei Interactive Brokers Ltd.. Die quantitative Aktienauswahl war ziemlich zeitaufwendig, da wir viele Daten manuell aufarbeiten mussten. Mit dem Start meines Ökonomiestudiums an der Universität Zürich stellten wir leider die Umsetzung der Strategie aus Zeitgründen und meinem Geldmangel ein. Das Ganze ging uns jedoch nicht aus dem Kopf und war auch in den Folgejahren präsent und wir verfolgten die Performance der Aktienstrategie auf der Seitenlinie. Nicolai schrieb im Jahre 2006 seine Diplomarbeit in Informatik an der Technikerschule mit dem Themenkomplex „Aufbau eines Internetauftritts und Umsetzung eines Informationsdienstes“. Auch dieses Projekt wurde von Nicolai und mir nie realisiert. Im Jahre 2008 bemühte ich mich erfolgreich darum, meine Masterthesis zum StockBoost-Thema „Die Prognosefähigkeit von Earnings Forecasts für Aktienkurse“ zu schreiben. Die Resultate der eigenen empirischen Studie mit Analystendaten aus der I/B/E/S-Datenbank, einer alternativen Datenquelle, führte ebenso zu validen, risikoadustierten Modell-Überrenditen für die Jahre 2001 bis 2007. Die Diplomarbeit von Marco findest du hier: --------- (Verlinkung). Nach dem Universitätsabschluss handelte ich die Aktienstrategie StockBoost erneut für etwa ein Jahr im eigenen Depot bis mir die manuelle Auswertung wiederum zu zeitaufwendig wurde. Ich machte mich ab 2009 als privater Vollzeit-Aktientrader selbstständig und das Projekt StockBoost lag erneut für Jahre auf Eis, aber ich verfolgte die Entwicklung auf der Seitenlinie mit grossem Interesse. Im Jahre 2018 fanden die späteren Protagonisten von StockBoost Rami, Elko und ich durch eine Weiterbildung im Börsenbereich zusammen und veranstalteten einmal im Monat einen Austausch über Skype bei dem wir über eigene Erfahrungen mit Trading und Eigenhandel diskutierten. Im Rahmen dieser Mastermind-Gespräche erwähnte ich immer wieder, dass mir seit Jahren eine Aktienstrategie mit Analystendaten und Earnings Surprises als Inputdaten im Kopf herumschwirrt, die ich im Jahre 2001 entdeckte und die mich nie mehr losgelassen hat. Rami und Elko waren von der Idee StockBoost überzeugt und wir bereiteten den Informationsdienst StockBoost über Monate im Hintergrund auf . Kernstück von StockBoost ist ein ausgereiftes, mit Echtgeld umgesetztes, transparentes Aktiendepot, das gezielt auf den Postannouncement-Drift nach Gewinnrevisionen und nach Gewinnüberraschungen setzt. Rami entwickelte ein Softwareprogramm das uns die zeitaufwendige Analysearbeit weitgehend abnimmt  und fehlerfrei arbeitet. Desweitern bereiteten wir die akademische Literatur und das genaue Regelwerk für die Kunden von StockBoost in verständlicher Form auf.  Seit März 2019  ist das Projekt StockBoost live und wir wollen den Informationsdienst für viele Jahre anbieten und selbst auf dem Echtgeld-Depot bei Interactive Brokers Ltd. transparent inklusive Track Record umsetzen. Im Depot sollen neben Steuern keine Entnahmen getätigt werden und allfällige Gewinne sollen reinvestiert werden.
                Wie man systematisch & entspannt in Aktien investiert - StockBoost
            </Typography>
          </Collapsable>


          </Box>
     
     
          </Background3>
        </Background2>
      </Background1> 
    </FullScreen>
  </Layout>
    );
  }
}
export default withStyles(styles)(Anlagestrategie);
