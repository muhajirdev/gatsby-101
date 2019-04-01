import React from "react";
import PageLayout from "../layouts/page";
/* MUI */
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import { Box, Flex, Image } from "rebass";
import { graphql, StaticQuery } from "gatsby";
import styles from "../styles";

const Content = ({ classes = styles, data }) => {
  return (
    <PageLayout
      seoTitle="Team"
      anavigationView="Team"
      backgroundGraphqlSource={graphql`
        query {
          desktop: file(relativePath: { eq: "bg22.jpg" }) {
            childImageSharp {
              fluid(quality: 100, maxWidth: 4160) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      `}
    >
      <div>
        <Flex alignItems="center">
          <Box width={[0.3]}>
            <Image
              css={{ objectFit: "cover" }}
              borderRadius="100%"
              height="300px"
              width="300px"
              alt="Marco Schai"
              src="/avatar/Marco.jpg"
            />
          </Box>
          <Box width={[0.7]}>
            Marco absolvierte die Matura mit Schwerpunkt Ökonomie am Gymnasium
            Friedberg. Vor dem Studium arbeitete er für zwei grosse Schweizer
            Bankinstitute. Danach studierte er Wirtschaftswissenschaften mit dem
            Schwerpunkt Banking and Finance. Anfang 2009 schloss er an der
            Universität Zürich mit den Master of Arts UZH und der Note "Magna
            cum Laude" ab. Seit 2009 ist er als privater Vollzeit-Trader tätig.
            Marco tradet vorwiegend mit Aktien aus dem Nebenwertebereich. Er
            lebt und arbeitet in Herisau (Schweiz), das im Appenzellerland, in
            der Nähe des Bodensees liegt. Als Ausgleich zur Börse liebt er
            alles, was mit Bewegung zu tun hat. Er fährt gerne Rennrad,
            trainiert im Fitnesscenter oder spielt Tennis und Squash.
          </Box>
        </Flex>
        <Typography
          variant="display1"
          style={{ color: "#fff", padding: "1rem" }}
        >
          Marco
        </Typography>
        <Typography
          variant="subheading"
          style={{ color: "#fff", padding: "1rem" }}
        >
          Marco absolvierte die Matura mit Schwerpunkt Ökonomie am Gymnasium
          Friedberg. Vor dem Studium arbeitete er für zwei grosse Schweizer
          Bankinstitute. Danach studierte er Wirtschaftswissenschaften mit dem
          Schwerpunkt Banking and Finance. Anfang 2009 schloss er an der
          Universität Zürich mit den Master of Arts UZH und der Note "Magna cum
          Laude" ab. Seit 2009 ist er als privater Vollzeit-Trader tätig. Marco
          tradet vorwiegend mit Aktien aus dem Nebenwertebereich. Er lebt und
          arbeitet in Herisau (Schweiz), das im Appenzellerland, in der Nähe des
          Bodensees liegt. Als Ausgleich zur Börse liebt er alles, was mit
          Bewegung zu tun hat. Er fährt gerne Rennrad, trainiert im
          Fitnesscenter oder spielt Tennis und Squash.{" "}
        </Typography>
      </div>

      <div>
        <Typography
          variant="display1"
          style={{ color: "#fff", padding: "1rem" }}
        >
          Elko Ebert
        </Typography>
        <Avatar
          alt="Elko Ebert"
          src="/avatar/Elko-Ebert-Avatar.jpg"
          className={classes.avatar}
        />
        <Typography
          variant="subheading"
          style={{ color: "#fff", padding: "1rem" }}
        >
          Elko beschäftigt sich seit seiner Jugend mit den Finanzmärkten. Diese
          Faszination hält seit 25 Jahren immer noch an. Nach seinem Abschluss
          als Diplom Wirtschaftsinformatiker hat er viele Jahr im Vertrieb für
          IT-Unternehmen gearbeitet. Seit 2015 ist er privater Vollzeittrader.
          Elko handelt in Aktien- und Rohstoffmärkten. Als häufigstes
          Handelsinstrument setzt er Optionen ein. Er lebt mit seiner Familie in
          Bad Honnef im Siebengebirge. Als sportlichen Ausgleich spielt er
          Fußball und fährt Snowboard.
        </Typography>
      </div>

      {/* <Collapsable title={""}>
            </Collapsable> */}
    </PageLayout>
  );
};

export default Content;
