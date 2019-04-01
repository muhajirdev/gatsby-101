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
      backgroundImage: "url(/tyler-reynolds.jpg)",
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
            width={[1, 1, 1 / 2]}
            color="#fff"
            // justifyContent="flexStart"
            // alignItems="flexStart"
            // textAlign="flexStart"
            // alignSelf="flexStart"
            mx="auto"
            p={10}
            padding="40px"
          >
           <div>
            <Typography variant="display1" style={{color: '#fff', padding: '1rem'}} >Marco</Typography>
            <Avatar alt="Marco Schai" src="/avatar/Marco.jpg" className={classes.avatar} />
            <Typography variant="subheading" style={{color: '#fff', padding: '1rem'}} >
                Marco absolvierte die Matura mit Schwerpunkt Ökonomie am Gymnasium Friedberg. Vor dem Studium arbeitete er für zwei grosse Schweizer Bankinstitute.  Danach studierte er Wirtschaftswissenschaften mit dem Schwerpunkt Banking and Finance. Anfang 2009 schloss er an der Universität Zürich mit den Master of Arts UZH und der Note "Magna cum Laude" ab. Seit 2009 ist er als privater Vollzeit-Trader tätig. Marco tradet vorwiegend mit Aktien aus dem Nebenwertebereich. Er lebt und arbeitet in Herisau (Schweiz), das im Appenzellerland, in der Nähe des Bodensees liegt. Als Ausgleich zur Börse liebt er alles, was mit Bewegung zu tun hat. Er fährt gerne Rennrad, trainiert im Fitnesscenter oder spielt Tennis und Squash.            </Typography>
            </div>
         
            <div>
            <Typography variant="display1" style={{color: '#fff', padding: '1rem'}} >Elko Ebert</Typography>
            <Avatar alt="Elko Ebert" src="/avatar/Elko-Ebert-Avatar.jpg" className={classes.avatar} />
            <Typography variant="subheading" style={{color: '#fff', padding: '1rem'}} >
              Elko beschäftigt sich seit seiner Jugend mit den Finanzmärkten. Diese Faszination hält seit 25 Jahren immer noch an. Nach seinem Abschluss als Diplom Wirtschaftsinformatiker hat er viele Jahr im Vertrieb für IT-Unternehmen gearbeitet. Seit 2015 ist er privater Vollzeittrader.
              Elko handelt in Aktien- und Rohstoffmärkten. Als häufigstes Handelsinstrument setzt er Optionen ein. Er lebt mit seiner Familie in Bad Honnef im Siebengebirge. Als sportlichen Ausgleich spielt er Fußball und fährt Snowboard.
            </Typography>      
            </div>

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
