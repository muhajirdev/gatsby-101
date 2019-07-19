import React from "react";
import PropTypes from "prop-types";
import SEO from "../../seo";
import Layout from "../layout";
import { withStyles } from "@material-ui/core/styles";
import styles from "../../../styles/styles";


const BlogLayout = ({ children, seoTitle }) => (
  <Layout backgroundColor="white" textColor="black">
    <SEO title={seoTitle} />
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `0px 1.0875rem 1.45rem`,
        paddingTop: 0
      }}
    >
      <main>{children}</main>
    </div>
  </Layout>
);

BlogLayout.propTypes = {
  children: PropTypes.node.isRequired
};

export default withStyles(styles)(BlogLayout);
