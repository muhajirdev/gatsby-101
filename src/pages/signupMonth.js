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

// height: -webkit-fill-available;

const StyledIframe = styled.iframe`
  height: 100vh;
  width: 100%;
  overflow: -moz-scrollbars-none;
  overflow: -moz-scrollbars-none;
  border: none;
  &::-webkit-scrollbar {
    width: 0;
    background-color: transparent;
    display: none;
  }
`;

// 

const SEO_Title = "Abonnement";
const Navigation_View = "Abonnement";

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

<div 
              style={{
                minHeight: "80vh",
                minWidth: "60vw",
                border: "10px solid #fff",
                alignText: "left",
                // marginBottom: "1rem"
            }}>
              <StyledIframe src="https://sandbox.billwerk.com/portal/signup.html#/5c88c072443e550ea0751415?language=de&country=DE" />
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
