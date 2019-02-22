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
import MenuIcon from "@material-ui/icons/Menu";



const HeaderContainer = styled.header`
  padding: 20px ;
  display: flex;
  max-width: 1400px;
  justify-content: space-between;
  margin: 0 auto;
`;

const StyledLink = styled(Link)`
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
  }
};

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
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            News
          </Typography>
          <StyledLink to="/page-2" >
            <Button color="inherit">Login</Button>
          </StyledLink>
          <Button color="inherit">Login</Button>
          <Button color="inherit">Login</Button>
          <Button color="inherit">Login</Button>
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
