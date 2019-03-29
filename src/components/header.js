import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { useState } from "react";
import styled from "styled-components";
import { Box, Flex, Button } from "rebass";
// css-metallic / menu
import {cssLogo} from "./cssLogo";
import {menuEducation,menuStrategie,menuAboutUS,menuLogin,menuiOS} from "./menu";

// import { SignIn, SignOut } from "./signin";

import { withStyles } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

// import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu"; 
import SvgIcon from "@material-ui/core/SvgIcon";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

/* Icons */
// import MenuIcon from "../icons/menuIcon";
import AttachMoney from "@material-ui/icons/AttachMoney";
import KeyboardArrowDown from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUp from "@material-ui/icons/KeyboardArrowUp";
import Search from "@material-ui/icons/Search";




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

const StyledLink = styled(Link)`
  font-size: 4;
  text-decoration: none;
  color: ${props => props.color};
  &:hover {
    color: #FF8000;
  }
`;

const SideList = props => {
  const { classes } = props;
  const textColor = props.textColor || "#fff";

  return (
    <div style={{ width: 250 }}>
      <List>
        {menuiOS.map(link => (
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

const DropDown = ({ title, list, onClick, colorTitle = "white" }) => {
  const [isVisible, setVisible] = useState(false);
  return (
    <div
      onClick={() => {
        setVisible(!isVisible);
        onClick();
      }}
    >
      <Flex alignItems="center" onClick={() => setVisible(!isVisible)}>
        <Button
          px="2"
          bg="transparent"
          style={{ fontFamily: "acumin-pro", fontWeight: 700 }}
          color={colorTitle}
        >
          {title}
        </Button>
        <KeyboardArrowDown style={{ color: "#fff" }} />
        { isVisible && ( 
          <Flex flexDirection={["column", "column", "column"]}>
          <KeyboardArrowUp style={{ color: "#000" }} />
          </Flex>
        )}
      </Flex>
      { isVisible && list && (   
         <Box px="2">
          {list.map(item => (
            <Box>
              <StyledLink to={item.url} color="black">
                {item.name}
            </StyledLink>
            </Box>
          ))}
        </Box>
      )}
    </div>
  );
};

const headerStyle = { position: "fixed", zIndex: 400 };

const Header = props => {
  const { classes } = props;

  // || => means "OR"
  // In this case, if props.backgroundColor is not specified.
  // It will be transparent
  const backgroundColor = props.backgroundColor || "transparent";
  const textColor = props.textColor || "#fff";

  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [dropdownVisible, setDropdownVisivle] = useState(false);
  return (
 
    <Flex
      justifyContent="space-around"
      px="5"
      pt="4"
      style={headerStyle}
      width={1}
      bg={dropdownVisible ? "white" : "transparent"}
    >
      <StyledLink to="/">
        <cssLogo className={classes.logo}>BOOST</cssLogo>
      </StyledLink>
      <DropDown
        title="Finanzbildung"
        list={menuEducation}
        colorTitle={dropdownVisible ? "#FF8000" : "white"}
        onClick={() => setDropdownVisivle(!dropdownVisible)}
      />       

      <DropDown
        title="Strategie"
        list={menuStrategie}
        colorTitle={dropdownVisible ? "#FF8000" : "white"}
        onClick={() => setDropdownVisivle(!dropdownVisible)}
      />
      <DropDown
        title="About Us"
        list={menuAboutUS}
        colorTitle={dropdownVisible ? "#FF8000" : "white"}
        onClick={() => setDropdownVisivle(!dropdownVisible)}
      />
      <Flex alignItems="center">
          <StyledLink to="/abonnement" > 
              <AttachMoney style={{ color: "white" }} />
          </StyledLink>
      </Flex>
      <DropDown
        title="My Boost"
        colorTitle={dropdownVisible ? "#FF8000" : "white"}
        list={menuLogin}
        onClick={() => setDropdownVisivle(!dropdownVisible)}
      />
    </Flex>
    
  );
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
              backgroundSize: "cover",
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
              <cssLogo className={classes.logo}>BOOST</cssLogo>
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
            <DropDown />
            {menuiOS.map(link => (
              <div
                style={{
                  display: "flex",
                  justifyItems: "center",
                  alignSelf: "center"
                }}
              >
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

            <div
              style={{
                display: "flex",
                justifyItems: "center",
                alignSelf: "center"
              }}
            >
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

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default withStyles(styles)(Header);
