import { Link } from "gatsby";
import styled from "styled-components";
import { withStyles } from "@material-ui/core";

//const styles = (theme) => ({

export const StyledLink = styled(Link)`
  font-size: 15;
  text-decoration: none;
  color: #ff8000;
  z-index: 0;
`;

export default theme => ({
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
  nav: {
    color: "#fff",
    fontStyle: "normal",
    fontWeight: 700
  },
  blocksatz: {
    // fontFamily: "Roboto, Helvetica, Arial , sans-serif; !important",
    color: "red",
    fontColor: "fff",
    fontStyle: "normal",
    fontWeight: 700,
    paddingTop: "1rem"
  },
  latex: {
    // fontFamily: "Times New Roman, Noto Serif, serif !important",
    color: "#000",
    marginTop: "100px",
    marginBottom: "100px",
    marginRight: "20%",
    marginLeft: "20%",
    textAlign: "justify"
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
  iframes: {
    height: "100%",
    width: "100%",
    border: "10px solid #fff",
    boxShadow: "none",
    overflowY: "scroll",
    overflow: "-moz-scrollbars-none",
    msOverflowStyle: "none",
    scrollbarWidth: "none"
  }
});

// export default styles;
