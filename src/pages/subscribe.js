import React from "react";
import { Link } from "gatsby";
import { Component } from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import SubscribeForm from "../components/subscribeForm";

/* styled */
import styled from "styled-components";

/* material-ui */
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";


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
    background: "#353535",
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

class Subscribe extends Component {
  render() {
    const { classes } = this.props;
    return (
  <Layout>
    <SEO title="Newsletter" />
    <div>

   
    <div classesName={classes.container}>  
        <SubscribeForm />
    </div>
    </div>
  </Layout>
    );
  }
}
export default withStyles(styles)(Subscribe);