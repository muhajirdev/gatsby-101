import React from "react";
import { Flex } from "rebass";
import { StaticQuery, graphql } from "gatsby";
import { SignIn, SignOut, SignUp } from "../../components/signin";
import BackgroundImage from "../../components/background-image";
import PageLayout from "../../components/layouts/pagelayouts/index";

//
// Firebase

export default () => (
  <PageLayout
    Background={Background}
  >
    <Flex
      justifyContent="center"
      flexDirection="column"
      alignItems="center"
      pt="6"
    >
      <SignUp />
      <SignIn />
      <SignOut />
    </Flex>
  </PageLayout>
);

const Background = ({ children }) => {
  return (
    <StaticQuery
      query={graphql`
        query {
          desktop: file(relativePath: { eq: "wallpaper/daniel-genser.jpg" }) {
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
