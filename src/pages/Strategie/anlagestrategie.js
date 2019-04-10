import React from "react";
import PageLayout from "../../components/layouts/pagelayouts/pagesTeam";
import Typography from "@material-ui/core/Typography";
import Collapsable from "../../components/layouts/collapsable";
import styles from "../../styles/styles";


export default ({ classes = styles }) => (
  <PageLayout
    textColor='black'
    seoTitle="Anlagestrategie"
    navigationView="Strategie > Anlagestrategie"
    // backgroundGraphqlSource={""}
  >
    <Typography
      className={classes.blocksatz}
      style={{ color: "#fff" }}
      variant="subtitle1"
    >
      In StockBoost stellen wir aus den Erkenntnissen der akademischen Literatur
      ein Regelwerk auf, das wir systematisch in einem Echtgelddepot bei
      Interactive Brokers Ltd. anwenden. Die Erkenntnisse, inklusive dem
      Literaturverzeichnis, stellen wir unseren Kunden im Dokument „StockBoost
      Fakten und Hintergründe“ gerne zu Verfügung.
      <br />
      <span>
        <br />
        <h3> StockBoost – Struktur & Zielsetzung</h3>
        <br />
        <p>
          Im Informationsdienst StockBoost soll die Entwicklung eines aktiv
          gemanagten Aktiendepots langfristig dokumentiert werden. Als
          Renditeziel soll eine Überperformance gegenüber den US-Indizes
          erreicht werden.
        </p>

        <p>
          Neben einem transparenten Regelwerk können die Interessenten alle
          Veränderungen direkt beobachten und nachvollziehen.
        </p>

        <p>
          Als Grundlage des Regelwerkes dienen akademische Studien. Für die
          Umsetzung von StockBoost werden permanent umfangreiche Auswertungen
          von Analystenprognosen über den gesamten US-Markt erstellt. Durch ein
          Ranglistensystem werden die Aktien für StockBoost selektiert.
        </p>

        <p>
          2/3 des Depotvolumens (30 Aktien) wird ständig in amerikanische
          Midcap-Aktien investiert.
        </p>

        <p>
          1/3 des Depots (maximal 15 Aktien) wird in bullischen Börsenphasen in
          trendstarke US-Aktien investiert, die - nach einer Gewinnüberraschung
          - eine potenzielle neue Aufwärtsphase einleiten. Als Marktampel wird
          der gleitende Durchschnitt (GD) eines grossen US-Index der letzten 200
          Tage per Wochenschluss mit dem Indexstand verglichen. Bullische
          Börsenphasen sind für StockBoost Indexstände über dem Gleitenden
          Durchschnitt der letzten 200 Tage. Im Bärenmarkt wird dieser Teil des
          Depots von 1/3 auf 1/6 halbiert und es werden keine Neueinstiege
          getätigt.
        </p>

        <p>
          Je länger der Bärenmarkt dauert, umso mehr Cash wird in diesem einen
          Drittel aufgebaut. In einem andauernden Bärenmarkt beträgt die
          Cashquote bis zu 33%.
        </p>

        <p>
          Das Aktiendepot wird nicht gehebelt und dient den Autoren als
          Diversifikation zu weiteren Strategien, die sie als Vollzeithändler
          umsetzen.
        </p>
      </span>
    </Typography>

    <Collapsable title={"Erkenntnisse"}>
      <ul style={{ listStyleType: "disc" }}>
        <li>
          Die Preisreaktion nach Earnings Surprises und Prognoserevisionen ist
          unvollständig.
        </li>
        <li>
          Der Post-Announcement-Drift nach Prognoserevisionen von Analysten &
          nach Gewinn-Überraschungen existiert und hält über mehrere Monate an.
        </li>
        <li>
          Unternehmen mit einer positiven Earnings Surprise im vergangenen
          Quartal haben eine höhere Wahrscheinlichkeit einer erneuten Earnings
          Surprise im kommenden Quartal.{" "}
        </li>
      </ul>
      <h4>Der positive Aktienpreis-Drift ist…</h4>
      <ul style={{ listStyleType: "lower-greek" }}>
        <li>
          in den ersten Tagen am grössten & hält für mindestens drei Monate in
          abgeschwächter Form an.
        </li>
        <li>
          bei High-Innovation-Revisionen grösser, als bei
          Low-Innovation-Revisionen.
        </li>
        <li>
          bei Aktien mit geringer Analystendichte (kleinkapitalisierte
          Unternehmen) grösser, als bei Aktien mit hoher Analystendichte.
        </li>
        <li>
          umso grösser, je positiver die Prognoserevision und je positiver die
          Gewinnüberraschung.
        </li>
      </ul>
      <p>
        StockBoost ist ein Informationsdienst von StockBoost.de und besteht aus
        den beiden Teilstrategien „Stock“ und „Boost“. Zwei Drittel bzw. 30
        Aktien werden permanent in Stock investiert. Ein Drittel bzw. maximal 15
        Aktien werden bei positivem Aktienumfeld in Boost angelegt. StockBoost
        besteht aus maximal 45 Aktien und die Aktienquote liegt, je nach
        Marktumfeld, zwischen 66,7 und 100 Prozent. StockBoost wird als
        Echtgelddepot bei Interactive Brokers Ltd. umgesetzt. Die
        Wertentwicklung und die einzelnen Trades werden für die Kunden
        transparent gezeigt.
      </p>

      <h4>
        Regelwerk Stock (mit 66,66% gewichtete Teilstrategie von StockBoost)
      </h4>

      <p>
        Mithilfe von Aktienscreenern und inhouse entwickelter Software suchen
        wir - in Anlehnung an die Erkenntnisse der oben erwähnten Studien zu
        Gewinn-Revisionen und -Überraschungen - zweimal pro Woche die
        bestklassierten Aktien aus einem Universum von 4‘200 US-amerikanischen
        Aktien.
      </p>
      <h4>Voraussetzungen für Käufe:</h4>

      <ul style={{ listStyleType: "disc" }}>
        <li>
          Die Aktien sind aktuell und vor einer halben Woche in den besten 5%
          des Aktienuniversums rangiert.
        </li>
        <li>
          Die Marktkapitalisierung der Aktien liegt zwischen 500 Millionen und
          15 Milliarden US Dollar.
        </li>
        <li>Die Unternehmen werden von mindestens zwei Analysten abgedeckt.</li>
        <li>
          Aus der Liste von etwa 90 Aktien werden 30 ausgewählt, wobei wir bei
          StockBoost auf Sektordiversifikation und Diversifikation hinsichtlich
          der Markkapitalisierung (zwischen 500 Millionen bis 15 Milliarden US
          Dollar) achten.
        </li>
        <li>
          Einmal pro Woche findet eine Umschichtung statt, bei dem Aktien mit
          Verkaufssignal durch neue Aktien aus den besten 5% der Rangliste
          ersetzt werden.
        </li>
        <li>
          Verkauft werden Aktien, die nicht in den besten 20% des Universums
          rangieren.
        </li>
        <li>
          Alle 30 Aktien werden beim Kauf mit 1/45 des StockBoost-Portfolios
          gleich gewichtet (entspricht 2,222% Gewichtung pro Aktie).
        </li>
        <li>
          Es erfolgt ein Rebalancing der Aktien, die bereits hohe Kursgewinne aufweisen. Wir realisieren dadurch Teilgewinne und schaffen Liquidität für die nächsten Umschichtungen.
        </li>
        <li>Stock ist in jedem Marktumfeld dauernd investiert.</li>
      </ul>

      <h4>
        Regelwerk Boost (mit 33,33% gewichtete Teilstrategie von StockBoost)
      </h4>

      <p>
        In Boost kombinieren wir Momentum und Jahreshöchststände mit positiven
        Gewinnüberraschungen.
        <br />
        Das Universum besteht aus US-gelisteten Aktien mit einer
        Marktkapitalisierung von mehr als einer Milliarde US Dollar. Im März
        2019 umfasste das Universum ungefähr 2‘500 Aktien. Alle 15 Aktien werden
        beim Kauf mit 1/45 des StockBoost-Portfolios gleich gewichtet
        (entspricht 2,222% Gewichtung pro Aktie).
      </p>

      <h4>Voraussetzungen für die maximal 15 Stock-Aktien:</h4>

      <ul style={{ listStyleType: "disc" }}>
        <li>
          Der 'S&P' 500 notiert über seinem einfachen, gleitenden Durchschnitt
          der letzten 200 Handelstage.
        </li>
        <li>
          Die Aktie hat zur Börseneröffnung - in Verbindung mit einer positiven
          Gewinnüberraschung bzw. einer anderweitigen, positiven
          Unternehmensnachricht - mit einer Kurslücke eröffnet.
        </li>
        <li>
          Die Aktie erreichte in den letzten 20 Handelstagen ein neues
          Jahreshoch.
        </li>
        <li>
          Die Aktie wird i.d.R. am Tag der positiven Gewinnüberraschung gekauft
        </li>
      </ul>

      <h4>Verkaufskriterien:</h4>

      <ul style={{ listStyleType: "disc" }}>
        <li>
          Die Aktie hat in den letzten drei Monaten kein neues Jahreshoch
          erreicht.
        </li>
        <li>
          Die Aktie ist unter einen systematisch berechneten Schwellenwert
          zurückgefallen.
        </li>
        <li>
          In Boost wird die Hälfte der Positionen verkauft, wenn der S&P 500
          unter den 200-TageGleitenden-Durchschnitt fällt.
        </li>
        <li>
        Wenn wir bereits 15 Boost-Aktien im Depot halten, verkaufen wir diejenige Aktie die z.B. in der Nähe eines Verkaufskriteriums steht oder bereits negatives Momentum aufweist und ersetzen diese durch einen neuen Kandidaten, der stärkeres Momentum aufweist. 
        </li>
        <li>
        Quartalsweise erfolgt ein Rebalancing der Boost-Aktien, die bereits hohe Kursgewinne aufweisen. Wir realisieren dadurch Teilgewinne und schaffen Liquidität für die nächsten Umschichtungen.
        </li>
      </ul>
    </Collapsable>
  </PageLayout>
);
