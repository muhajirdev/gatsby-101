import React from "react";
import PageLayout from "../../components/layouts/pagelayouts/index";
import Typography from "@material-ui/core/Typography";
import styles from "../../styles/styles";

export default ({ classes = styles }) => (
  <PageLayout
    seoTitle="Vorteile"
    navigationView="Strategie > Vorteile"
    // backgroundGraphqlSource={""}
  >
    <Typography
      className={classes.blocksatz}
      style={{ color: "#fff" }}
      variant="subtitle1"
    >
      <dl style={{ listStyleType: "none"}}>
        <dd>
          Die StockBoost Aktienstrategie basiert auf quantitativem Ansatz;
          verdichtet historische Aktienpreisentwicklung, positive
          Gewinnüberraschung sowie Analystendaten.
        </dd>
        <dd>
          Der Stock Ansatz filtert systematisch ein Aktienuniversum bestehend
          aus 4000 US-Amerikanischen Unternehmen mit einer Marktkapitalisierung
          von 500 Mio. - 10 Mrd. USD. So stehen US-Midcap-Aktien und nicht
          Mainstreamwerte im Fokus der Aktienstrategie bei Beachtung notwendiger
          Portfolio-Diversifikation.
        </dd>
        <dd>
          Der Boost Ansatz, der Depot-Boost, investiert bei gegebener positiver
          Marktlage in US-Amerikanische Unternehmen, die vor neuen Bewertungen
          stehen und somit ein starkes Momentum, eine sich beschleunigende
          positive Trendbewegung, aufweisen.
        </dd>
        <dd>
          Subjektive Entscheidungen sind insgesamt unbedeutend, naiv
          konstruierte Portfolios, die hoch konzentriert sind, ausgeschlossen.
          Eine deutliche Reduzierung des Maximum Drawdown des Portfolios ist
          durch die konsequent sukzessive Reduzierung der Aktienquote von 100%
          auf 66%, in potentiellen Seitwärtsphasen und Bärenmärkten,
          gewährleistet.
        </dd>

        <dd>
          Die StockBoost Aktienstrategie eignet sich als Beimischung für
          klassische Wertschriftenportfolios (Wertschriften: schweizerisch für
          Aktien und Anleihen) oder auch als aktive Komponente für passiv
          ausgerichtete ETF-Portfolios.
        </dd>
        <dd>
          Empirische Studien haben in der Vergangenheit für sämtliche
          Komponenten der StockBoost Aktienstrategie eine risikoadjustierte
          Überrendite – Outperformance - nachgewiesen.
        </dd>
        <dd>
          Diesen Nachweis führen wir permanent transparent ‘ungehebelt’ in einem
          USD 20'000 Echtgelliepot, bei einer Aktienquote von 66% - 100%,
          weiter.
        </dd>
        <dd>
          Abonnenten der STOCKBOOST Aktienstraegie werden unmittelbar nach den
          Portfolio Umschichtungen über sämtliche Käufe / Verkäufe informiert.
        </dd>
        <dd>
          Der Aufwand für die Umsetzung von STOCKBOOST beträgt ca. 15 Minuten
          pro Woche.
        </dd>
      </dl>
    </Typography>
  </PageLayout>
);
