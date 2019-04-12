import React, { useEffect } from "react";
import PageLayout from "../../components/layouts/pagelayouts/index";
import BackgroundImage from "../../components/background-image";
import styles from "../../styles/styles";
import Typography from "@material-ui/core/Typography";
import { graphql } from "gatsby";
/* Icons */
import MonthIcon from "@material-ui/icons/Explore";
import YearIcon from "@material-ui/icons/PowerSettingsNew";
/* styled */
import styled from "styled-components";
import { Link, StaticQuery } from "gatsby";
// rebass Flex
import { Flex } from "rebass";

const StyledLink = styled(Link)`
  font-size: 9;
  text-decoration: none;
  color: #ff8000;
`;

export default ({ classes = styles }) => {
  return (

    <PageLayout
      seoTitle="Abonnement"
      navigationView="Strategie > Abonnement"
      Background={Background}
      
    >
      <Typography
        className={classes.blocksatz}
        style={{ color: "#fff" }}
        variant="subtitle1"
      >
        <h3>
          Wie man systematisch & entspannt in Aktien investiert – StockBoost{" "}
        </h3>
        <br />
        <span>
          Ein Team aus erfahrenen Händlern schlägt die Brücke in die
          Wissenschaft!
          <br />
          Basierend auf akademischer Literatur haben wir ein Regelwerk
          zusammengestellt, das wir systematisch als Anlagestrategie in einem
          Echtgelddepot anwenden. Nimm teil und schaue uns über die Schultern,
          welche Aktien wir im eigenen Depot kaufen und verkaufen.
          <br />
          <br />
        </span>
        <h4>
          Teste uns risikofrei mit 14-tägigem Widerrufsrecht auf Herz und
          Nieren!
          <br />
          <br />
          <p>
            Sei von Anfang an dabei und sichere Dir dauerhaft unseren
            Einführungspreis von 250€<sup>*</sup>.
            <br />
            <sub>
              *Der Einführungspreis gilt nur bei einer Bestellung bis zum
              30.06.2019 und bei jährlicher Zahlung.
            </sub>
          </p>
        </h4>
      </Typography>

      <Flex
        //bg='magenta'
        width={[1]}
        flexDirection={["column", "column", "row"]}
        flexWrap="wrap"
        justifyContent="space-between"
        alignItems="center"
        mx="auto"
        pt={4}
        px={1}
      >
        <StyledLink to="/Abonnement/signupMonth">
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

        <StyledLink to="/Abonnement/signupYear">
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
      </Flex>
    </PageLayout>
  );
};

const Background = ({ children }) => {
  return (
    <StaticQuery
      query={graphql`
        query {
          desktop: file(relativePath: { eq: "wallpaper/tyler-reynolds.jpg" }) {
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
