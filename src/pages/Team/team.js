import React from "react";
import PageLayout from "../../components/layouts/pagelayouts/index";
import BackgroundImage from "../../components/background-image";
import styles from "../../styles/styles";
import Typography from "@material-ui/core/Typography";
import { StaticQuery, graphql } from "gatsby";
import { Box, Flex, Image } from "rebass";



const Content = ({ classes = styles, data }) => {
  return (
    <PageLayout 
      seoTitle="Team" 
      navigationView="Team > Das StockBoost Team"
      Background={Background}

      >

      <div>
        <Flex flexDirection={["column", "row", "row"]}
              alignItems="flexStart" 
              p={1}
              pt="1rem"
              mx="auto">
          <Box
            width={[0.3]}
            // width="6vw"
            // height="6vw"
            // borderRadius="100%"
            // justify-content="center"
            // align-items="center"
          >
            <Image
              css={{
                objectFit: "cover",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                width: "10vw",
                height: "10vw",
                backgroundColor: "RGBA(252, 102, 32, 1)",
                borderRadius: "100%"
              }}
              borderRadius="100%"
              alt="Rami I. Altonji "
              src="/avatar/Rami-Altonji-Avatar.jpg"
            />
          </Box>

          <Typography variant="h4" style={{ color: "#fff", padding: "1rem" }}>
            Rami I. Altonji
          </Typography>

          <Box width={[0.8]}>
            <Typography
              variant="body1"
              style={{ color: "#fff", padding: "1rem" }}
            >
              Rami Altonji studierte Volkswirtschaftslehre an der Universität Bonn. Bereits seit Anfang des Studium handelt Herr Altonji aktiv an der Börse. 2013 schloss er sein Studium mit einer Arbeit zum Thema "Momentum auf dem Composite Dax? Eine empirische Analyse" ab. 
              Ein großes Anliegen von Herrn Altonji ist es erworbenes Wissen weiterzugeben um so die Finanzbildung zu verbessern. Verschiedene Vorträge sowie eine aktive Mitarbeit im Kölner Börsenverein zeugen von diesem Interesse.
               <br/> 
              Als Investor sieht Herr Altonji fundamentale Daten als Treiber und entscheidende Entscheidungsgrundlage für eine Investition, wenngleich er das Timing der Investition eher als technischer Natur sieht. 
              Als Spekulant - wie er selbst mit mit Blick auf kurzfristiges Marktengagement sagt - hat sich Herr Altonji auf Volatilität in Aktien (Europa / USA / Japan) spezialisiert. Hier vertraut er auf die Seriosität der Unternehmen in Kombination  mit den dortigen strengen Auflagen. 
              Kurz über sich sagt Herr Altonji: "Mein Denkweise deckt sich mir der von AQR: An innovative approach to systematic investing backed by research insight and economic intuition."
            </Typography>
          </Box>
        </Flex>
      </div>

      <div>
        <Flex flexDirection={["column", "row", "row"]}
              alignItems="flexStart" 
              p={1}
              pt="1rem"
              mx="auto">
          

          <Typography variant="h4" style={{ color: "#fff", padding: "1rem" }}>
            Marco Schai
          </Typography>
          <Box
            width={[0.3]}
            // width="6vw"
            // height="6vw"
            // borderRadius="100%"
            // justify-content="center"
            // align-items="center"
          >
            <Image
              css={{
                objectFit: "cover",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                width: "10vw",
                height: "10vw",
                backgroundColor: "RGBA(252, 102, 32, 1)",
                borderRadius: "100%"
              }}
              borderRadius="100%"
              alt="Marco Schai"
              src="/avatar/Marco-Schai-Avatar.jpg"
            />
          </Box>

          <Box width={[0.8]}>
            <Typography
              variant="body1"
              style={{ color: "#fff", padding: "1rem" }}
            >
              Marco absolvierte die Matura mit Schwerpunkt Ökonomie am Gymnasium Friedberg. Vor dem Studium arbeitete er für zwei grosse Schweizer Bankinstitute. Danach studierte er Wirtschaftswissenschaften mit dem Schwerpunkt Banking and Finance. Anfang 2009 schloss er an der Universität Zürich mit den Master of Arts UZH und der Note "Magna cum Laude" ab. Seit 2009 ist er als privater Vollzeit-Trader tätig. Marco tradet vorwiegend mit Aktien aus dem Nebenwertebereich. Er lebt und arbeitet in Herisau (Schweiz), das im Appenzellerland, in der Nähe des Bodensees liegt. Als Ausgleich zur Börse liebt er alles, was mit Bewegung zu tun hat. Er fährt gerne Rennrad, trainiert im Fitnesscenter oder spielt Tennis und Squash.
            </Typography>
          </Box>
        </Flex>
      </div>

      <div>
        <Flex flexDirection={["column", "row", "row"]}
              alignItems="flexStart" 
              p={1}
              pt="1rem"
              mx="auto">
          <Box
            width={[0.3]}
            // width="6vw"
            // height="6vw"
            // borderRadius="100%"
            // justify-content="center"
            // align-items="center"
          >
            <Image
              css={{
                objectFit: "cover",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                width: "10vw",
                height: "10vw",
                backgroundColor: "RGBA(252, 102, 32, 1)",
                borderRadius: "100%"
              }}
              borderRadius="100%"
              alt="Elko Ebert"
              src="/avatar/Elko-Ebert-Avatar.jpg"
            />
          </Box>

          <Typography variant="h4" style={{ color: "#fff", padding: "1rem" }}>
          Elko Ebert          
          </Typography>

          <Box width={[0.8]}>
            <Typography
              variant="body1"
              style={{ color: "#fff", padding: "1rem" }}
            >
              Elko beschäftigt sich seit seiner Jugend mit den Finanzmärkten.
              Diese Faszination hält seit 25 Jahren immer noch an. Nach seinem
              Abschluss als Diplom Wirtschaftsinformatiker hat er viele Jahr im
              Vertrieb für IT-Unternehmen gearbeitet. Seit 2015 ist er privater
              Vollzeittrader. Elko handelt in Aktien- und Rohstoffmärkten. Als
              häufigstes Handelsinstrument setzt er Optionen ein. Er lebt mit
              seiner Familie in Bad Honnef im Siebengebirge. Als sportlichen
              Ausgleich spielt er Fußball und fährt Snowboard.
            </Typography>
          </Box>
        </Flex>
      </div>





           

     
    </PageLayout>
  );
};

export default Content;


const Background = ({ children }) => {
  return (
    <StaticQuery
      query={graphql`
        query {
          desktop: file(relativePath: { eq: "wallpaper/tylerReynolds.jpg" }) {
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