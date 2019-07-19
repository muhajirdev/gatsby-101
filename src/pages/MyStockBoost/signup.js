import React from "react";
import { Flex } from "rebass";
import { StaticQuery, graphql } from "gatsby";
import BackgroundImage from "../../components/background-image";
import PageLayout from "../../components/layouts/pagelayouts/index";
import { SignUp } from "../../components/signin";
//
// Firebase

export default () => (
  <PageLayout Background={Background}>
    <Flex
      justifyContent="center"
      flexDirection="column"
      alignItems="center"
      pt="6"
    >
      <SignUp />
    </Flex>
  </PageLayout>
);

const Background = ({ children }) => {
  return (
    <StaticQuery
      query={graphql`
        query {
          desktop: file(relativePath: { eq: "wallpaper/danielGenser.jpg" }) {
            childImageSharp {
              fluid(quality: 100, maxWidth: 4160) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      `}
      render={data => <BackgroundImage data={data}>{children}</BackgroundImage>}
    />
  );
};
