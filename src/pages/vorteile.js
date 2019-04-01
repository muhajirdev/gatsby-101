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
import Avatar from '@material-ui/core/Avatar';

/* Icons */
import MonthIcon from "@material-ui/icons/Explore";
import YearIcon from "@material-ui/icons/PowerSettingsNew";


const StyledLink = styled(Link)`
  font-size: 9;
  text-decoration: none;
  color: #ff8000;
`;

// 

const SEO_Title = "Vision";
const Navigation_View = "Team > Vision";

const CloseIcon = ({ active }) => {
  return (
    <ExpandMoreIcon
      style={{ fill: "#fff", transform: active ? "rotate(45deg)" : null }}
    />
  );
};

const styles = theme => ({
  heading: {
    color: "#fff"
  },
  display: {
    color: "#fff",
    paddingTop: "1rem"
  },
  subheader: {
    color: "#fff",
    paddingTop: "1rem"
  },
  blocksatz: {
    color: "#fff",
    paddingTop: "1rem"
  },
  collapsable: {
    color: "#fff",
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
  },
  avatar: {
    width: 65,
    height: 65, 
    margin: 12,
    padding: 0,
    // marginBottom: 0,
    // display block  | inline-block
    display: "block"
  },
  bigAvatar: {
    width: 80,
    height: 80,
    margin: 12,
    padding: 0,
  }
});

const Background1 = ({ children }) => (
  <div
    style={{
      minHeight: "100vh",
      minWidth: "100%",
      background:
        "linear-gradient(0deg, rgba(64, 51, 51, 0), rgba(31, 26, 26, 0.6))",
      backgroundImage: "url(/esther-tuttle.jpg)",
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
            width={[1, 1, 3 / 4]}
            color="#fff"
            // justifyContent="flexStart"
            // alignItems="flexStart"
            // textAlign="flexStart"
            // alignSelf="flexStart"
            mx="auto"
            p={10}
            padding="40px"
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

            {/* <Collapsable title={""}>
            </Collapsable> */}
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
