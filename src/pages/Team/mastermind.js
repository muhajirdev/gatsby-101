import React from "react";
import PageLayout from "../../components/layouts/pagelayouts/index";
import BackgroundImage from "../../components/background-image";
import styles from "../../styles/styles";
import Typography from "@material-ui/core/Typography";
import { StaticQuery, graphql } from "gatsby";
import Collapsable from "../../components/layouts/collapsable";

export default ({ classes = styles }) => (
  <PageLayout
    seoTitle="Mastermind"
    navigationView="Team > Mastermind"
    Background={Background}

  >
    <Typography className={classes.blocksatz} style={{color:"#fff"}} variant="subtitle1">
        Kernstück von StockBoost ist ein ausgereiftes, mit Echtgeld umgesetztes, transparentes Aktiendepot, das gezielt auf den Postannouncement-Drift nach Gewinnrevisionen und nach Gewinnüberraschungen setzt.
    </Typography>
  
      
    <Collapsable title={"Der Lauf der Dinge... aus Sicht von Marco Schai"}>
        Ich entdeckte bereits im Jahre 2001 zufällig, dass Prognoserevisionen von Analysten und Gewinnüberraschungen ein mächtiges Werkzeug sein         können, um eine systematische, nachhaltig erfolgsversprechende         Anlagestrategie aufzubauen. Mit Nicolai baute ich ein Regelwerk auf und         handelte die Aktienstrategie von 2001 bis 2002 in einem gemeinsamen         Depot bei Interactive Brokers Ltd.. Die quantitative Aktienauswahl war         ziemlich zeitaufwendig, da wir viele Daten manuell aufarbeiten mussten.         Mit dem Start meines Ökonomiestudiums an der Universität Zürich stellten         wir leider die Umsetzung der Strategie aus Zeitgründen und meinem         Geldmangel ein. Das Ganze ging uns jedoch nicht aus dem Kopf und war         auch in den Folgejahren präsent und wir verfolgten die Performance der         Aktienstrategie auf der Seitenlinie. Nicolai schrieb im Jahre 2006 seine         Diplomarbeit in Informatik an der Technikerschule mit dem Themenkomplex         „Aufbau eines Internetauftritts und Umsetzung eines         Informationsdienstes“. Auch dieses Projekt wurde von Nicolai und mir nie         realisiert. Im Jahre 2008 bemühte ich mich erfolgreich darum, meine         Masterthesis zum StockBoost-Thema „Die Prognosefähigkeit von Earnings         Forecasts für Aktienkurse“ zu schreiben. Die Resultate der eigenen         empirischen Studie mit Analystendaten aus der I/B/E/S-Datenbank, einer         alternativen Datenquelle, führte ebenso zu validen, risikoadustierten         Modell-Überrenditen für die Jahre 2001 bis 2007. Nach dem         Universitätsabschluss handelte ich die Aktienstrategie StockBoost erneut         für etwa ein Jahr im eigenen Depot bis mir die manuelle Auswertung         wiederum zu zeitaufwendig wurde. Ich machte mich ab 2009 als privater         Vollzeit-Aktientrader selbstständig und das Projekt StockBoost lag         erneut für Jahre auf Eis, aber ich verfolgte die Entwicklung auf der         Seitenlinie mit grossem Interesse. Im Jahre 2018 fanden die späteren         Protagonisten von StockBoost Rami, Elko und ich durch eine Weiterbildung         im Börsenbereich zusammen und veranstalteten einmal im Monat einen         Austausch über Skype bei dem wir über eigene Erfahrungen mit Trading und         Eigenhandel diskutierten. Im Rahmen dieser Mastermind-Gespräche erwähnte         ich immer wieder, dass mir seit Jahren eine Aktienstrategie mit         Analystendaten und Earnings Surprises als Inputdaten im Kopf         herumschwirrt, die ich im Jahre 2001 entdeckte und die mich nie mehr         losgelassen hat. Rami und Elko waren von der Idee StockBoost überzeugt         und wir bereiteten den Informationsdienst StockBoost über Monate im         Hintergrund auf. Kernstück von StockBoost ist ein ausgereiftes, mit         Echtgeld umgesetztes, transparentes Aktiendepot, das gezielt auf den         Postannouncement-Drift nach Gewinnrevisionen und nach         Gewinnüberraschungen setzt. Rami entwickelte ein Softwareprogramm das         uns die zeitaufwendige Analysearbeit weitgehend abnimmt und fehlerfrei         arbeitet. Desweitern bereiteten wir die akademische Literatur und das         genaue Regelwerk für die Kunden von StockBoost in verständlicher Form         auf. Seit März 2019 ist das Projekt StockBoost live und wir wollen den         Informationsdienst für viele Jahre anbieten und selbst auf dem         Echtgeld-Depot bei Interactive Brokers Ltd. transparent inklusive Track         Record umsetzen. Im Depot sollen neben Steuern keine Entnahmen getätigt         werden und allfällige Gewinne sollen reinvestiert werden. Wie man         systematisch & entspannt in Aktien investiert - StockBoost.
    </Collapsable>
  </PageLayout>
);

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