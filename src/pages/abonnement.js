import React from "react";
import PageLayout from "../layouts/pagesAbo";
import Typography from "@material-ui/core/Typography";
import styles from "../styles";

/* Icons */
import MonthIcon from "@material-ui/icons/Explore";
import YearIcon from "@material-ui/icons/PowerSettingsNew";

/* styled */
import styled from "styled-components";
import { Link } from "gatsby";

// rebass Flex
import { Box } from "rebass";

const StyledLink = styled(Link)`
  font-size: 9;
  text-decoration: none;
  color: #ff8000;
`;

export default ({ classes = styles }) => (
  <PageLayout
    seoTitle="Abonnement"
    navigationView="Strategie > Abonnement"
    // backgroundGraphqlSource={""}
  >
    <Typography
      className={classes.blocksatz}
      style={{ color: "#fff" }}
      variant="subtitle1"
    >
      <h3>Wie man systematisch & entspannt in Aktien investiert – StockBoost </h3>
      <br /> 
      <span>
      Ein
      Team aus erfahrenen Händlern schlägt die Brücke in die Wissenschaft!
      <br/>
      Basierend auf akademischer Literatur haben wir ein Regelwerk
      zusammengestellt, das wir systematisch als Anlagestrategie in einem
      Echtgelddepot anwenden. Nimm teil und schaue uns über die Schultern,
      welche Aktien wir im eigenen Depot kaufen und verkaufen. 
      <br />
      <br />
      </span>
      <h4>
      Teste uns risikofrei mit 14-tägigem Widerrufsrecht auf Herz und Nieren!
      <br />
      <br />
      <p>
      Sei von Anfang an dabei und sichere Dir dauerhaft unseren Einführungspreis von 250€<sup>*</sup>.
      <br />
      <sub>*Der Einführungspreis gilt nur bei einer Bestellung bis zum
      30.06.2019 und bei jährlicher Zahlung.</sub>
      </p>
      </h4>
      <Box
        flexDirection={["row", "row", "column"]}
        // bg="magenta"
        alignItems="center"
        textAlign="center"
        alignSelf="center"
        mx="auto"
        fontSize={4}
        pt="1rem"
        justifyContent="space-between"
        pt="4"

        width={1}

      >
        <Box width={[0.3]} flexDirection={["row", "row", "column"]}>
          <StyledLink to="/signupMonth">
            <MonthIcon />
            <Typography
              className={classes.blocksatz}
              style={{ color: "#fff" }}
              variant="display1"
            >
              Monatliche Zahlungsweise
            </Typography>
            <Typography
              className={classes.blocksatz}
              style={{ color: "#fff" }}
              variant="subtitle1"
            >
              25<small>€</small> / 30<small>CHF</small>
              <br />
              Monat
            </Typography>
          </StyledLink>
        </Box>
        <Box width={[0.3]} flexDirection={["row", "row", "column"]}>
          <StyledLink to="/signupYear">
            <YearIcon />
            <Typography
              className={classes.blocksatz}
              style={{ color: "#fff" }}
              variant="display1"
            >
              Jährliche Zahlungsweise
            </Typography>
            <Typography
              className={classes.blocksatz}
              style={{ color: "#fff" }}
              variant="subtitle1"
            >
              250<small>€</small> / 300<small>CHF</small> <br />
              Jahr
            </Typography>
          </StyledLink>
        </Box>
      </Box>
    </Typography>
  </PageLayout>
);
