import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import Layout from "../layout";

import Header from "../../../components/header";

const BlogLayout = ({ children }) => (
  <Layout backgroundColor="white" textColor="black">
    <Header siteTitle={"test"} />
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `0px 1.0875rem 1.45rem`,
        paddingTop: 0
      }}
    >
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </div>
  </Layout>
);

BlogLayout.propTypes = {
  children: PropTypes.node.isRequired
};

export default BlogLayout;
