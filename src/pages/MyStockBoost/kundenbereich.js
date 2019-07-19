import React, { useContext } from "react";
import { Flex, Box } from "rebass";
import { StaticQuery, graphql } from "gatsby";
import { navigate } from "@reach/router";
import { SignIn} from "../../components/signin";
import BackgroundImage from "../../components/background-image";
import PageLayout from "../../components/layouts/pagelayouts/index";
import { StyledLink } from "../../styles/styles";
/* material-ui */
import Typography from "@material-ui/core/Typography";
/* Mailto */
import Mailto from "react-protected-mailto";

/* Contexts */
import { AuthContext } from "../../layouts/index";

export default () => {
  const authenticated = useContext(AuthContext);

  if (authenticated) {
    navigate("/MyStockBoost/overview");
    return null;
  }

  return (
    <PageLayout
      Background={Background}
      seoTitle="Kundenbereich"
      navigationView="ANMELDUNG"
    >
      <Flex
        justifyContent="center"
        flexDirection="column"
        alignItems="center"
        pt="6"
      >
        <Box>
          <SignIn />
        </Box>
        <Box pt="1rem" px="1rem">
          <StyledLink to="/Strategie/abonnement">
            Noch kein Abonnement? Let's do it!
          </StyledLink>
        </Box>
        <Box pt="0.5rem" px="1rem">
          <StyledLink to="/MyStockBoost/reset-password">
            Passwort vergessen?
          </StyledLink>
        </Box>
      </Flex>
      <div>
        <Flex mx="auto" justifyContent="center">
          <Typography variant="heading">
            need help?&nbsp;
            <Mailto
              obfuscate={false}
              style={{ color: "#FF8000", textDecoration: "none" }}
              email="info@stockboost.de"
              headers={{
                subject: "Kundenbereich / Kunde ist König",
                body: "Sehr geehrtes StockBoost Team, "
              }}
            />
          </Typography>

          {/* </Flex> */}
        </Flex>
      </div>
    </PageLayout>
  );
};
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
