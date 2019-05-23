import React, { useEffect } from "react";
import PageLayout from "../../components/layouts/pagelayouts/index";
import BackgroundImage from "../../components/background-image";
import styles from "../../styles/styles";
import { StaticQuery, graphql } from "gatsby";
import { Box, Text } from "rebass";
import Hidden from "@material-ui/core/Hidden";


const RedirectOnSmallScreen = () => {
  useEffect(() => {
    window.open(
      "https://app.billwerk.com/portal/signup.html#/5ca3220e480202184c0181c0",
      "_blank"
    );
  });
  return null;
};


export default ({ classes = styles }) => (
  <PageLayout
    seoTitle="Monats-Abonnement"
    navigationView="Abonnement > Monats-Abonnement"
    Background={Background}
  >
<Text  
  fontSize={[ 1, 1, 2 ]}
  fontWeight='normal'
  mx="auto"
  pb="2"
  > 
  Dieses Produkt beinhaltet eine kostenlose Testphase von 14 Tagen, d.h. der eigentliche zahlungspflichtige Vertrag beginnt bei einer Bestellung am heutigen Tag in 14 Tagen. 
  <br />
  Sie können Ihr Abonnement jederzeit während dieser Testphase kostenlos kündigen!
  <br/> 
  Da die Abrechnung immer zum nächsten Monatsbeginn durchgeführt wird, zahlen sie in diesem Monat das Abonnement nur anteilig.
  {/* Einzige Ausnahme, das Abonnement startet nach der 14-tägigen Testphase direkt am Monatsersten. */}
  <br/> 
  Der für diesen Monat verbleibende Gesamtbetrag wird angezeigt.
</Text>

    <Hidden lgUp>
      <RedirectOnSmallScreen />
    </Hidden>

    
    <Box
      //bg='magenta'
      width={[1, 1, 3 / 4]}
      height={[1, 1, 3 / 4]}
      mx="auto"
      css={{
        height: 0,
        paddingBottom: 1024 / 16 + "%",
        position: "relative",
        // iOS
        // WebkitOverflowScrolling: "touch",
        // overflowY: "scroll",
        // overflow: "auto",
        overflow: "hidden",
        "& > iframe": {
          position: "absolute",
          width: "100%",
          height: "100%",
          border: "15px solid #fff",
          top: 0,
          bottom: 0,
          left: 25
        }
      }}
    >


      <iframe
        id="iframe"
        title="Monatliches Abonnement"
        src="https://app.billwerk.com/portal/signup.html#/5ca3220e480202184c0181c0"
        frameBorder="0"
        allowFullScreen
      />
    </Box>
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
