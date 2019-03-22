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

/* Icons */
import MenuIcon from "../icons/menuIcon";
import Dashboard from "@material-ui/icons/Dashboard";
import Circle from "@material-ui/icons/CheckCircleOutline";
import Done from "@material-ui/icons/DoneOutline";
import Share from "@material-ui/icons/Share";
import Send from "@material-ui/icons/Send";
import AttachFile from "@material-ui/icons/AttachFile";
import PlusOne from "@material-ui/icons/PlusOne";
import AttachMoney from "@material-ui/icons/AttachMoney";

const HeaderContainer = styled.header`
  display: flex;
  width: 100vw;
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
    boxShadow: "none",
    height: "5rem"
  },
  root: {
    flexGrow: 1,
    position: "fixed",
    width: "100vw",
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
  height: 100vh !important;
  width: 100vw !important;
  padding-left: 4rem;
  display: flex !important;
  align-items: center !important;
  // justify-content: center !important;
`;

const TextLogo = styled(Typography)`
  font-size: 1.5em !important;
  letter-spacing: 0.5px;
  font-family: "acumin-pro", sans-serif;
  font-weight: 700 !important;
  font-style: normal !important;
  font-weight: bold;
  padding: 0rem 0rem 0rem 0rem;
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

const menu = [
  {
    name: "Anlagekonzept",
    url: "/anlagekonzept",
    icon: <Dashboard />
  },
  {
    name: "Vorteile",
    url: "/vorteile",
    icon: <Circle />
  },
  // {
  //   name: "VorteileTable",
  //   url: "/vorteileTable",
  //   icon: <Done />
  // },
  {
    name: "Team",
    url: "/team",
    icon: <PlusOne />
  },
  {
    name: "Kundenbereich",
    url: "/",
    icon: <AttachFile />
  },
  {
    name: "Blog",
    url: "/",
    icon: <Share />
  },
  {
    name: "Newsletter",
    url: "/subscribe",
    icon: <Send />
  }
];

const SideList = props => {
  const { classes } = props;
  const textColor = props.textColor || "#fff";

  return (
    <div style={{ width: 250 }}>
      <List>
        {menu.map(link => (
          <StyledLink to={link.url} color={textColor}>
            <ListItem button key={link.name}>
              <ListItemIcon>{link.icon}</ListItemIcon>
              <ListItemText primary={link.name} />
            </ListItem>
          </StyledLink>
        ))}
      </List>
      <List>
        <div
          style={{
            display: "flex",
            justifyItems: "center",
            alignItems: "center"
          }}
        >
          <StyledLink to="/abonnement" color={textColor}>
            <ListItem button key={"kaufen"}>
              <ListItemIcon>
                <AttachMoney />
              </ListItemIcon>
              <ListItemText primary={"Kaufen"} />
            </ListItem>
          </StyledLink>
        </div>
      </List>
    </div>
  );
};

const Header = props => {
  const { classes } = props;

  // || => means "OR"
  // In this case, if props.backgroundColor is not specified.
  // It will be transparent
  const backgroundColor = props.backgroundColor || "transparent";
  const textColor = props.textColor || "#fff";

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
            style={{
              backgroundImage: "url(/brookly-bridge.jpg)",
              backgroundSize:"cover",
              minheight: "100vh"
            }}
          >
            <div
              style={{ backgroundColor: "rgba(0,0,0,0.6)", minHeight: "100vh" }}
              tabIndex={0}
              role="button"
              onClick={() => setDrawerOpen(false)}
              onKeyDown={() => setDrawerOpen(false)}
            >
              <SideList />
            </div>
          </div>
        </Drawer>
      </div>
      <AppBar
        position="relative"
        className={classes.header}
        style={{ background: backgroundColor }}
      >
        {/* <Toolbar style={{ alignItems: "center", alignSelf:"center" }}> */}
        <Toolbar>

          {/* <StyledLink to="/">
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
            >
              <SvgIcon>
                <MenuIcon />
              </SvgIcon>
            </IconButton>
          </StyledLink> */}
          <DivStyled>
            <StyledLink to="/">
            <TextLogo className={classes.logo}>BOOST</TextLogo>
            </StyledLink>
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
            {menu.map(link => (
              <div style={{ display: "flex", justifyItems: "center", alignSelf: "center" }}>
                <StyledLink to={link.url} color={textColor}>
                  <Button
                    style={{ fontFamily: "acumin-pro", fontWeight: 700 }}
                    color="inherit"
                  >
                    {link.name}
                  </Button>
                </StyledLink>
              </div>
            ))}

            <div style={{ display: "flex", justifyItems: "center", alignSelf: "center"  }}>
              <StyledLink to="/abonnement" color={textColor}>
                <Button
                  variant="outlined"
                  style={{
                    fontFamily: "acumin-pro",
                    borderRadius: 0,
                    fontWeight: 700
                  }}
                  color="inherit"
                >
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
