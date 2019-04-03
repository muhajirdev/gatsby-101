import React from "react";
import PageLayout from "../layouts/pagesTeam";
import Typography from "@material-ui/core/Typography";
import Collapsable from "../components/collapsable";
import styles from "../styles";
import { Text } from "rebass";

export default ({ classes = styles }) => (
  <PageLayout
    seoTitle="Vision"
    navigationView="Team > Vision"
    // backgroundGraphqlSource={""}
  >
    <Typography className={classes.blocksatz} style={{color:"#fff"}} variant="subtitle1">
      Im Allgemeinen wird mit großen Gewinnen und dem schnellen Geld an der
      Börse geworben. Die Wirklichkeit sieht leider anders aus. Die meisten
      Menschen verlieren Geld an den Börsen. Das ist auch logisch, da Geld an
      den Finanzmärkten nicht erschaffen, sondern umverteilt wird. Man benötigt
      viel Zeit, um zu verstehen warum das so ist und was die kritischen Punkte
      sind, die man als Trader oder Investor erlernen muss.
      <br />
      Wir handeln selbst sein vielen Jahren an der Börse und wollen nicht die
      Unwissenheit anderer ausnutzen, um uns selbst zu bereichern. Das geht nur
      über Transparenz und Offenheit.
      <br />
      Mit StockBoost haben wir ein Projekt gestartet was diese Anforderungen
      umsetzt.
      <br/>
      Mit systematischen Regeln setzen wir transparent in unserem Echtgeld-Depot, unseren Investment-Ansatz als Baustein für die Altersvorsorge, in wenigen Minuten pro Woche um.
      <br/>
      </Typography>
  

      <Collapsable title={"Details"} className={classes.link}>
        <p > 
          Wir wollen mit StockBoost einen umsetzbaren Investment-Ansatz zeigen und das Thema finanzielle Bildung vorantreiben.
          Viele andere sind mit so einem Ansatz bisher gescheitert. 
          Warum wir uns sprichwörtlich trotzdem auf so einen steinigen Weg machen, beschreiben wir im Detail im <a style={{color: "#FF8000",
          textDecoration: "none"}} href="/mastermind">Menüpunkt Team / Mastermind</a>.
        </p>
        <h4>Für wen ist dieser Informationsdienst geeignet?</h4>
          <p>
            Für Investoren, die uns an der langfristigen Umsetzung der StockBoost-Strategien begleiten und bei der praktischen Umsetzung über die Schultern schauen wollen. 
            Je länger das Projekt StockBoost läuft, umso interessanter werden die Auswertungen der langfristigen Wertentwicklung in unterschiedlichen Börsenphasen..
          </p>
        <h4>
          Warum ist StockBoost kostenpflichtig obwohl Ihr mit einem
          Echtgeldkonto an der Strategie partizipiert?
        </h4>
        <p>
        Die Angebote rund um das Thema Anlagemöglichkeiten sind in Ländern wie Deutschland, Österreich und der Schweiz aus unserer Sicht nicht optimal für die breite Masse ausgelegt. Das liegt einerseits an der vorliegenden Sparkultur und auch an der eher unzureichenden finanziellen Bildung. Wir wollen aber nicht nur „meckern“, sondern etwas verändern.
        <br />
        Wir haben StockBoost als nachvollziehbarer Informationsdienst konzipiert und werden aufzeigen, dass man mit geringen Kosten, wenig Zeitaufwand und einem angemessenen Risiko langfristig erfolgreich in Aktien investieren kann. 
        <br />
        Durch die Einnahmen wollen wir die Kosten für das Projekt decken und in der Lage sein, sukzessive über unsere kostenfreien Beiträge und Videos das Thema finanzielle Bildung im deutschsprachigen Raum voranzutreiben.
        <br />
        Jeder muss an irgendeiner Stelle Geld für seine Arbeit verdienen. Ein kostenpflichtiger Beitrag ist transparent. Wir arbeiten nicht mit verdeckten Provisionen oder Vermittlungsgebühren von Dritten.
        </p>

        <h4> StockBoost – Zielsetzung</h4>
        <p>
        Im Informationsdienst StockBoost soll die Entwicklung eines aktiv gemanagten Aktiendepots langfristig dokumentiert werden. Als Renditeziel soll eine Überperformance gegenüber den US-Indizes erreicht werden.
        <br />
        Neben einem transparenten Regelwerk können die Interessenten 1x wöchentlich alle Veränderungen direkt beobachten und nachvollziehen.
        <br />
        Als Grundlage des Regelwerkes dienen wissenschaftlich belegte, empirische Studien. Für die Umsetzung von StockBoost werden permanent umfangreiche Auswertungen von Analystenprognosen über den gesamten US-Markt erstellt. Durch ein Ranglistensystem werden die Aktien für StockBoost selektiert.
        <br />
        2/3 des Depotvolumens (30 Aktien) werden ständig in amerikanische Midcap Aktien investiert. 
        <br />
        1/3 des Depots (maximal 15 Aktien) wird in bullischen Börsenphasen in trendstarke US-Aktien investiert, die - nach einer Gewinnüberraschung - eine potenzielle neue Aufwärtsphase einleiten. 
        Als Marktampel wird der Gleitende Durchschnitt (GD) eines grossen US-Indexes der letzten 200 Tage per Wochenschluss mit dem Indexstand verglichen. Bullische Börsenphasen sind für uns Indexstände über dem Gleitenden Durchschnitt der letzten 200 Tage. Im Bärenmarkt wird dieser Teil des Depots von 1/3 auf 1/6 halbiert und es werden keine Neueinstiege getätigt. 
        <br />
        Je länger der Bärenmarkt dauert, umso mehr Cash wird in diesem einen
        Drittel aufgebaut. In einem andauernden Bärenmarkt beträgt die Cashquote
        bis zu 33%.
        <br />
        Je länger der Bärenmarkt dauert, umso mehr Cash wird in diesem einen Drittel aufgebaut. In einem andauernden Bärenmarkt beträgt die Cashquote bis zu 33%.
        <br />
        Das Aktiendepot wird nicht gehebelt und dient den Autoren als Diversifikation zu weiteren Strategien, die sie als Vollzeithändler umsetzen.
        </p>
    </Collapsable>
  </PageLayout>
);
