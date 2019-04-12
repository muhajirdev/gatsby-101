import React from "react";
import PageLayout from "../../components/layouts/pagelayouts/index";
import BackgroundImage from "../../components/background-image";
import styles from "../../styles/styles";
import { StaticQuery, graphql } from "gatsby";
import Typography from "@material-ui/core/Typography";

export default ({ classes = styles }) => (
  <PageLayout
    seoTitle="FAQ"
    navigationView="Strategie > FAQ"
    Background={Background}
    
  >
    <Typography
      className={classes.blocksatz}
      style={{ color: "#fff" }}
      variant="subtitle1"
    >
      <dl style={{ listStyleType: "none" }}>
        <dt>Was benötigt man, um StockBoost nachvollziehen zu können?</dt>
        <dd>
          Ein Depot oder Anbieter der US-Aktienkurse zur Verfügung stellt. Unser
          Echtgeldkonto führen wir bei Interactive Brokers (IB).
        </dd>

        <dt>Welche Handelsinstrumente werden in StockBoost eingesetzt?</dt>
        <dd>
          Im Echtgeld-Depot setzen wir ausschließlich auf Aktien und verwenden
          keinen Hebel. Wir verwenden nur Long-Positionen in Aktien und setzen
          keine Leerverkäufe ein. Auf andere Handelsinstrumente verzichten wir.
        </dd>

        <dt>Für wen ist der Informationsdienst StockBoost geeignet?</dt>
        <dd>
          Für Investoren, die uns an der langfristigen Umsetzung der
          StockBoost-Strategien begleiten und bei der praktischen Umsetzung über
          die Schultern schauen wollen. Je länger das Projekt StockBoost läuft,
          umso interessanter werden die Auswertungen der langfristigen
          Wertentwicklung in unterschiedlichen Börsenphasen.
        </dd>

        <dt>
          Warum eignet sich für uns StockBoost als Beimischung im langfristigen
          Investment-Depot oder in einem passiven ETF-Vorsorge-Depot?
        </dt>
        <dd>
          Die meisten Investoren streuen Ihre Investments in große bekannte
          Firmen. Das ist sinnvoll und weit verbreitet. StockBoost deckt als
          Diversifikation das komplette Segment von kleineren bis mittelgroßen
          Firmen ab. Wir kaufen Werte mit einer Marktkapitalisierung von über
          USD 500 Millionen. Wir achten auf eine breite Streuung über
          unterschiedliche Sektoren.
          <br />
          Durch den geringen zeitlichen Aufwand kann StockBoost auch eine aktive
          Komponente zu einem passiven ETF-Depot abbilden. Das Aktienuniversum
          von StockBoost deckt über 3.000 US-Aktien ab.
        </dd>

        <dt>
          Warum verwendet StockBoost keine Stopp Loss-Aufträge in einzelnen
          Positionen?
        </dt>
        <dd>
          Jeder diskretionäre Eingriff bedeutet zusätzlichen zeitlichen Aufwand.
          Unser Ziel ist die Umsetzung so einfach wie möglich zu halten, damit
          wir StockBoost als Beimischung mit geringem zeitlichem Aufwand
          umsetzen können.
          <br />
          Die empirischen Auswertungen haben einen risikoadjustierten Vorteil
          für diese Umsetzung aufgezeigt.
          <br />
          Wir haben StockBoost mit zwei Teilstrategien so konzipiert, dass wir
          in schlechten Börsenphasen die Aktienquote reduzieren und somit
          Marktrücksetzer im Depot abschwächen.
        </dd>

        <dt>
          Warum zeigt StockBoost transparent die Regeln und eine Umsetzung in
          einem Live-Konto?
        </dt>
        <dd>
          Wir nutzen StockBoost als Baustein für unsere eigene Altersvorsorge
          und wollen uns in erster Linie selbst an das entwickelte System
          halten. Es werden auch Börsenphasen kommen, in denen das naturgemäß
          schwerer fällt. Durch die regelmäßige Veröffentlichung können unsere
          Kunden jederzeit die Einhaltung der Regeln nachvollziehen.
          <br />
          Wir sind von StockBoost überzeugt und glauben, dass es für unseren
          angedachten Anwendungsfall gut ausgearbeitet ist. Durch die
          transparente Umsetzung haben wir die Chance Feedback von unseren
          Kunden oder anderen Händlern zu bekommen, um mögliche Schwachstellen
          auszumerzen.
        </dd>

        <dt>
          Warum verzichten wir auf Backtests oder modellierte Performancekurven?
        </dt>
        <dd>
          Ein toller Backtest ist immer verkaufsfördernd. Wir verzichten aus
          verschiedenen Gründen darauf und sind überzeugt, dass wir mit den
          vielen Details eine bessere Entscheidungsgrundlage liefern. Für die
          einzelnen Komponenten haben wir uns natürlich Backtests angeschaut
          bzw. Marco hat im Rahmen seiner Diplomarbeit eigene Backtests
          erstellt.
          <br />
          Einen wirklich guten Backtest zu erstellen und diesen auch
          nachvollziehbar darzustellen, ist sehr schwierig. Die Datenqualität
          muss stimmen. Das Regelwerk muss zu 100% abbildbar sein. Subjektive
          Entscheidungen wie eine Aktienauswahl im Nachhinein ist fast nicht
          möglich (Fusionierte Aktien gibt es nicht mehr etc.). Auch unser
          Auswahlkriterium der Marktkapitalisierung müsste stufenweise angepasst
          werden (vor 20 Jahren waren die Unternehmensbewertungen anders).
          <br />
          Aufgrund unserer intensiven Vorarbeit sind wir überzeugt, dass die
          einzelnen Komponenten risikoadjustierte Überrenditen erwirtschaften
          können. Durch unsere langjährige Handelserfahrung an den Finanzmärkten
          haben wir eine umsetzbare Investitionsstrategie entwickelt.
          <br />
          Wir zeigen transparent (inkl. Kosten und Steuern) die Wertentwicklung
          in unserem Echtgeld-Depot. Aus unserer Sicht ist eine praktische
          Umsetzung durch keinen Backtest zu ersetzen.{" "}
        </dd>

        <dt>
          Warum ist StockBoost kostenpflichtig, obwohl Ihr mit einem
          Echtgeldkonto an der Strategie partizipiert?
        </dt>
        <dd>
          Die Angebote rund um das Thema Anlagemöglichkeiten sind in
          Deutschland, Österreich und der Schweiz aus unserer Sicht nicht
          optimal für die breite Masse ausgelegt. Das liegt einerseits an der
          vorliegenden Sparkultur und auch an der unzureichenden finanziellen
          Bildung. Wir wollen aber nicht nur „meckern“, sondern nachhaltig etwas
          verändern.
          <br />
          Wir haben StockBoost als nachvollziehbarer Informationsdienst
          konzipiert und wollen aufzeigen, dass wir mit geringen Kosten, wenig
          Zeitaufwand und einem angemessenen Risiko langfristig erfolgreich in
          Aktien investieren können.
          <br />
          Durch die Einnahmen wollen wir die Kosten für das Projekt decken und
          in der Lage sein, sukzessive über unsere kostenfreien Beiträge und
          Videos das Thema finanzielle Bildung im deutschsprachigen Raum
          voranzutreiben.
          <br />
          Jeder muss an irgendeiner Stelle Geld für seine Arbeit verdienen. Ein
          kostenpflichtiger Beitrag ist transparent.
        </dd>

        <dt>Wieviel kostet StockBoost?</dt>
        <dd>
          StockBoost kostet im Jahresabonnement 300€ bzw. 350 CHF bei jährlicher
          Zahlung.
        </dd>

        <dt>Wie ist die Kündigungsfrist?</dt>
        <dd>
          Das Abonnement verlängert sich automatisch um ein weiteres Jahr, wenn
          nicht 4 Wochen vor Ablauf des Abonnements gekündigt wird.
        </dd>
      </dl>
    </Typography>
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