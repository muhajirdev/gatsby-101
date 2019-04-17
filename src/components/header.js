import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import styles from "../styles/styles";
import styled from "styled-components";
import { Box, Flex, Text } from "rebass";
import { CssLogo } from "../styles/cssLogo";
import {
  menuEducation,
  menuStrategie,
  menuAboutUS,
  menuLogin,
  menuiOS
} from "./layouts/menu";

// import { SignIn, SignOut } from "./signin";

import { withStyles } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";

import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

/* Icons */
import MenuIcon from "../icons/menuIcon";
import AttachMoney from "@material-ui/icons/AttachMoney";
import KeyboardArrowDown from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUp from "@material-ui/icons/KeyboardArrowUp";

const StyledLink = styled(Link)`
  font-size: 4;
  text-decoration: none;
  color: ${props => props.color};
  &:hover {
    color: #ff8000;
  }
`;

const SideList = props => {
  // const { classes = styles } = props;
  const textColor = props.textColor || "#fff";

  return (
    <Flex
      flexDirection="column"
      justifyItems="flexstart"
      alignItems="flexstart"
      pt="4"
      css={{ width: 250 }}
    >
      <List>
        {menuiOS.map(item =>
          item.seperator ? (
            <Text fontSize={0} pl={2}>
              {item.name}
            </Text>
          ) : item.url ? (
            <StyledLink to={item.url} color={textColor}>
              <ListItem button key={item.name}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.name} />
              </ListItem>
            </StyledLink>
          ) : (
            <span color={textColor}>
              <ListItem button key={item.name}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.name} />
              </ListItem>
            </span>
          )
        )}
      </List>
      <List>
        <Box>
          <Text fontSize={0} pl={2}>
            Kauf
          </Text>
          <StyledLink to="/Strategie/abonnement" color={textColor}>
            <ListItem button key={"Abonnement"}>
              <ListItemIcon>
                <AttachMoney />
              </ListItemIcon>
              <ListItemText primary={"Abonnement"} />
            </ListItem>
          </StyledLink>
        </Box>
      </List>
    </Flex>
  );
};

const DropDown = ({ title, list, onClick, isOpen, colorTitle = "white" }) => {
  return (
    <div>
      <Flex alignItems="center" onClick={onClick}>
        <Box
          px="2"
          bg="transparent"
          style={{
            fontFamily: "acumin-pro",
            fontWeight: 700,
            cursor: "pointer"
          }}
          color={colorTitle}
        >
          {title}
        </Box>
        <KeyboardArrowDown style={{ color: "#fff" }} />
        {isOpen && (
          <Flex flexDirection={["column", "column", "column"]}>
            <KeyboardArrowUp style={{ color: "#000" }} />
          </Flex>
        )}
      </Flex>
      {isOpen && list && (
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
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    window.onscroll = () => {
      if (window.pageYOffset > 150) {
        setVisible(false);
      } else {
        setVisible(true);
      }
    };
  }, []);

  const { selectedDropdown, setSelectedDropdown, classes = styles } = props;

  // || => means "OR"
  // In this case, if props.backgroundColor is not specified.
  // It will be transparent
  const backgroundColor = props.backgroundColor || "transparent";
  const textColor = props.textColor || "#fff";

  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const dropdownVisible = selectedDropdown.length > 0;

  return (
    <div style={{ display: visible ? "block" : "none" }}>
      <Flex
        justifyContent="space-between"
        px={[3, 6]}
        pt="4"
        style={headerStyle}
        width={1}
        bg={dropdownVisible ? backgroundColor : "transparent"}
      >
        <StyledLink to="/">
          <CssLogo className={classes.logo}>StockBoost</CssLogo>
        </StyledLink>
        <Hidden mdDown>
          <DropDown
            title="Finanzbildung"
            isOpen={selectedDropdown === "Finanzbildung"}
            list={menuEducation}
            colorTitle={dropdownVisible ? "#FF8000" : textColor}
            onClick={() => setSelectedDropdown("Finanzbildung")}
          />

          <DropDown
            title="Strategie"
            list={menuStrategie}
            isOpen={selectedDropdown === "Strategie"}
            colorTitle={dropdownVisible ? "#FF8000" : textColor}
            onClick={() => setSelectedDropdown("Strategie")}
          />
          <DropDown
            title="Team"
            list={menuAboutUS}
            isOpen={selectedDropdown === "About Us"}
            colorTitle={dropdownVisible ? "#FF8000" : textColor}
            onClick={() => setSelectedDropdown("About Us")}
          />
          <Flex alignItems={dropdownVisible ? null : "center"}>
            <StyledLink to="/Strategie/abonnement">
              <AttachMoney
                style={{ color: dropdownVisible ? "#FF8000" : textColor }}
              />

            </StyledLink>
          </Flex>
          <DropDown
            title="My StockBoost"
            colorTitle={dropdownVisible ? "#FF8000" : textColor}
            isOpen={selectedDropdown === "My StockBoost"}
            list={menuLogin}
            onClick={() => setSelectedDropdown("My StockBoost")}
          />
        </Hidden>

        <Hidden lgUp>
          <Box
            bg="transparent"
            style={{ display: isDrawerOpen ? "none" : "block" }}
            onClick={() => setDrawerOpen(true)}
          >
            <MenuIcon />
          </Box>
        </Hidden>

        <Drawer
          anchor="right"
          open={isDrawerOpen}
          onClose={() => setDrawerOpen(false)}
        >
          <Flex
            style={{
              backgroundImage: "url()",
              backgroundSize: "cover",
              minheight: "100vh"
            }}
          >
            <Box
              css={{ backgroundColor: "rgba(0,0,0,0.8)", minHeight: "100vh" }}
              tabIndex={0}
              role="button"
              onClick={() => setDrawerOpen(false)}
              onKeyDown={() => setDrawerOpen(false)}
            >
              <SideList />
            </Box>
          </Flex>
        </Drawer>
      </Flex>
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
