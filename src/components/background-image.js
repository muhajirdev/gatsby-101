import React from "react";
import BackgroundImage from "gatsby-background-image";
import styled from "styled-components";

const StyledBackgroundImage = styled(BackgroundImage)`
  background-attachment: fixed;
`;

export default ({ data, children }) => {
  const imageData = data.desktop.childImageSharp.fluid;
  return (
    <StyledBackgroundImage
      Tag="section"
      fluid={imageData}
      backgroundColor={`linear-gradient(0deg, rgba(64, 51, 51, 0), rgba(31, 26, 26, 0.6))`}
      objectFit="cover"
      backgroundAttachment="fixed"
      style={{ zIndex: "0", backgroundAttachment: "fixed" }}
    >
      {children}
    </StyledBackgroundImage>
  );
};
