import React, { useEffect, useRef } from "react";
import { Link } from "gatsby";
import { TweenLite } from "gsap/all";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import Icon from "../components/icon";
import styled from "styled-components";

import { Flex } from "rebass";

const Text = () => {
  const ref = useRef(null);

  useEffect(() => {
    TweenLite.from(ref.current, 1, { x: "-50%", y: "-50%" });
  }, []);

  return (
    <>
      <style>{`
        .test {
            margin-top: 100px;
            margin-left: 100px;
        }
            `}</style>
      <h1
        variant="heading"
        ref={ref}
        style={{
          border: "0.2rem solid #fff",
          padding: "0.2rem",
          color: "#fff",
          maxWidth: "20em",
          opacity: 0.1
        }}
      >
        Systematische Regeln
      </h1>
      <Typography
        variant="heading"
        style={{ padding: "0.5rem", color: "#fff", maxWidth: "20em" }}
      />
      <Typography
        variant="heading"
        style={{
          border: "0.2rem solid #fff",
          padding: "0.2rem",
          color: "#fff",
          maxWidth: "20em"
        }}
      >
        Transparente Echtgeld Umsetzung
      </Typography>
      <Typography
        variant="heading"
        style={{ padding: "0.5rem", color: "#fff", maxWidth: "20em" }}
      />
      <Typography
        variant="heading"
        style={{
          border: "0.2rem solid #fff",
          padding: "0.2rem",
          color: "#fff",
          maxWidth: "20em"
        }}
      >
        Umsetzbar in wenigen Minuten pro Woche
      </Typography>
    </>
  );
};

const BigButton = styled.button`
  background-color: red;
  height: 50px;
  width: 500px;
  padding: 5px;
`;

function BlueBox(props) {
  return (
    <div style={{ backgroundColor: "blue", width: 50, height: 50 }}>
      <h1>{props.text}</h1>
    </div>
  );
}

const StyledLink = styled(Link)`
  font-size: 15;
  text-decoration: none;
  color: #ff8000;
`;

const Card = props => {
  const imageUrl = `url(https://cdn-images-1.medium.com/max/500//0*U1UDCKJqqm2KJT-2)`;
  console.log(imageUrl);
  return (
    <div>
      <div
        style={{
          height: props.big ? 300 : 150,
          backgroundPosition: "50% 50%",
          backgroundImage: imageUrl
        }}
      />
      <h4>{props.title}</h4>
      <h5 style={{ color: "grey" }}>by {props.author}</h5>
    </div>
  );
};

const posts = [
  {
    img:
      "https://cdn-images-1.medium.com/max/1490/1*lh5qywjj8llll-g_pona-q.jpeg",
    title: "Halo",
    author: "jamie"
  },
  {
    img:
      "https://cdn-images-1.medium.com/max/1490/1*lh5qywjj8llll-g_pona-q.jpeg",
    title: "abcdef",
    author: "jamie"
  },
  {
    img:
      "https://cdn-images-1.medium.com/max/1490/1*lh5qywjj8llll-g_pona-q.jpeg",
    title: "abcdef",
    author: "jamie"
  },
  {
    img:
      "https://cdn-images-1.medium.com/max/1490/1*lh5qywjj8llll-g_pona-q.jpeg",
    title: "abcdef",
    author: "jamie"
  },
  {
    img:
      "https://cdn-images-1.medium.com/max/1490/1*lh5qywjj8llll-g_pona-q.jpeg",
    title: "abcdef",
    author: "jamie"
  }
];

const IndexPage = () => (
  <Layout
    backgroundColor="linear-gradient(0deg, rgba(64, 51, 51, 0), rgba(31, 26, 26, 0.6))"
    textColor="white"
  >
    <SEO title="Boost" keywords={[`gatsby`, `application`, `react`]} />
    <div
      style={{
        minHeight: "100vh",
        minWidth: "100%",
        backgroundImage: "url(/brooklyn-bridge.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        position: "absolute",
        zIndex: 0
      }}
    />
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: "100%",
        background:
          "linear-gradient(0deg, rgba(44, 44, 44, 0.2), rgba(224, 23, 3, 0.6))",
        position: "absolute",
        textAlign: "center",
        zIndex: 0
      }}
    />
    <div
      style={{
        height: "100%",
        width: "100%",
        background: "rgba(0, 0, 0, 0.3)",
        position: "absolute",
        textAlign: "center",
        zIndex: 0
      }}
    />
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: "100%",
        position: "absolute",
        textAlign: "center",
        zIndex: 0
      }}
    >
      <Typography
        variant="display2"
        style={{ color: "#fff", maxWidth: "20em", paddingBottom: "1em" }}
      >
        Wie man systematisch & entspannt in Aktien investiert - Boost
      </Typography>

      <Typography variant="heading" style={{ color: "#fff", maxWidth: "20em" }}>
        Ein Team aus erfahrenen Händlern schlägt die Brücke in die Wissenschaft!
      </Typography>

      <Typography
        variant="heading"
        style={{ color: "#fff", maxWidth: "20em", paddingBottom: "1em" }}
      >
        Basierend auf akademischer Literatur haben wir ein Regelwerk
        zusammengestellt, das wir systematisch als Anlagestrategie in einem
        Echtgelddepot(!) anwenden. Sie wollen wissen, worauf genau wir uns
        beziehen? Kein Problem!
      </Typography>

      {/* <Typography variant="subheading"  style={{ color: "#fff", maxWidth: "40em" }}>
      Erfahrung und Wissenschaft: In StockBoost arbeitet ein Team aus jungen erfahrenen Händlern auf Grundlage neuester wissenschaftlicher Erkenntnisse. Basierend auf akademischer Literatur haben wir ein Regelwerk zusammengestellt, das wir systematisch als Anlagestrategie in einem Echtgelddepot bei Interactive Brokers Ltd. anwenden. 
      Sie wollen wissen, worauf genau wir uns beziehen? Kein Problem. Transparenz ist uns ganz wichtig, schließlich geht es um Ihr Vertrauen!  Alle genutzten Erkenntnisse inklusive Literaturverzeichnis finden Sie im Dokument „StockBoost Fakten und Hintergründe“. Gibt es neue Erkenntnisse, die unseren Ansatz nachhaltig beeinflussen, finden Sie alle Informationen dort!
      Eine kurze Beschreibung unseres Ansatzes finden Sie hier: 
      Wenn Sie weitere Fragen haben, stehen wir selbstverständlich gern zu Ihrer Verfügung.
      </Typography> */}

      <div>
        <Flex
          // bg={['red', 'blue']}
          width={["100%", "75%", "60%"]}
          style={{
            display: "flex",
            flexDirection: "row",
            // flexWrap: "no-wrap",
            // paddingTop: "1rem",
            justifyContent: "center;",
            alignItems: "center",
            marginLeft: "auto",
            marginRight: "auto"
          }}
        >
          <Text />
          <Typography
            variant="heading"
            style={{ padding: "0.5rem", color: "#fff", maxWidth: "20em" }}
          />
        </Flex>
      </div>

      <StyledLink to="/anlagekonzept">
        <Typography
          variant="display1"
          style={{
            color: "#FF8000",
            maxWidth: "20em",
            fontWeight: "bold",
            paddingTop: "1em"
          }}
        >
          Mehr erfahren
        </Typography>
      </StyledLink>

      <StyledLink to="/anlagekonzept">
        <Icon source={require("../icons/bulb.svg")} />
      </StyledLink>
    </div>
  </Layout>
);

export default IndexPage;
