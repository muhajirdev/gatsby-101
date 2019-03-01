import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components";

import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
/* import MenuIcon from "@material-ui/icons/Menu"; */
import SvgIcon from "@material-ui/core/SvgIcon";
/* Icons */
import MenuIcon from "../icons/menuIcon";
import CuboIcon from "../icons/cuboIcon";



const HeaderContainer = styled.header`
  padding: 20px;
  display: flex;
  max-width: 1400px;
  justify-content: space-between;
  margin: 0 auto;
  backgroundColor: theme.palette.primary.main; 
  color: #fff
`;

const StyledLink = styled(Link)`
  font-size: 4;
  text-decoration: none; 
  color: #fff;
`

const styles = {
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


const DivStyled = styled.div`
  height: 100% !important;
  width: 100% !important;
  display: flex !important;
  align-items: center !important;
`;

const TextLogo = styled(Typography)`
  font-size: 1.5em !important;
  letter-spacing: 0.5px;
  font-family: "acumin-pro", sans-serif;
  font-weight: 700 !important;
  font-style: normal !important;
  font-weight: bold;
  /* background: linear-gradient(to bottom, #c0c0c0 22%, #404040 24%, #666666 26%, #666666 27%,#e6e6e6 40%,#333333 78%) !important;  */
  background-image: -webkit-repeating-linear-gradient(
      top,
      hsla(0, 0%, 100%, 0) 0%,
      hsla(0, 0%, 100%, 0) 3%,
      hsla(0, 0%, 100%, 0.1) 4.5%
    ),
    -webkit-repeating-linear-gradient(top, hsla(0, 0%, 0%, 0) 0%, hsla(
            0,
            0%,
            0%,
            0
          )
          2%, hsla(0, 0%, 0%, 0.03) 2.5%),
    -webkit-repeating-linear-gradient(top, hsla(0, 0%, 100%, 0) 0%, hsla(
            0,
            0%,
            100%,
            0
          )
          0.6%, hsla(0, 0%, 100%, 0.15) 1.2%),
    linear-gradient(
      80deg,
      #a6a6a6 0%,
      #d9d9d9 45%,
      #e0e0e0 55%,
      #e0e0e0 65%,
      #d9d9d9 75%,
      #a6a6a6 100%
    ) !important;
  -webkit-background-clip: text !important;
  -webkit-text-fill-color: transparent !important;
  color: #fff !important;
  /* font-family: 'Playfair Display', serif !important; */
  position: relative !important;
  text-transform: uppercase !important;
  /* font-size: 8vw !important; */
  margin: 0 !important;
  &after {
    background: none;
    content: attr(data-heading);
    left: 0;
    /* top: 0; */
    z-index: -1;
    position: absolute;
    /* text-shadow: 
    1px  0px 0px #333333 , 
    0px  1px 0px #333333 ,
    0px  -1px 0px #333333 ,
    -1px  0px 0px #333333 ; */
  }
`;


const Header = props => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
          >
            <SvgIcon>
              <MenuIcon />
            </SvgIcon>
          </IconButton>
          <DivStyled>
            <TextLogo className={classes.logo}>BOOST</TextLogo>
          </DivStyled>
          <div style={{ display: "flex", justifyItems: "center" }}>
            <SvgIcon>
              <CuboIcon />
            </SvgIcon>
            <StyledLink to="/page-2">
              <Button style={{ fontFamily: "acumin-pro" }} color="inherit">
              Angebot
              </Button>
            </StyledLink>
          </div>
          <div style={{ display: "flex", justifyItems: "center" }}>
            <SvgIcon>
              <CuboIcon />
            </SvgIcon>
            <StyledLink to="/page-2">
              <Button style={{ fontFamily: "acumin-pro" }} color="inherit">
              Sections
              </Button>
            </StyledLink>
          </div>
          <div style={{ display: "flex", justifyItems: "center" }}>
            <SvgIcon>
              <CuboIcon />
            </SvgIcon>
            <StyledLink to="/page-2">
              <Button style={{ fontFamily: "acumin-pro" }} color="inherit">
              Anlagekonzept
              </Button>
            </StyledLink>
          </div>
          <div style={{ display: "flex", justifyItems: "center" }}>
            <SvgIcon>
              <CuboIcon />
            </SvgIcon>
            <StyledLink to="/page-2">
              <Button style={{ fontFamily: "acumin-pro" }} color="inherit">
              Kosten
              </Button>
            </StyledLink>
          </div>
          <div style={{ display: "flex", justifyItems: "center" }}>
            <SvgIcon>
              <CuboIcon />
            </SvgIcon>
            <StyledLink to="/page-2">
              <Button style={{ fontFamily: "acumin-pro" }} color="inherit">
              Sicherheit
              </Button>
            </StyledLink>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", flexGrow: "1", justifyItems: "center" }}>
            <SvgIcon>
              <CuboIcon />
            </SvgIcon>
            <StyledLink to="/page-2">
              <Button style={{ fontFamily: "acumin-pro" }} color="inherit">
              Unternehmen
              </Button>
            </StyledLink>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", flexGrow: "1", justifyItems: "center" }}>
            <SvgIcon>
              <CuboIcon />
            </SvgIcon>
            <StyledLink to="/page-2">
              <Button style={{ fontFamily: "acumin-pro" }} color="inherit">
              Newsletter
              </Button>
            </StyledLink>
          </div>
          <div style={{ display: "flex",   flexWrap: "wrap", flexGrow: "2", justifyItems: "center", fontSize: 10 }}>
              © {new Date().getFullYear()}, Built with love
                {` `}
                <a href="https://www.XXX">XXX</a>
          </div>
        </Toolbar>
      </AppBar>
    </div>
    
  );
};

const Logo = () => (
  <div style={{ display: "flex" }}>
    <div>
      <img
        style={{ width: 50, marginBottom: 0 }}
        src="https://seeklogo.com/images/A/airbnb-logo-1D03C48906-seeklogo.com.png"
      />
    </div>
    <div style={{ display: "flex", alignItems: "center" }}>
      <h1 style={{ marginBottom: 0, marginLeft: 20, fontSize: 25 }}>
        Airbnb.io
      </h1>
    </div>
  </div>
);

const listOfItems = ["Careers", "Events", "I dunno"];

const Links = () => (
  <div style={{ display: "flex", alignItems: "center" }}>
    {listOfItems.map(item => (
      <a href="#" style={{ marginLeft: 10 }}>
        {item}
      </a>
    ))}
  </div>
);


Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
}

export default withStyles(styles)(Header);
