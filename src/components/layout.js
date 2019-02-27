import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import { createGlobalStyle } from "styled-components";

import Header from "./header"
import "./layout.css"


const theme = createMuiTheme({
  typography: {
    fontFamily: ["acumin-pro", "sans-serif"].join(","),
    fontWight: 700,
    fontStyle: "normal"
  }
});


const GlobalStyle = createGlobalStyle`
  html {
    font-family: 'acumin-pro', sans-serif !important; 
    font-weight: 700; 
    font-style: normal
  }
`;

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
         <MuiThemeProvider theme={theme}>
          <Header siteTitle={data.site.siteMetadata.title} />
          <GlobalStyle />
          <div>
            <main style={{ height: "100vh" }}>{children}</main>
            <footer>
              © {new Date().getFullYear()}, Built with
              {` `}
              <a href="https://www.gatsbyjs.org">Gatsby</a>
            </footer>
          </div>
        </MuiThemeProvider>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout;
