import React from "react";
import PageLayout from "../../components/layouts/pagelayouts/pagesTeam";
import Typography from "@material-ui/core/Typography";
import Collapsable from "../../components/layouts/collapsable";
import styles from "../../styles/styles";

export default ({ classes = styles }) => (
  <PageLayout
    seoTitle="Vision"
    navigationView="Team > Vision"
    // backgroundGraphqlSource={""}
  >
    <Typography className={classes.blocksatz} style={{color:"#fff"}} variant="subtitle1">
    Im Allgemeinen wird mit großen Gewinnen und dem schnellen Geld an der Börse geworben.
Die Wirklichkeit sieht leider anders aus. Die meisten Menschen verlieren Geld an den Börsen. Das ist auch logisch, da Geld an den Finanzmärkten nicht erschaffen, sondern umverteilt wird. Man benötigt viel Zeit, um zu verstehen warum das so ist und was die kritischen Punkte sind, die man als Trader oder Investor erlernen muss. 

      <br />
      Wir handeln selbst seit vielen Jahren an der Börse und wollen nicht die Unwissenheit anderer ausnutzen, um uns selbst zu bereichern. Das geht nur über Transparenz und Offenheit.
      <br />
      Mit StockBoost haben wir ein Projekt gestartet, das diese Anforderungen umsetzt. 
      <br/>
      Mit systematischen Regeln setzen wir transparent in unserem Echtgeld-Depot, unseren Investment-Ansatz als Baustein für die Altersvorsorge in wenigen Minuten pro Woche um.      <br/>
      </Typography>
  

      <Collapsable title={"Details"} className={classes.link}>
        <p > 
         
         
        Wir wollen mit StockBoost einen umsetzbaren Investment-Ansatz auf transparenter Basis zeigen und das Thema finanzielle Bildung vorantreiben.
Viele Andere sind mit solch einem Ansatz bisher gescheitert. Warum wir uns sprichwörtlich trotzdem auf so einen steinigen Weg machen, beschreiben wir im Detail im <a style={{color: "#FF8000",
          textDecoration: "none"}} href="/mastermind">Menüpunkt Team / Mastermind</a>.
        </p>
        <h4>Für wen ist dieser Informationsdienst geeignet?</h4>
          <p>
          Für Investoren, die uns an der langfristigen Umsetzung der StockBoost-Strategien begleiten und bei der praktischen Umsetzung über die Schultern schauen wollen. 
Je länger das Projekt StockBoost läuft, umso interessanter werden die Auswertungen der langfristigen Wertentwicklung in unterschiedlichen Börsenphasen.

          </p>
        <h4>
          Warum ist StockBoost kostenpflichtig obwohl Ihr mit einem
          Echtgeldkonto an der Strategie partizipiert?
        </h4>
        <p>
        Die Angebote rund um das Thema Anlagemöglichkeiten sind in Deutschland, Österreich und der Schweiz aus unserer Sicht nicht optimal für die breite Masse ausgelegt. Das liegt einerseits an der vorliegenden Sparkultur und auch an der eher unzureichenden finanziellen Bildung. Wir wollen aber nicht nur „meckern“, sondern nachhaltig etwas verändern.
                <br />
                Wir haben StockBoost als nachvollziehbarer Informationsdienst konzipiert und werden aufzeigen, dass man mit geringen Kosten, wenig Zeitaufwand und einem angemessenen Risiko langfristig erfolgreich in Aktien investieren kann.         
                <br />
                Durch die Einnahmen wollen wir die Kosten für das Projekt decken und in der Lage sein, sukzessive über unsere kostenfreien Beiträge und Videos das Thema finanzielle Bildung im deutschsprachigen Raum voranzutreiben.        
                <br />
        
                Jeder muss an irgendeiner Stelle Geld für seine Arbeit verdienen. Ein kostenpflichtiger Beitrag ist transparent.         </p>

        
    </Collapsable>
  </PageLayout>
);
