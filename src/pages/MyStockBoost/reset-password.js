import React from "react";
import { Flex } from "rebass";
import { StaticQuery, graphql } from "gatsby";
import { ResetPassword } from "../../components/signin";
import BackgroundImage from "../../components/background-image";
import PageLayout from "../../components/layouts/pagelayouts/index";

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
      <ResetPassword />
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
