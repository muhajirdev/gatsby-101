import React from "react";
import styles from "../../styles/styles";
import PageLayout from "../../components/layouts/pagelayouts/pagesAbo";
import { Box } from "rebass";

export default ({ classes = styles }) => (
  <PageLayout
    seoTitle="Monats-Abonnement"
    navigationView="Abonnement > Monats-Abonnement"
    // backgroundGraphqlSource={""}
  >
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
        width='100%'
        height='100%'
        title="Monatliches Abonnement"
        src='https://app.billwerk.com/portal/signup.html#/5ca3220e480202184c0181c0'
        frameBorder="0"
        allowFullScreen
      />
    </Box>
  </PageLayout>
);
