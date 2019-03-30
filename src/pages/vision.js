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
// import SVG from ./assets/svg/global.svg

// <Link to="/">Go back to the homepage</Link>

const CloseIcon = ({ active }) => {
  return (
    <ExpandMoreIcon
      style={{ fill: "#fff", transform: active ? "rotate(45deg)" : null }}
    />
  );
};

const styles = theme => ({
  heading: {
    fontFamily: "Noto Serif, serif !important",
    color: "#fff"
  },
  display: {
    fontFamily: "Noto Serif, serif !important",
    color: "#fff",
    paddingTop: "1rem"
  },
  subheader: {
    fontFamily: "Noto Serif, serif !important",
    color: "#fff",
    paddingTop: "1rem"
  },
  blocksatz: {
    fontFamily: "Noto Serif, serif !important",
    color: "#fff",
    paddingTop: "1rem"
  },
  blocksatz2: {
    fontFamily: "Noto Serif, serif !important",
    paddingTop: "1rem"
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
  },
  transparent: {
    background: "transparent",
    boxShadow: "none"
  },
  noPadding: {
    padding: 0
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

const pageHeader = "Vision";

const Collapsable = withStyles(styles)(({ title, children, classes }) => {
  const [active, setActive] = useState(false);
  return (

      <ExpansionPanel
      onClick={() => setActive(!active)}
      style={{ background: "transparent", boxShadow: "none" }}
      >
      <ExpansionPanelSummary
        expandIcon={<CloseIcon active={active} />}
        style={{ padding: 0 }}
      >
        <Typography variant="primary" className={classes.heading}>
          {title}
        </Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails style={{ padding: 0 }}>
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
        <SEO title={pageHeader} />
       
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
            pt="13.5rem"
            marginRight="auto"
            marginLeft="auto"
            fontSize={4}
            width={[1, 1, 1 / 2]}
            color="#fff"
            justifyContent="flexStart"
            alignItems="flexStart"
            textAlign="flexStart"
            alignSelf="flexStart"
            mx="auto"
            p={10}
            padding="40px"
          >
            <Typography variant="subheading" style={{ paddingTop: "6rem" }} />

            <Typography variant="subheading">
              Team > {pageHeader}{" "}
            </Typography>
            <Typography variant="display1"> {pageHeader} </Typography>

            <Typography className={classes.blocksatz} variant="subheading">
            Im Allgemeinen wird mit großen Gewinnen und dem schnellen Geld an der Börse geworben.
            Die Wirklichkeit sieht leider anders aus . Die meisten Menschen verlieren Geld an den Börsen. Das ist auch logisch, da Geld an den Finanzmärkten nicht erschaffen, sondern umverteilt wird. Man benötigt viel Zeit, um zu verstehen warum das so ist und was die kritischen Punkte sind, die man als Trader oder Investor erlernen muss. 
              <br />
              Wir handeln selbst sein vielen Jahren an der Börse und wollen nicht die Unwissenheit anderer ausnutzen, um uns selbst zu bereichern. Das geht nur über Transparenz und Offenheit.
              <br />
              Mit StockBoost haben wir ein Projekt gestartet was diese Anforderungen umsetzt. 
            </Typography>

            <Typography variant="display1" className={classes.heading}>
              {""}
            </Typography>

            <Collapsable title={"Vision"}>
      
            <Typography variant="subheading" className={classes.blocksatz}>
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
