import React from "react";
import { Flex } from "rebass";
import { Link } from "gatsby";
import { StaticQuery, graphql } from "gatsby";
import { SignIn, SignOut, SignUp } from "../../components/signin";
import BackgroundImage from "../../components/background-image";
import PageLayout from "../../components/layouts/pagelayouts/index";
import { StyledLink } from "../../styles/styles";

  // sendpasswordReset = e => {
  //   firebase
  //     .auth()
  //     .sendPasswordResetEmail(email)
  //     .then(() => {
  //       alert("test alert succeed reset");
  //     })
  //     .catch(() => {
  //       alert("not succeed reset");
  //     });
  // };
export default () => (
  <PageLayout Background={Background}>
    <Flex
      justifyContent="center"
      flexDirection="column"
      alignItems="center"
      pt="6"
    >
      <SignIn />
      <StyledLink to="/MyStockBoost/signup">Signup</StyledLink>
      <StyledLink to="/MyStockBoost/reset-password">Reset Password</StyledLink>
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