import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { useState } from "react";
import styled from "styled-components";

import { withStyles } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
/* import MenuIcon from "@material-ui/icons/Menu"; */
import SvgIcon from "@material-ui/core/SvgIcon";
import Drawer from "@material-ui/core/Drawer";

import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Input";

/* Icons */
import MenuIcon from "../icons/menuIcon";
import CuboIcon from "../icons/cuboIcon";

const HeaderContainer = styled.header`
  padding: 20px;
  display: flex;
  max-width: 1400px;
  justify-content: space-between;
  margin: 0 auto;
  backgroundcolor: ${props => props.theme.palette.primary.main};
  color: #fff;
`;

const StyledLink = styled(Link)`
  font-size: 4;
  text-decoration: none;
  color: ${props => props.color};
`;

const styles = {
  header: {
    backgroundColor: "transparent",
    boxShadow: "none"
  },
  root: {
    flexGrow: 1,
    position: "fixed",
    width: "100%",
    zIndex: 200,
    top: 0
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

const SideList = () => {
  const links = [
    {
      text: "a",
      icon: <InboxIcon />
    },
    {
      text: "b",
      icon: <MailIcon/>
    }
  ];
  return (
    <div style={{ width: 250 }}>
      <List>
        {links.map(link => (
          <ListItem button key={link.text}>
            <ListItemIcon>{link.icon}</ListItemIcon>
            <ListItemText primary={link.text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

const Header = props => {
  const { classes } = props;
  const isHome = props.type === "home";
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  return (
    <div className={classes.root}>
      <div>
        <Drawer
          anchor="right"
          open={isDrawerOpen}
          onClose={() => setDrawerOpen(false)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={() => setDrawerOpen(false)}
            onKeyDown={() => setDrawerOpen(false)}
          >
            <SideList />
          </div>
        </Drawer>
      </div>
      <AppBar position="static" className={classes.header}>
        <Toolbar>
          <StyledLink to="/">
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
            >
              <SvgIcon>
                <MenuIcon />
              </SvgIcon>
            </IconButton>
          </StyledLink>
          <DivStyled>
            <TextLogo className={classes.logo}>BOOST</TextLogo>
          </DivStyled>
          <Hidden lgUp>
            <div onClick={() => setDrawerOpen(true)}>
              <IconButton
                className={classes.menuButton}
                color="inherit"
                aria-label="Menu"
              >
                <SvgIcon>
                  <MenuIcon />
                </SvgIcon>
              </IconButton>
            </div>
          </Hidden>
          <Hidden mdDown>
            <div style={{ display: "flex", justifyItems: "center" }}>
              <SvgIcon>
                <CuboIcon />
              </SvgIcon>
              <StyledLink to="/page-2" color={isHome ? "#fff" : "#000"}>
                <Button style={{ fontFamily: "acumin-pro" }} color="inherit">
                  Anlagekonzept
                </Button>
              </StyledLink>
            </div>
            <div style={{ display: "flex", justifyItems: "center" }}>
              <SvgIcon>
                <CuboIcon />
              </SvgIcon>
              <StyledLink to="/vorteile" color={isHome ? "#fff" : "#000"}>
                <Button style={{ fontFamily: "acumin-pro" }} color="inherit">
                  Vorteile
                </Button>
              </StyledLink>
            </div>
            <div style={{ display: "flex", justifyItems: "center" }}>
              <SvgIcon>
                <CuboIcon />
              </SvgIcon>
              <StyledLink to="/page-2" color={isHome ? "#fff" : "#000"}>
                <Button style={{ fontFamily: "acumin-pro" }} color="inherit">
                  Team
                </Button>
              </StyledLink>
            </div>
            <div style={{ display: "flex", justifyItems: "center" }}>
              <SvgIcon>
                <CuboIcon />
              </SvgIcon>
              <StyledLink to="/page-2" color={isHome ? "#fff" : "#000"}>
                <Button style={{ fontFamily: "acumin-pro" }} color="inherit">
                  Kundenbereich
                </Button>
              </StyledLink>
            </div>
            <div style={{ display: "flex", justifyItems: "center" }}>
              <SvgIcon>
                <CuboIcon />
              </SvgIcon>
              <StyledLink to="/page-2" color={isHome ? "#fff" : "#000"}>
                <Button style={{ fontFamily: "acumin-pro" }} color="inherit">
                  BLOG
                </Button>
              </StyledLink>
            </div>
            <div style={{ display: "flex", justifyItems: "center" }}>
              <SvgIcon>
                <CuboIcon />
              </SvgIcon>
              <StyledLink to="/subscribe" color={isHome ? "#fff" : "#000"}>
                <Button style={{ fontFamily: "acumin-pro" }} color="inherit">
                  Newsletter
                </Button>
              </StyledLink>
            </div>
            <div style={{ display: "flex", justifyItems: "center" }}>
              <SvgIcon>
                <CuboIcon />
              </SvgIcon>
              <StyledLink to="/subscribe" color={isHome ? "#fff" : "#000"}>
                <Button style={{ fontFamily: "acumin-pro" }} color="inherit">
                  Kaufen
                </Button>
              </StyledLink>
            </div>
          </Hidden>
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
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default withStyles(styles)(Header);
