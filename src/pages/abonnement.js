import React from "react";
import { Link } from "gatsby";
import { Component } from "react";

/* SubscribeCSS */ 
import Layout from "../components/layout";

import SEO from "../components/seo";
import SubscribeForm from "../components/subscribeForm";
import Icon from "../components/icon";

/* styled */
import styled from "styled-components";

/* material-ui */
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import { Box } from "rebass";

/* Icons */ 
import MonthIcon from "@material-ui/icons/Explore";
import YearIcon from "@material-ui/icons/Power";




const StyledLink = styled(Link)`
  font-size: 9;
  text-decoration: none;
  color: #ff8000;
`;


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
    textDecoration: "none",
  },
  logo: {
    fontWeight: 700
  },
  largeIcon: {
    width: "60",
    height: "60",
  }
});

class Abonnement extends Component {
  render() {
    const { classes } = this.props;
    const dt = new Date();
    const year = dt.getFullYear();
    return (
  <Layout type="home">
    <SEO title="Boost" keywords={[`gatsby`, `application`, `react`]} />
    <div
      style={{
        height: "100%",
        width: "100%",
        background: "rgba(0, 0, 0, 0.3)",
        position: "absolute",
        zIndex: 0
      }}
    />
    <div
      style={{
        height: "100%",
        width: "100%",
        backgroundImage: "url(/pricing.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        position: "absolute",
        zIndex: 0
      }}
    />
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: "100%",
        background:
          "linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.6))",
        position: "absolute",
        textAlign: "center",
        zIndex: 0
      }}
    >
      <Box
          className={classes.textContainer}
          // bg={['red', 'blue']}
          width={["100%", '75%', '60%']}
          style={{
            height: "40%",
            display: "flex",
            flexDirection: "column",
            flexWrap: "nowrap",
            justifyContent: "flexStart",
            alignItems: "left",
            alignText: "left",
            marginLeft: "auto",
            marginRight: "auto",
            color: "#fff",
          }}
        >
        
        <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center",
        height: "40%",
        width: "40%",
        background:
          "linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.6))",
        position: "absolute",
        textAlign: "center",
        marginRight: "auto",
        marginLeft: "auto",
        color: "#fff",
        zIndex: 0
      }}
    >
          <div className={classes.link, classes.largeIcon} style={{color: "#FF8000"}}>
          <a href="/signupMonth" > 
          <MonthIcon />
          <Typography variant="display1">Monatliche Zahlungsweise</Typography>
          <Typography variant="heading">/Monat</Typography>
          </a>
          </div>  
     
          <div>
          <a href="/signupYear" > 
          <YearIcon style={{color: "#FF8000", height:"10%"}}/>
          <Typography variant="display1">Jährliche Zahlungsweise</Typography>
          <Typography variant="heading">/Jahr</Typography>
          </a>
          </div>           
    </div>

        </Box>
  
        
      

    </div>
  </Layout>
// class Subscribe extends Component {
//   render() {
//     const { classes } = this.props;
//     return (
//       <Layout>
//         <SEO title="Newsletter" />
//         <div
//           style={{
//             height: "100vh",
//             backgroundSize: "cover"
//           }}
//         >
//         <div>

//         </div>
//           <div
//             style={{
//               height: "100%",
//               justifyContent: "center",
//               alignItems: "center",
//               flexDirection: "column",
//               display: "flex",
//               maxWidth: "50%",
//               marginLeft: "auto",
//               marginRight: "auto"
//             }}
//             classesName={classes.container}
//           >
//           </div>
//         </div>
//       </Layout>
//     );
//   }
// }
);
}
}

export default withStyles(styles)(Abonnement);

