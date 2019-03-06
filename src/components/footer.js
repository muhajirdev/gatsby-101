import React from "react";
import { Component } from "react";
/* Gatsby */
import { Link } from "gatsby";
import PropTypes from "prop-types";
/* styled */
import styled from "styled-components";
/* material-ui */
import { withStyles } from "@material-ui/core/styles";
import BottomNavigation from '@material-ui/core/BottomNavigation';
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
/* Icons */


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


const FooterContainer = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 60%;
  height: 300px;
  margin: auto;
  background: #353535;
`;

const DivFooterStyled = styled.div`
    /*
    1/3  - 3 columns per row
    10px - spacing between columns 
    */
    box-sizing: border-box;
    margin-bottom: 10px;
    width: calc(1/3*100% - (1 - 1/3)*10px);
    background: #353535;
    padding: 10px;
    color: #fff;
`;



class Footer extends Component {
  render() {
    return (

      <BottomNavigation>
        <FooterContainer> 
        
        <DivFooterStyled>
        <h5>Footer Text</h5>
        <h5>Footer Text</h5>
        <h5>Footer Text</h5>
        </DivFooterStyled>
      

        <DivFooterStyled>
        <h5>Footer Text</h5>
        <h5>Footer Text</h5>
        <h5>Footer Text</h5>
        </DivFooterStyled>

        <DivFooterStyled>
        <h5>Footer Text</h5>
        <h5>Footer Text</h5>
        <h5>Footer Text</h5>
        </DivFooterStyled>

        </FooterContainer>
    

      </BottomNavigation>
    );
  }
}

export default withStyles(styles)(Footer);
