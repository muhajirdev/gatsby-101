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

const StyledLink = styled(Link)`
  font-size: 9;
  text-decoration: none;
  color: #ff8000;
`;

const styles = {
  heading: {
    color: "#fff"
  },
  copyright: {
    color: "#fff",
    textAlign: "center"
  },
  link: {
    color: "#FF8000",
    textDecoration: "none"
  },
  container: {
    display: "flex",
    flexFlow: "column wrap",
    marginTop: "auto",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "auto",
    background: "#353535"
  },
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },

  logo: {
    fontWeight: 700
  }
};

const Subscribe = () => (
  <Layout type="home">
    <SEO title="Boost" keywords={[`gatsby`, `application`, `react`]} />
    <div
      style={{
        height: "100%",
        width: "100%",
        background: "rgba(0, 0, 0, 0.3)",
        position: "absolute",
        zIndex: 100
      }}
    />
    <div
      style={{
        height: "100%",
        width: "100%",
        backgroundImage: "url(/daniela-cuevas.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        position: "absolute",
        zIndex: 100
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
          "linear-gradient(0deg, rgba(44, 44, 44, 0.2), rgba(224, 23, 3, 0.6))",
        position: "absolute",
        textAlign: "center",
        zIndex: 100
      }}
    >
      <div
        style={{
          maxWidth: "40%",
          marginLeft: "auto",
          marginRight: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column"
        }}
      >
        <Typography
          variant="display2"
          style={{ color: "#fff", maxWidth: "20em" }}
        >
          Wie man systematisch & entspannt in Aktien investiert - Boost
        </Typography>
        <Typography variant="subheading" style={{ color: "#FF8000" }}>
          Wir möchten, dass Sie als Erster Neuigkeiten, besondere Angebote und
          Einladungen erhalten. Füllen Sie zur Registrierung das Formular aus.
        </Typography>
        <div style={{ width: "60%", marginTop: '2rem' }}>
          <SubscribeForm />
        </div>
      </div>
    </div>
  </Layout>
);
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
export default withStyles(styles)(Subscribe);
