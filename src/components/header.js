import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components";

const HeaderContainer = styled.header`
  padding: 20px ;
  display: flex;
  max-width: 1400px;
  justify-content: space-between;
  margin: 0 auto;
`;

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



const Header = ({ siteTitle }) => (
  <HeaderContainer>
    <Logo />
    <Links />
  </HeaderContainer>
);


Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header;
