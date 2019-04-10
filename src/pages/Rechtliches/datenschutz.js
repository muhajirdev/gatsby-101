import React from "react";
import { Component } from "react";

import SEO from "../../components/seo";
import Layout from "../../components/layouts/layout";

/* Components */
import LinkBrand from "../../styles/linkBrand";


/* MUI */
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

import { Box } from "rebass";

const styles = theme => ({
  heading: {
    color: "#fff",
    marginBottom: "1rem",
    fontWeight: "normal",
    padding: "1em 5em 1em 0em",
    border: "2px solid #FF8000"
  },
  blocksatz: {
    padding: "5px 0px 5px 0px"
  },
  copyright: {
    color: "#fff",
    textAlign: "center"
  },
  link: {
    color: "#FF8000",
    textDecoration: "none"
  },
  logo: {
    fontWeight: 700
  }
});

class Datenschutz extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Layout>
        <SEO title="Datenschutz" />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flexWrap: "nowrap",
            backgroundColor: "#FF8000",
            height: "10rem",
            justifyContent: "center",
            alignItems: "center"
          }}
        />

        <Box
          className={classes.textContainer}
          // bg={['red', 'blue']}
          width={["100%", '75%', '60%']}
          style={{
            display: "flex",
            flexDirection: "column",
            flexWrap: "nowrap",
            justifyContent: "flexStart",
            alignItems: "left",
            alignText: "left",
            marginLeft: "auto",
            marginRight: "auto"
          }}
        >
          <Typography variant="display2">Datenschutzerklärung</Typography>
          <div className={classes.blocksatz}>
            <Typography variant="heading">
              Diese Datenschutzerklärung klärt Sie über die Art, den Umfang und
              Zweck der Verarbeitung von personenbezogenen Daten (nachfolgend
              kurz „Daten“) im Rahmen der Erbringung unserer Leistungen sowie
              innerhalb unseres Onlineangebotes und der mit ihm verbundenen
              Webseiten, Funktionen und Inhalte sowie externen Onlinepräsenzen,
              wie z.B. unser Social Media Profile auf (nachfolgend gemeinsam
              bezeichnet als „Onlineangebot“). Im Hinblick auf die verwendeten
              Begrifflichkeiten, wie z.B. „Verarbeitung“ oder „Verantwortlicher“
              verweisen wir auf die Definitionen im Art. 4 der
              Datenschutzgrundverordnung (DSGVO).
            </Typography>
          </div>
          <div className={classes.heading}>
            <Typography variant="display1">Verantwortlicher</Typography>
          </div>
          <div className={classes.blocksatz}>
            <Typography variant="subheading">
              Marco, Schai / SoftQuote GmbH <br />
              Säntisstrasse 6 <br />
              9100 Herisau <br />
              Schweiz <br />
              E-Mail: info@stockboost.de
              <br />
            </Typography>
          </div>
          <div className={classes.heading}>
            <Typography variant="display1">
              Arten der verarbeiteten Daten
            </Typography>
          </div>
          <div className={classes.blocksatz}>
            <Typography variant="subheading">
              Bestandsdaten (z.B., Personen-Stammdaten, Namen oder Adressen).{" "}
              <br />
              Kontaktdaten (z.B., E-Mail, Telefonnummern). <br />
              Inhaltsdaten (z.B., Texteingaben, Fotografien, Videos). <br />
              Nutzungsdaten (z.B., besuchte Webseiten, Interesse an Inhalten,
              Zugriffszeiten). <br />
              Meta-/Kommunikationsdaten (z.B., Geräte-Informationen,
              IP-Adressen). <br />
            </Typography>
          </div>
          <div className={classes.heading}>
            <Typography variant="display1">
              Kategorien betroffener Personen
            </Typography>
          </div>
          <div className={classes.blocksatz}>
            <Typography variant="subheading">
              Besucher und Nutzer des Onlineangebotes (Nachfolgend bezeichnen
              wir die betroffenen Personen zusammenfassend auch als „Nutzer“).
            </Typography>
          </div>
          <div className={classes.heading}>
            <Typography variant="display1">Zweck der Verarbeitung</Typography>
          </div>
          <div className={classes.blocksatz}>
            <Typography variant="subheading">
              Zurverfügungstellung des Onlineangebotes, seiner Funktionen und
              Inhalte.
              <br />
              Beantwortung von Kontaktanfragen und Kommunikation mit Nutzern.
              <br />
              Sicherheitsmaßnahmen.
              <br />
              Reichweitenmessung/Marketing
              <br />
            </Typography>
          </div>
          <div className={classes.heading}>
            <Typography variant="display1">
              Verwendete Begrifflichkeiten
            </Typography>
          </div>

          <div className={classes.blocksatz}>
            <Typography variant="subheading">
              „Personenbezogene Daten“ sind alle Informationen, die sich auf
              eine identifizierte oder identifizierbare natürliche Person (im
              Folgenden „betroffene Person“) beziehen; als identifizierbar wird
              eine natürliche Person angesehen, die direkt oder indirekt,
              insbesondere mittels Zuordnung zu einer Kennung wie einem Namen,
              zu einer Kennnummer, zu Standortdaten, zu einer Online-Kennung
              (z.B. Cookie) oder zu einem oder mehreren besonderen Merkmalen
              identifiziert werden kann, die Ausdruck der physischen,
              physiologischen, genetischen, psychischen, wirtschaftlichen,
              kulturellen oder sozialen Identität dieser natürlichen Person
              sind.
              <br />
              „Verarbeitung“ ist jeder mit oder ohne Hilfe automatisierter
              Verfahren ausgeführte Vorgang oder jede solche Vorgangsreihe im
              Zusammenhang mit personenbezogenen Daten. Der Begriff reicht weit
              und umfasst praktisch jeden Umgang mit Daten.
              <br />
              „Pseudonymisierung“ die Verarbeitung personenbezogener Daten in
              einer Weise, dass die personenbezogenen Daten ohne Hinzuziehung
              zusätzlicher Informationen nicht mehr einer spezifischen
              betroffenen Person zugeordnet werden können, sofern diese
              zusätzlichen Informationen gesondert aufbewahrt werden und
              technischen und organisatorischen Maßnahmen unterliegen, die
              gewährleisten, dass die personenbezogenen Daten nicht einer
              identifizierten oder identifizierbaren natürlichen Person
              zugewiesen werden.
              <br />
              „Profiling“ jede Art der automatisierten Verarbeitung
              personenbezogener Daten, die darin besteht, dass diese
              personenbezogenen Daten verwendet werden, um bestimmte persönliche
              Aspekte, die sich auf eine natürliche Person beziehen, zu
              bewerten, insbesondere um Aspekte bezüglich Arbeitsleistung,
              wirtschaftliche Lage, Gesundheit, persönliche Vorlieben,
              Interessen, Zuverlässigkeit, Verhalten, Aufenthaltsort oder
              Ortswechsel dieser natürlichen Person zu analysieren oder
              vorherzusagen.
              <br />
              Als „Verantwortlicher“ wird die natürliche oder juristische
              Person, Behörde, Einrichtung oder andere Stelle, die allein oder
              gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung
              von personenbezogenen Daten entscheidet, bezeichnet.
              <br />
              „Auftragsverarbeiter“ eine natürliche oder juristische Person,
              Behörde, Einrichtung oder andere Stelle, die personenbezogene
              Daten im Auftrag des Verantwortlichen verarbeitet.
            </Typography>
          </div>
          <div className={classes.heading}>
            <Typography variant="display1">
              Maßgebliche Rechtsgrundlagen
            </Typography>
          </div>
          <div className={classes.blocksatz}>
            <Typography variant="subheading">
              Nach Maßgabe des Art. 13 DSGVO teilen wir Ihnen die
              Rechtsgrundlagen unserer Datenverarbeitungen mit. Für Nutzer aus
              dem Geltungsbereich der Datenschutzgrundverordnung (DSGVO), d.h.
              der EU und des EWG gilt, sofern die Rechtsgrundlage in der
              Datenschutzerklärung nicht genannt wird, Folgendes: Die
              Rechtsgrundlage für die Einholung von Einwilligungen ist Art. 6
              Abs. 1 lit. a und Art. 7 DSGVO; Die Rechtsgrundlage für die
              Verarbeitung zur Erfüllung unserer Leistungen und Durchführung
              vertraglicher Maßnahmen sowie Beantwortung von Anfragen ist Art. 6
              Abs. 1 lit. b DSGVO; Die Rechtsgrundlage für die Verarbeitung zur
              Erfüllung unserer rechtlichen Verpflichtungen ist Art. 6 Abs. 1
              lit. c DSGVO;
              <br />
              Für den Fall, dass lebenswichtige Interessen der betroffenen
              Person oder einer anderen natürlichen Person eine Verarbeitung
              personenbezogener Daten erforderlich machen, dient Art. 6 Abs. 1
              lit. d DSGVO als Rechtsgrundlage.
              <br />
              Die Rechtsgrundlage für die erforderliche Verarbeitung zur
              Wahrnehmung einer Aufgabe, die im öffentlichen Interesse liegt
              oder in Ausübung öffentlicher Gewalt erfolgt, die dem
              Verantwortlichen übertragen wurde ist Art. 6 Abs. 1 lit. e DSGVO.
              <br />
              Die Rechtsgrundlage für die Verarbeitung zur Wahrung unserer
              berechtigten Interessen ist Art. 6 Abs. 1 lit. f DSGVO.
              <br />
              Die Verarbeitung von Daten zu anderen Zwecken als denen, zu denen
              sie ehoben wurden, bestimmt sich nach den Vorgaben des Art 6 Abs.
              4 DSGVO. Die Verarbeitung von besonderen Kategorien von Daten
              (entsprechend Art. 9 Abs. 1 DSGVO) bestimmt sich nach den Vorgaben
              des Art. 9 Abs. 2 DSGVO.
            </Typography>
          </div>
          <div className={classes.heading}>
            <Typography variant="display1">Sicherheitsmaßnahmen</Typography>
          </div>
          <div className={classes.blocksatz}>
            <Typography variant="subheading">
              Wir treffen nach Maßgabe der gesetzlichen Vorgabenunter
              Berücksichtigung des Stands der Technik, der
              Implementierungskosten und der Art, des Umfangs, der Umstände und
              der Zwecke der Verarbeitung sowie der unterschiedlichen
              Eintrittswahrscheinlichkeit und Schwere des Risikos für die Rechte
              und Freiheiten natürlicher Personen, geeignete technische und
              organisatorische Maßnahmen, um ein dem Risiko angemessenes
              Schutzniveau zu gewährleisten.
              <br />
              Zu den Maßnahmen gehören insbesondere die Sicherung der
              Vertraulichkeit, Integrität und Verfügbarkeit von Daten durch
              Kontrolle des physischen Zugangs zu den Daten, als auch des sie
              betreffenden Zugriffs, der Eingabe, Weitergabe, der Sicherung der
              Verfügbarkeit und ihrer Trennung. Des Weiteren haben wir Verfahren
              eingerichtet, die eine Wahrnehmung von Betroffenenrechten,
              Löschung von Daten und Reaktion auf Gefährdung der Daten
              gewährleisten. Ferner berücksichtigen wir den Schutz
              personenbezogener Daten bereits bei der Entwicklung, bzw. Auswahl
              von Hardware, Software sowie Verfahren, entsprechend dem Prinzip
              des Datenschutzes durch Technikgestaltung und durch
              datenschutzfreundliche Voreinstellungen.
            </Typography>
          </div>
          <div className={classes.heading}>
            <Typography variant="display1">Zusammenarbeit mit Auftragsverarbeitern, gemeinsam Verantwortlichen und Dritten
            </Typography>
          </div>
          <div className={classes.blocksatz}>
            <Typography variant="subheading">
              Sofern wir im Rahmen unserer Verarbeitung Daten gegenüber anderen
              Personen und Unternehmen (Auftragsverarbeitern, gemeinsam
              Verantwortlichen oder Dritten) offenbaren, sie an diese
              übermitteln oder ihnen sonst Zugriff auf die Daten gewähren,
              erfolgt dies nur auf Grundlage einer gesetzlichen Erlaubnis (z.B.
              wenn eine Übermittlung der Daten an Dritte, wie an
              Zahlungsdienstleister, zur Vertragserfüllung erforderlich ist),
              Nutzer eingewilligt haben, eine rechtliche Verpflichtung dies
              vorsieht oder auf Grundlage unserer berechtigten Interessen (z.B.
              beim Einsatz von Beauftragten, Webhostern, etc.).
              <br />
              Sofern wir Daten anderen Unternehmen unserer Unternehmensgruppe
              offenbaren, übermitteln oder ihnen sonst den Zugriff gewähren,
              erfolgt dies insbesondere zu administrativen Zwecken als
              berechtigtes Interesse und darüberhinausgehend auf einer den
              gesetzlichen Vorgaben entsprechenden Grundlage.
            </Typography>
          </div>
          <div className={classes.heading}>
            <Typography variant="display1">
              Übermittlungen in Drittländer
            </Typography>
          </div>
          <div className={classes.blocksatz}>
            <Typography variant="subheading">
              Sofern wir Daten in einem Drittland (d.h. außerhalb der
              Europäischen Union (EU), des Europäischen Wirtschaftsraums (EWR)
              oder der Schweizer Eidgenossenschaft) verarbeiten oder dies im
              Rahmen der Inanspruchnahme von Diensten Dritter oder Offenlegung,
              bzw. Übermittlung von Daten an andere Personen oder Unternehmen
              geschieht, erfolgt dies nur, wenn es zur Erfüllung unserer
              (vor)vertraglichen Pflichten, auf Grundlage Ihrer Einwilligung,
              aufgrund einer rechtlichen Verpflichtung oder auf Grundlage
              unserer berechtigten Interessen geschieht. Vorbehaltlich
              gesetzlicher oder vertraglicher Erlaubnisse, verarbeiten oder
              lassen wir die Daten in einem Drittland nur beim Vorliegen der
              gesetzlichen Voraussetzungen. D.h. die Verarbeitung erfolgt z.B.
              auf Grundlage besonderer Garantien, wie der offiziell anerkannten
              Feststellung eines der EU entsprechenden Datenschutzniveaus (z.B.
              für die USA durch das „Privacy Shield“) oder Beachtung offiziell
              anerkannter spezieller vertraglicher Verpflichtungen.
              <br />
            </Typography>
          </div>
          <div className={classes.heading}>
            <Typography variant="display1">
              Rechte der betroffenen Personen
            </Typography>
          </div>
          <div className={classes.blocksatz}>
            <Typography variant="subheading">
              Sie haben das Recht, eine Bestätigung darüber zu verlangen, ob
              betreffende Daten verarbeitet werden und auf Auskunft über diese
              Daten sowie auf weitere Informationen und Kopie der Daten
              entsprechend den gesetzlichen Vorgaben.
              <br />
              Sie haben entsprechend. den gesetzlichen Vorgaben das Recht, die
              Vervollständigung der Sie betreffenden Daten oder die Berichtigung
              der Sie betreffenden unrichtigen Daten zu verlangen.
              <br />
              Sie haben nach Maßgabe der gesetzlichen Vorgaben das Recht zu
              verlangen, dass betreffende Daten unverzüglich gelöscht werden,
              bzw. alternativ nach Maßgabe der gesetzlichen Vorgaben eine
              Einschränkung der Verarbeitung der Daten zu verlangen.
              <br />
              Sie haben das Recht zu verlangen, dass die Sie betreffenden Daten,
              die Sie uns bereitgestellt haben nach Maßgabe der gesetzlichen
              Vorgaben zu erhalten und deren Übermittlung an andere
              Verantwortliche zu fordern.
              <br />
              Sie haben ferner nach Maßgabe der gesetzlichen Vorgaben das Recht,
              eine Beschwerde bei der zuständigen Aufsichtsbehörde einzureichen.
            </Typography>
          </div>
          <div className={classes.heading}>
            <Typography variant="display1">Widerrufsrecht</Typography>
          </div>
          <div className={classes.blocksatz}>
            <Typography variant="subheading">
              Sie können der künftigen Verarbeitung der Sie betreffenden Daten
              nach Maßgabe der gesetzlichen Vorgaben jederzeit widersprechen.
              Der Widerspruch kann insbesondere gegen die Verarbeitung für
              Zwecke der Direktwerbung erfolgen.
            </Typography>
          </div>
          <div className={classes.heading}>
            <Typography variant="display1">
              Cookies und Widerspruchsrecht bei Direktwerbung
            </Typography>
          </div>
          <div className={classes.blocksatz}>
            <Typography variant="subheading">
              Als „Cookies“ werden kleine Dateien bezeichnet, die auf Rechnern
              der Nutzer gespeichert werden. Innerhalb der Cookies können
              unterschiedliche Angaben gespeichert werden. Ein Cookie dient
              primär dazu, die Angaben zu einem Nutzer (bzw. dem Gerät auf dem
              das Cookie gespeichert ist) während oder auch nach seinem Besuch
              innerhalb eines Onlineangebotes zu speichern. Als temporäre
              Cookies, bzw. „Session-Cookies“ oder „transiente Cookies“, werden
              Cookies bezeichnet, die gelöscht werden, nachdem ein Nutzer ein
              Onlineangebot verlässt und seinen Browser schließt. In einem
              solchen Cookie kann z.B. der Inhalt eines Warenkorbs in einem
              Onlineshop oder ein Login-Status gespeichert werden. Als
              „permanent“ oder „persistent“ werden Cookies bezeichnet, die auch
              nach dem Schließen des Browsers gespeichert bleiben. So kann z.B.
              der Login-Status gespeichert werden, wenn die Nutzer diese nach
              mehreren Tagen aufsuchen. Ebenso können in einem solchen Cookie
              die Interessen der Nutzer gespeichert werden, die für
              Reichweitenmessung oder Marketingzwecke verwendet werden. Als
              „Third-Party-Cookie“ werden Cookies bezeichnet, die von anderen
              Anbietern als dem Verantwortlichen, der das Onlineangebot
              betreibt, angeboten werden (andernfalls, wenn es nur dessen
              Cookies sind spricht man von „First-Party Cookies“).
              <br />
              Wir können temporäre und permanente Cookies einsetzen und klären
              hierüber im Rahmen unserer Datenschutzerklärung auf.
              <br />
              Falls die Nutzer nicht möchten, dass Cookies auf ihrem Rechner
              gespeichert werden, werden sie gebeten die entsprechende Option in
              den Systemeinstellungen ihres Browsers zu deaktivieren.
              Gespeicherte Cookies können in den Systemeinstellungen des
              Browsers gelöscht werden. Der Ausschluss von Cookies kann zu
              Funktionseinschränkungen dieses Onlineangebotes führen.
              <br />
              Ein genereller Widerspruch gegen den Einsatz der zu Zwecken des
              Onlinemarketing eingesetzten Cookies kann bei einer Vielzahl der
              Dienste, vor allem im Fall des Trackings, oder über die
              US-amerikanische Seite{" "}
              <LinkBrand
                href="http://www.aboutads.info/choices/ "
                alt="http://www.aboutads.info/choices/ "
              >
                {" "}
                www.aboutads.info{" "}
              </LinkBrand>{" "}
              oder die EU-Seite{" "}
              <LinkBrand
                href="http://www.youronlinechoices.com/"
                alt="http://www.youronlinechoices.com/"
              >
                {" "}
                www.youronlinechoices.com{" "}
              </LinkBrand>{" "}
              erklärt werden. Des Weiteren kann die Speicherung von Cookies
              mittels deren Abschaltung in den Einstellungen des Browsers
              erreicht werden. Bitte beachten Sie, dass dann gegebenenfalls
              nicht alle Funktionen dieses Onlineangebotes genutzt werden
              können.
            </Typography>
          </div>
          <div className={classes.heading}>
            <Typography variant="display1">Löschung von Daten</Typography>
          </div>
          <div className={classes.blocksatz}>
            <Typography variant="subheading">
              Die von uns verarbeiteten Daten werden nach Maßgabe der
              gesetzlichen Vorgaben gelöscht oder in ihrer Verarbeitung
              eingeschränkt. Sofern nicht im Rahmen dieser Datenschutzerklärung
              ausdrücklich angegeben, werden die bei uns gespeicherten Daten
              gelöscht, sobald sie für ihre Zweckbestimmung nicht mehr
              erforderlich sind und der Löschung keine gesetzlichen
              Aufbewahrungspflichten entgegenstehen.
              <br />
              Sofern die Daten nicht gelöscht werden, weil sie für andere und
              gesetzlich zulässige Zwecke erforderlich sind, wird deren
              Verarbeitung eingeschränkt. D.h. die Daten werden gesperrt und
              nicht für andere Zwecke verarbeitet. Das gilt z.B. für Daten, die
              aus handels- oder steuerrechtlichen Gründen aufbewahrt werden
              müssen.
            </Typography>
          </div>
          <div className={classes.heading}>
            <Typography variant="display1">
              Änderungen und Aktualisierungen der Datenschutzerklärung
            </Typography>
          </div>
          <div className={classes.blocksatz}>
            <Typography variant="subheading">
              Wir bitten Sie sich regelmäßig über den Inhalt unserer
              Datenschutzerklärung zu informieren. Wir passen die
              Datenschutzerklärung an, sobald die Änderungen der von uns
              durchgeführten Datenverarbeitungen dies erforderlich machen. Wir
              informieren Sie, sobald durch die Änderungen eine
              Mitwirkungshandlung Ihrerseits (z.B. Einwilligung) oder eine
              sonstige individuelle Benachrichtigung erforderlich wird.
            </Typography>
          </div>
          <div className={classes.heading}>
            <Typography variant="display1">
              Geschäftsbezogene Verarbeitung
            </Typography>
          </div>
          <div className={classes.blocksatz}>
            <Typography variant="subheading">
              Zusätzlich verarbeiten wir <br />
              - Vertragsdaten (z.B., Vertragsgegenstand, Laufzeit,
              Kundenkategorie). <br />
              - Zahlungsdaten (z.B., Bankverbindung, Zahlungshistorie) <br />
              von unseren Kunden, Interessenten und Geschäftspartner zwecks
              Erbringung vertraglicher Leistungen, Service und Kundenpflege,
              Marketing, Werbung und Marktforschung.
            </Typography>
          </div>
          <div className={classes.heading}>
            <Typography variant="display1">
              Therapeutische Leistungen und Coaching
            </Typography>
          </div>
          <div className={classes.blocksatz}>
            <Typography variant="subheading">
              Wir verarbeiten die Daten unserer Klienten und Interessenten und
              anderer Auftraggeber oder Vertragspartner (einheitlich bezeichnet
              als „Klienten“) entsprechend Art. 6 Abs. 1 lit. b) DSGVO, um ihnen
              gegenüber unsere vertraglichen oder vorvertraglichen Leistungen zu
              erbringen. Die hierbei verarbeiteten Daten, die Art, der Umfang
              und der Zweck und die Erforderlichkeit ihrer Verarbeitung,
              bestimmen sich nach dem zugrundeliegenden Vertragsverhältnis. Zu
              den verarbeiteten Daten gehören grundsätzlich Bestands- und
              Stammdaten der Klienten (z.B., Name, Adresse, etc.), als auch die
              Kontaktdaten (z.B., E-Mailadresse, Telefon, etc.), die
              Vertragsdaten (z.B., in Anspruch genommene Leistungen, Honorare,
              Namen von Kontaktpersonen, etc.) und Zahlungsdaten (z.B.,
              Bankverbindung, Zahlungshistorie, etc.).
              <br />
              Im Rahmen unserer Leistungen, können wir ferner besondere
              Kategorien von Daten gem. Art. 9 Abs. 1 DSGVO, insbesondere
              Angaben zur Gesundheit der Klienten, ggf. mit Bezug zu deren
              Sexualleben oder der sexuellen Orientierung, ethnischer Herkunft
              oder religiösen oder weltanschaulichen Überzeugungen, verarbeiten.
              Hierzu holen wir, sofern erforderlich, gem. Art. 6 Abs. 1 lit. a.,
              Art. 7, Art. 9 Abs. 2 lit. a. DSGVO eine ausdrückliche
              Einwilligung der Klienten ein und verarbeiten die besonderen
              Kategorien von Daten ansonsten zu Zwecken der Gesundheitsvorsorge
              auf Grundlage des Art. 9 Abs. 2 lit h. DSGVO, § 22 Abs. 1 Nr. 1 b.
              BDSG.
              <br />
              Sofern für die Vertragserfüllung oder gesetzlich erforderlich,
              offenbaren oder übermitteln wir die Daten der Klienten im Rahmen
              der Kommunikation mit anderen Fachkräften, an der
              Vertragserfüllung erforderlicherweise oder typischerweise
              beteiligten Dritten, wie z.B. Abrechnungsstellen oder
              vergleichbare Dienstleister, sofern dies der Erbringung unserer
              Leistungen gem. Art. 6 Abs. 1 lit b. DSGVO dient, gesetzlich gem.
              Art. 6 Abs. 1 lit c. DSGVO vorgeschrieben ist, unseren Interessen
              oder denen der Klienten an einer effizienten und kostengünstigen
              Gesundheitsversorgung als berechtigtes Interesse gem. Art. 6 Abs.
              1 lit f. DSGVO dient oder gem. Art. 6 Abs. 1 lit d. DSGVO
              notwendig ist. um lebenswichtige Interessen der Klienten oder
              einer anderen natürlichen Person zu schützen oder im Rahmen einer
              Einwilligung gem. Art. 6 Abs. 1 lit. a., Art. 7 DSGVO.
              <br />
              Die Löschung der Daten erfolgt, wenn die Daten zur Erfüllung
              vertraglicher oder gesetzlicher Fürsorgepflichten sowie Umgang mit
              etwaigen Gewährleistungs- und vergleichbaren Pflichten nicht mehr
              erforderlich ist, wobei die Erforderlichkeit der Aufbewahrung der
              Daten alle drei Jahre überprüft wird; im Übrigen gelten die
              gesetzlichen Aufbewahrungspflichten.
            </Typography>
          </div>

          <div className={classes.heading}>
            <Typography variant="display1"> Vertragliche Leistungen</Typography>
          </div>
          <div className={classes.blocksatz}>
            <Typography variant="subheading">
              Wir verarbeiten die Daten unserer Vertragspartner und
              Interessenten sowie anderer Auftraggeber, Kunden, Mandanten,
              Klienten oder Vertragspartner (einheitlich bezeichnet als
              „Vertragspartner“) entsprechend Art. 6 Abs. 1 lit. b. DSGVO, um
              ihnen gegenüber unsere vertraglichen oder vorvertraglichen
              Leistungen zu erbringen. Die hierbei verarbeiteten Daten, die Art,
              der Umfang und der Zweck und die Erforderlichkeit ihrer
              Verarbeitung, bestimmen sich nach dem zugrundeliegenden
              Vertragsverhältnis.
              <br />
              Zu den verarbeiteten Daten gehören die Stammdaten unserer
              Vertragspartner (z.B., Namen und Adressen), Kontaktdaten (z.B.
              E-Mailadressen und Telefonnummern) sowie Vertragsdaten (z.B., in
              Anspruch genommene Leistungen, Vertragsinhalte, vertragliche
              Kommunikation, Namen von Kontaktpersonen) und Zahlungsdaten (z.B.,
              Bankverbindungen, Zahlungshistorie).
              <br />
              Besondere Kategorien personenbezogener Daten verarbeiten wir
              grundsätzlich nicht, außer wenn diese Bestandteile einer
              beauftragten oder vertragsgemäßen Verarbeitung sind.
              <br />
              Wir verarbeiten Daten, die zur Begründung und Erfüllung der
              vertraglichen Leistungen erforderlich sind und weisen auf die
              Erforderlichkeit ihrer Angabe, sofern diese für die
              Vertragspartner nicht evident ist, hin. Eine Offenlegung an
              externe Personen oder Unternehmen erfolgt nur, wenn sie im Rahmen
              eines Vertrags erforderlich ist. Bei der Verarbeitung der uns im
              Rahmen eines Auftrags überlassenen Daten, handeln wir entsprechend
              den Weisungen der Auftraggeber sowie der gesetzlichen Vorgaben.
              <br />
              Im Rahmen der Inanspruchnahme unserer Onlinedienste, können wir
              die IP-Adresse und den Zeitpunkt der jeweiligen Nutzerhandlung
              speichern. Die Speicherung erfolgt auf Grundlage unserer
              berechtigten Interessen, als auch der Interessen der Nutzer am
              Schutz vor Missbrauch und sonstiger unbefugter Nutzung. Eine
              Weitergabe dieser Daten an Dritte erfolgt grundsätzlich nicht,
              außer sie ist zur Verfolgung unserer Ansprüche gem. Art. 6 Abs. 1
              lit. f. DSGVO erforderlich oder es besteht hierzu eine gesetzliche
              Verpflichtung gem. Art. 6 Abs. 1 lit. c. DSGVO.
              <br />
              Die Löschung der Daten erfolgt, wenn die Daten zur Erfüllung
              vertraglicher oder gesetzlicher Fürsorgepflichten sowie für den
              Umgang mit etwaigen Gewährleistungs- und vergleichbaren Pflichten
              nicht mehr erforderlich sind, wobei die Erforderlichkeit der
              Aufbewahrung der Daten alle drei Jahre überprüft wird; im Übrigen
              gelten die gesetzlichen Aufbewahrungspflichten.
            </Typography>
          </div>

          <div className={classes.heading}>
            <Typography variant="display1">
              Administration, Finanzbuchhaltung, Büroorganisation,
              Kontaktverwaltung
            </Typography>
          </div>
          <div className={classes.blocksatz}>
            <Typography variant="subheading">
              Wir verarbeiten Daten im Rahmen von Verwaltungsaufgaben sowie
              Organisation unseres Betriebs, Finanzbuchhaltung und Befolgung der
              gesetzlichen Pflichten, wie z.B. der Archivierung. Hierbei
              verarbeiten wir dieselben Daten, die wir im Rahmen der Erbringung
              unserer vertraglichen Leistungen verarbeiten. Die
              Verarbeitungsgrundlagen sind Art. 6 Abs. 1 lit. c. DSGVO, Art. 6
              Abs. 1 lit. f. DSGVO. Von der Verarbeitung sind Kunden,
              Interessenten, Geschäftspartner und Websitebesucher betroffen. Der
              Zweck und unser Interesse an der Verarbeitung liegt in der
              Administration, Finanzbuchhaltung, Büroorganisation, Archivierung
              von Daten, also Aufgaben die der Aufrechterhaltung unserer
              Geschäftstätigkeiten, Wahrnehmung unserer Aufgaben und Erbringung
              unserer Leistungen dienen. Die Löschung der Daten im Hinblick auf
              vertragliche Leistungen und die vertragliche Kommunikation
              entspricht den, bei diesen Verarbeitungstätigkeiten genannten
              Angaben.
              <br />
              Wir offenbaren oder übermitteln hierbei Daten an die
              Finanzverwaltung, Berater, wie z.B., Steuerberater oder
              Wirtschaftsprüfer sowie weitere Gebührenstellen und
              Zahlungsdienstleister.
              <br />
              Ferner speichern wir auf Grundlage unserer
              betriebswirtschaftlichen Interessen Angaben zu Lieferanten,
              Veranstaltern und sonstigen Geschäftspartnern, z.B. zwecks
              späterer Kontaktaufnahme. Diese mehrheitlich unternehmensbezogenen
              Daten, speichern wir grundsätzlich dauerhaft.
            </Typography>
          </div>

          <div className={classes.heading}>
            <Typography variant="display1">
              Datenschutzhinweise im Bewerbungsverfahren
            </Typography>
          </div>
          <div className={classes.blocksatz}>
            <Typography variant="subheading">
              Wir verarbeiten die Bewerberdaten nur zum Zweck und im Rahmen des
              Bewerbungsverfahrens im Einklang mit den gesetzlichen Vorgaben.
              Die Verarbeitung der Bewerberdaten erfolgt zur Erfüllung unserer
              (vor)vertraglichen Verpflichtungen im Rahmen des
              Bewerbungsverfahrens im Sinne des Art. 6 Abs. 1 lit. b. DSGVO Art.
              6 Abs. 1 lit. f. DSGVO sofern die Datenverarbeitung z.B. im Rahmen
              von rechtlichen Verfahren für uns erforderlich wird (in
              Deutschland gilt zusätzlich § 26 BDSG).
              <br />
              Das Bewerbungsverfahren setzt voraus, dass Bewerber uns die
              Bewerberdaten mitteilen. Die notwendigen Bewerberdaten sind,
              sofern wir ein Onlineformular anbieten gekennzeichnet, ergeben
              sich sonst aus den Stellenbeschreibungen und grundsätzlich gehören
              dazu die Angaben zur Person, Post- und Kontaktadressen und die zur
              Bewerbung gehörenden Unterlagen, wie Anschreiben, Lebenslauf und
              die Zeugnisse. Daneben können uns Bewerber freiwillig zusätzliche
              Informationen mitteilen.
              <br />
              Mit der Übermittlung der Bewerbung an uns, erklären sich die
              Bewerber mit der Verarbeitung ihrer Daten zu Zwecken des
              Bewerbungsverfahrens entsprechend der in dieser
              Datenschutzerklärung dargelegten Art und Umfang einverstanden.
              <br />
              Soweit im Rahmen des Bewerbungsverfahrens freiwillig besondere
              Kategorien von personenbezogenen Daten im Sinne des Art. 9 Abs. 1
              DSGVO mitgeteilt werden, erfolgt deren Verarbeitung zusätzlich
              nach Art. 9 Abs. 2 lit. b DSGVO (z.B. Gesundheitsdaten, wie z.B.
              Schwerbehinderteneigenschaft oder ethnische Herkunft). Soweit im
              Rahmen des Bewerbungsverfahrens besondere Kategorien von
              personenbezogenen Daten im Sinne des Art. 9 Abs. 1 DSGVO bei
              Bewerbern angefragt werden, erfolgt deren Verarbeitung zusätzlich
              nach Art. 9 Abs. 2 lit. a DSGVO (z.B. Gesundheitsdaten, wenn diese
              für die Berufsausübung erforderlich sind).
              <br />
              Sofern zur Verfügung gestellt, können uns Bewerber ihre
              Bewerbungen mittels eines Onlineformulars auf unserer Website
              übermitteln. Die Daten werden entsprechend dem Stand der Technik
              verschlüsselt an uns übertragen.
              <br />
              Ferner können Bewerber uns ihre Bewerbungen via E-Mail
              übermitteln. Hierbei bitten wir jedoch zu beachten, dass E-Mails
              grundsätzlich nicht verschlüsselt versendet werden und die
              Bewerber selbst für die Verschlüsselung sorgen müssen. Wir können
              daher für den Übertragungsweg der Bewerbung zwischen dem Absender
              und dem Empfang auf unserem Server keine Verantwortung übernehmen
              und empfehlen daher eher ein Online-Formular oder den postalischen
              Versand zu nutzen. Denn statt der Bewerbung über das
              Online-Formular und E-Mail, steht den Bewerbern weiterhin die
              Möglichkeit zur Verfügung, uns die Bewerbung auf dem Postweg
              zuzusenden.
              <br />
              Die von den Bewerbern zur Verfügung gestellten Daten, können im
              Fall einer erfolgreichen Bewerbung für die Zwecke des
              Beschäftigungsverhältnisses von uns weiterverarbeitet werden.
              Andernfalls, sofern die Bewerbung auf ein Stellenangebot nicht
              erfolgreich ist, werden die Daten der Bewerber gelöscht. Die Daten
              der Bewerber werden ebenfalls gelöscht, wenn eine Bewerbung
              zurückgezogen wird, wozu die Bewerber jederzeit berechtigt sind.
              <br />
              Die Löschung erfolgt, vorbehaltlich eines berechtigten Widerrufs
              der Bewerber, nach dem Ablauf eines Zeitraums von sechs Monaten,
              damit wir etwaige Anschlussfragen zu der Bewerbung beantworten und
              unseren Nachweispflichten aus dem Gleichbehandlungsgesetz genügen
              können. Rechnungen über etwaige Reisekostenerstattung werden
              entsprechend den steuerrechtlichen Vorgaben archiviert.
            </Typography>
          </div>

          <div className={classes.heading}>
            <Typography variant="display1">Kommentarabonnements</Typography>
          </div>
          <div className={classes.blocksatz}>
            <Typography variant="subheading">
              Die Nachfolgekommentare können durch Nutzer mit deren Einwilligung
              gem. Art. 6 Abs. 1 lit. a DSGVO abonniert werden. Die Nutzer
              erhalten eine Bestätigungsemail, um zu überprüfen, ob sie der
              Inhaber der eingegebenen Emailadresse sind. Nutzer können laufende
              Kommentarabonnements jederzeit abbestellen. Die Bestätigungsemail
              wird Hinweise zu den Widerrufsmöglichkeiten enthalten. Für die
              Zwecke des Nachweises der Einwilligung der Nutzer, speichern wir
              den Anmeldezeitpunkt nebst der IP-Adresse der Nutzer und löschen
              diese Informationen, wenn Nutzer sich von dem Abonnement abmelden.
              <br />
              Sie können den Empfang unseres Abonnements jederzeit kündigen,
              d.h. Ihre Einwilligungen widerrufen. Wir können die ausgetragenen
              E-Mailadressen bis zu drei Jahren auf Grundlage unserer
              berechtigten Interessen speichern bevor wir sie löschen, um eine
              ehemals gegebene Einwilligung nachweisen zu können. Die
              Verarbeitung dieser Daten wird auf den Zweck einer möglichen
              Abwehr von Ansprüchen beschränkt. Ein individueller
              Löschungsantrag ist jederzeit möglich, sofern zugleich das
              ehemalige Bestehen einer Einwilligung bestätigt wird.
            </Typography>
          </div>

          <div className={classes.heading}>
            <Typography variant="display1">Kontaktaufnahme</Typography>
          </div>
          <div className={classes.blocksatz}>
            <Typography variant="subheading">
              Bei der Kontaktaufnahme mit uns (z.B. per Kontaktformular, E-Mail,
              Telefon oder via sozialer Medien) werden die Angaben des Nutzers
              zur Bearbeitung der Kontaktanfrage und deren Abwicklung gem. Art.
              6 Abs. 1 lit. b. (im Rahmen vertraglicher-/vorvertraglicher
              Beziehungen), Art. 6 Abs. 1 lit. f. (andere Anfragen) DSGVO
              verarbeitet.. Die Angaben der Nutzer können in einem
              Customer-Relationship-Management System ("CRM System") oder
              vergleichbarer Anfragenorganisation gespeichert werden.
              <br />
              Wir löschen die Anfragen, sofern diese nicht mehr erforderlich
              sind. Wir überprüfen die Erforderlichkeit alle zwei Jahre; Ferner
              gelten die gesetzlichen Archivierungspflichten.
            </Typography>
          </div>

          <div className={classes.heading}>
            <Typography variant="display1">Newsletter</Typography>
          </div>
          <div className={classes.blocksatz}>
            <Typography variant="subheading">
              Mit den nachfolgenden Hinweisen informieren wir Sie über die
              Inhalte unseres Newsletters sowie das Anmelde-, Versand- und das
              statistische Auswertungsverfahren sowie Ihre Widerspruchsrechte
              auf. Indem Sie unseren Newsletter abonnieren, erklären Sie sich
              mit dem Empfang und den beschriebenen Verfahren einverstanden.
              <br />
              Inhalt des Newsletters: Wir versenden Newsletter, E-Mails und
              weitere elektronische Benachrichtigungen mit werblichen
              Informationen (nachfolgend „Newsletter“) nur mit der Einwilligung
              der Empfänger oder einer gesetzlichen Erlaubnis. Sofern im Rahmen
              einer Anmeldung zum Newsletter dessen Inhalte konkret umschrieben
              werden, sind sie für die Einwilligung der Nutzer maßgeblich. Im
              Übrigen enthalten unsere Newsletter Informationen zu unseren
              Leistungen und uns.
              <br />
              Double-Opt-In und Protokollierung: Die Anmeldung zu unserem
              Newsletter erfolgt in einem sog. Double-Opt-In-Verfahren. D.h. Sie
              erhalten nach der Anmeldung eine E-Mail, in der Sie um die
              Bestätigung Ihrer Anmeldung gebeten werden. Diese Bestätigung ist
              notwendig, damit sich niemand mit fremden E-Mailadressen anmelden
              kann. Die Anmeldungen zum Newsletter werden protokolliert, um den
              Anmeldeprozess entsprechend den rechtlichen Anforderungen
              nachweisen zu können. Hierzu gehört die Speicherung des Anmelde-
              und des Bestätigungszeitpunkts, als auch der IP-Adresse. Ebenso
              werden die Änderungen Ihrer bei dem Versanddienstleister
              gespeicherten Daten protokolliert.
              <br />
              Anmeldedaten: Um sich für den Newsletter anzumelden, reicht es
              aus, wenn Sie Ihre E-Mailadresse angeben. Optional bitten wir Sie
              einen Namen, zwecks persönlicher Ansprache im Newsletters
              anzugeben.
              <br />
              Der Versand des Newsletters und die mit ihm verbundene
              Erfolgsmessung erfolgen auf Grundlage einer Einwilligung der
              Empfänger gem. Art. 6 Abs. 1 lit. a, Art. 7 DSGVO i.V.m § 7 Abs. 2
              Nr. 3 UWG oder falls eine Einwilligung nicht erforderlich ist, auf
              Grundlage unserer berechtigten Interessen am Direktmarketing gem.
              Art. 6 Abs. 1 lt. f. DSGVO i.V.m. § 7 Abs. 3 UWG.
              <br />
              Die Protokollierung des Anmeldeverfahrens erfolgt auf Grundlage
              unserer berechtigten Interessen gem. Art. 6 Abs. 1 lit. f DSGVO.
              Unser Interesse richtet sich auf den Einsatz eines
              nutzerfreundlichen sowie sicheren Newslettersystems, das sowohl
              unseren geschäftlichen Interessen dient, als auch den Erwartungen
              der Nutzer entspricht und uns ferner den Nachweis von
              Einwilligungen erlaubt.
              <br />
              Kündigung/Widerruf - Sie können den Empfang unseres Newsletters
              jederzeit kündigen, d.h. Ihre Einwilligungen widerrufen. Einen
              Link zur Kündigung des Newsletters finden Sie am Ende eines jeden
              Newsletters. Wir können die ausgetragenen E-Mailadressen bis zu
              drei Jahren auf Grundlage unserer berechtigten Interessen
              speichern bevor wir sie löschen, um eine ehemals gegebene
              Einwilligung nachweisen zu können. Die Verarbeitung dieser Daten
              wird auf den Zweck einer möglichen Abwehr von Ansprüchen
              beschränkt. Ein individueller Löschungsantrag ist jederzeit
              möglich, sofern zugleich das ehemalige Bestehen einer Einwilligung
              bestätigt wird.
            </Typography>
          </div>

          <div className={classes.heading}>
            <Typography variant="display1">
              Hosting und E-Mail-Versand
            </Typography>
          </div>
          <div className={classes.blocksatz}>
            <Typography variant="subheading">
              Die von uns in Anspruch genommenen Hosting-Leistungen dienen der
              Zurverfügungstellung der folgenden Leistungen: Infrastruktur- und
              Plattformdienstleistungen, Rechenkapazität, Speicherplatz und
              Datenbankdienste, E-Mail-Versand, Sicherheitsleistungen sowie
              technische Wartungsleistungen, die wir zum Zwecke des Betriebs
              dieses Onlineangebotes einsetzen.
              <br />
              Hierbei verarbeiten wir, bzw. unser Hostinganbieter Bestandsdaten,
              Kontaktdaten, Inhaltsdaten, Vertragsdaten, Nutzungsdaten, Meta-
              und Kommunikationsdaten von Kunden, Interessenten und Besuchern
              dieses Onlineangebotes auf Grundlage unserer berechtigten
              Interessen an einer effizienten und sicheren Zurverfügungstellung
              dieses Onlineangebotes gem. Art. 6 Abs. 1 lit. f DSGVO i.V.m. Art.
              28 DSGVO (Abschluss Auftragsverarbeitungsvertrag).
            </Typography>
          </div>

          <div className={classes.heading}>
            <Typography variant="display1">
              Erhebung von Zugriffsdaten und Logfiles
            </Typography>
          </div>
          <div className={classes.blocksatz}>
            <Typography variant="subheading">
              Wir, bzw. unser Hostinganbieter, erhebt auf Grundlage unserer
              berechtigten Interessen im Sinne des Art. 6 Abs. 1 lit. f. DSGVO
              Daten über jeden Zugriff auf den Server, auf dem sich dieser
              Dienst befindet (sogenannte Serverlogfiles). Zu den Zugriffsdaten
              gehören Name der abgerufenen Webseite, Datei, Datum und Uhrzeit
              des Abrufs, übertragene Datenmenge, Meldung über erfolgreichen
              Abruf, Browsertyp nebst Version, das Betriebssystem des Nutzers,
              Referrer URL (die zuvor besuchte Seite), IP-Adresse und der
              anfragende Provider.
              <br />
              Logfile-Informationen werden aus Sicherheitsgründen (z.B. zur
              Aufklärung von Missbrauchs- oder Betrugshandlungen) für die Dauer
              von maximal 7 Tagen gespeichert und danach gelöscht. Daten, deren
              weitere Aufbewahrung zu Beweiszwecken erforderlich ist, sind bis
              zur endgültigen Klärung des jeweiligen Vorfalls von der Löschung
              ausgenommen.
            </Typography>
          </div>

          <div className={classes.heading}>
            <Typography variant="display1">Google Analytics</Typography>
          </div>
          <div className={classes.blocksatz}>
            <Typography variant="subheading">
              Wir setzen auf Grundlage unserer berechtigten Interessen (d.h.
              Interesse an der Analyse, Optimierung und wirtschaftlichem Betrieb
              unseres Onlineangebotes im Sinne des Art. 6 Abs. 1 lit. f. DSGVO)
              Google Analytics, einen Webanalysedienst der Google LLC („Google“)
              ein. Google verwendet Cookies. Die durch das Cookie erzeugten
              Informationen über Benutzung des Onlineangebotes durch die Nutzer
              werden in der Regel an einen Server von Google in den USA
              übertragen und dort gespeichert.
              <br />
              Google ist unter dem Privacy-Shield-Abkommen zertifiziert und
              bietet hierdurch eine Garantie, das{" "}
              <LinkBrand
                href="https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&status=Active"
                alt="europäische Datenschutzrecht"
              >
                {" "}
                europäische Datenschutzrecht
              </LinkBrand>{" "}
              einzuhalten .
              <br />
              Google wird diese Informationen in unserem Auftrag benutzen, um
              die Nutzung unseres Onlineangebotes durch die Nutzer auszuwerten,
              um Reports über die Aktivitäten innerhalb dieses Onlineangebotes
              zusammenzustellen und um weitere, mit der Nutzung dieses
              Onlineangebotes und der Internetnutzung verbundene
              Dienstleistungen, uns gegenüber zu erbringen. Dabei können aus den
              verarbeiteten Daten pseudonyme Nutzungsprofile der Nutzer erstellt
              werden.
              <br />
              Wir setzen Google Analytics nur mit aktivierter IP-Anonymisierung
              ein. Das bedeutet, die IP-Adresse der Nutzer wird von Google
              innerhalb von Mitgliedstaaten der Europäischen Union oder in
              anderen Vertragsstaaten des Abkommens über den Europäischen
              Wirtschaftsraum gekürzt. Nur in Ausnahmefällen wird die volle
              IP-Adresse an einen Server von Google in den USA übertragen und
              dort gekürzt.
              <br />
              Die von dem Browser des Nutzers übermittelte IP-Adresse wird nicht
              mit anderen Daten von Google zusammengeführt. Die Nutzer können
              die Speicherung der Cookies durch eine entsprechende Einstellung
              ihrer Browser-Software verhindern; die Nutzer können darüber
              hinaus die Erfassung der durch das Cookie erzeugten und auf ihre
              Nutzung des Onlineangebotes bezogenen Daten an Google sowie die
              Verarbeitung dieser Daten durch Google verhindern, indem sie das
              unter folgendem Link verfügbare Browser-Plugin herunterladen und
              installieren:{" "}
              <LinkBrand
                href="http://tools.google.com/dlpage/gaoptout?hl=de"
                alt="Browser-Plugin"
              >
                {" "}
                Browser-Plugin
              </LinkBrand>
              .
              <br />
              Weitere Informationen zur Datennutzung durch Google, Einstellungs-
              und Widerspruchsmöglichkeiten, erfahren Sie in der{" "}
              <LinkBrand
                href="https://policies.google.com/technologies/ads"
                alt="Datenschutzerklärung von Google"
              >
                Datenschutzerklärung von Google{" "}
              </LinkBrand>{" "}
              sowie in den Einstellungen für die Darstellung von{" "}
              <LinkBrand
                href="https://adssettings.google.com/authenticated"
                alt="Werbeeinblendungen durch Google"
              >
                Werbeeinblendungen durch Google
              </LinkBrand>
              .
              <br />
              Die personenbezogenen Daten der Nutzer werden nach 14 Monaten
              gelöscht oder anonymisiert.
            </Typography>
          </div>

          <div className={classes.heading}>
            <Typography variant="display1">
              Onlinepräsenzen in sozialen Medien
            </Typography>
          </div>
          <div className={classes.blocksatz}>
            <Typography variant="subheading">
              Wir unterhalten Onlinepräsenzen innerhalb sozialer Netzwerke und
              Plattformen, um mit den dort aktiven Kunden, Interessenten und
              Nutzern kommunizieren und sie dort über unsere Leistungen
              informieren zu können.
              <br />
              Wir weisen darauf hin, dass dabei Daten der Nutzer außerhalb des
              Raumes der Europäischen Union verarbeitet werden können. Hierdurch
              können sich für die Nutzer Risiken ergeben, weil so z.B. die
              Durchsetzung der Rechte der Nutzer erschwert werden könnte. Im
              Hinblick auf US-Anbieter die unter dem Privacy-Shield zertifiziert
              sind, weisen wir darauf hin, dass sie sich damit verpflichten, die
              Datenschutzstandards der EU einzuhalten.
              <br />
              Ferner werden die Daten der Nutzer im Regelfall für
              Marktforschungs- und Werbezwecke verarbeitet. So können z.B. aus
              dem Nutzungsverhalten und sich daraus ergebenden Interessen der
              Nutzer Nutzungsprofile erstellt werden. Die Nutzungsprofile können
              wiederum verwendet werden, um z.B. Werbeanzeigen innerhalb und
              außerhalb der Plattformen zu schalten, die mutmaßlich den
              Interessen der Nutzer entsprechen. Zu diesen Zwecken werden im
              Regelfall Cookies auf den Rechnern der Nutzer gespeichert, in
              denen das Nutzungsverhalten und die Interessen der Nutzer
              gespeichert werden. Ferner können in den Nutzungsprofilen auch
              Daten unabhängig der von den Nutzern verwendeten Geräte
              gespeichert werden (insbesondere wenn die Nutzer Mitglieder der
              jeweiligen Plattformen sind und bei diesen eingeloggt sind).
              <br />
              Die Verarbeitung der personenbezogenen Daten der Nutzer erfolgt
              auf Grundlage unserer berechtigten Interessen an einer effektiven
              Information der Nutzer und Kommunikation mit den Nutzern gem. Art.
              6 Abs. 1 lit. f. DSGVO. Falls die Nutzer von den jeweiligen
              Anbietern um eine Einwilligung in die Datenverarbeitung gebeten
              werden (d.h. ihr Einverständnis z.B. über das Anhaken eines
              Kontrollkästchens oder Bestätigung einer Schaltfläche erklären)
              ist die Rechtsgrundlage der Verarbeitung Art. 6 Abs. 1 lit. a.,
              Art. 7 DSGVO.
              <br />
              Für eine detaillierte Darstellung der jeweiligen Verarbeitungen
              und der Widerspruchsmöglichkeiten (Opt-Out), verweisen wir auf die
              nachfolgend verlinkten Angaben der Anbieter.
              <br />
              Auch im Fall von Auskunftsanfragen und der Geltendmachung von
              Nutzerrechten, weisen wir darauf hin, dass diese am effektivsten
              bei den Anbietern geltend gemacht werden können. Nur die Anbieter
              haben jeweils Zugriff auf die Daten der Nutzer und können direkt
              entsprechende Maßnahmen ergreifen und Auskünfte geben. Sollten Sie
              dennoch Hilfe benötigen, dann können Sie sich an uns wenden.
              <br />- Facebook (Facebook Ireland Ltd., 4 Grand Canal Square,
              Grand Canal Harbour, Dublin 2, Irland) -{" "}
              <LinkBrand
                href="https://www.facebook.com/about/privacy/"
                alt="https://www.facebook.com/about/privacy/"
              >
                {" "}
                Datenschutzerklärung,{" "}
              </LinkBrand>{" "}
              <LinkBrand
                href="https://www.facebook.com/settings?tab=ads"
                alt="https://www.facebook.com/settings?tab=ads"
              >
                {" "}
                Opt-Out,{" "}
              </LinkBrand>
              <LinkBrand
                href="http://www.youronlinechoices.com"
                alt="http://www.youronlinechoices.com"
              >
                {" "}
              </LinkBrand>
              <LinkBrand
                href="https://www.privacyshield.gov/participant?id=a2zt0000000GnywAAC&status=Active"
                alt="https://www.privacyshield.gov/participant?id=a2zt0000000GnywAAC&status=Active"
              >
                {" "}
                Privacy Shield.{" "}
              </LinkBrand>
              <br />- Google/ YouTube (Google LLC, 1600 Amphitheatre Parkway,
              Mountain View, CA 94043, USA) –
              <LinkBrand
                href="https://policies.google.com/privacy"
                alt="https://policies.google.com/privacy"
              >
                {" "}
                Datenschutzerklärung,{" "}
              </LinkBrand>
              <LinkBrand
                href="https://adssettings.google.com/authenticated"
                alt="https://adssettings.google.com/authenticated"
              >
                {" "}
                Opt-Out,{" "}
              </LinkBrand>
              <LinkBrand
                href=" https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&status=Active"
                alt=" https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&status=Active"
              >
                {" "}
                Privacy Shield.{" "}
              </LinkBrand>
              <br />- Instagram (Instagram Inc., 1601 Willow Road, Menlo Park,
              CA, 94025, USA) –
              <LinkBrand
                href="http://instagram.com/about/legal/privacy/"
                alt="http://instagram.com/about/legal/privacy/"
              >
                {" "}
                Datenschutzerklärung / Opt-Out.{" "}
              </LinkBrand>
              <br />- Twitter (Twitter Inc., 1355 Market Street, Suite 900, San
              Francisco, CA 94103, USA) -
              <LinkBrand
                href="https://twitter.com/de/privacy"
                alt="https://twitter.com/de/privacy"
              >
                {" "}
                Datenschutzerklärung,{" "}
              </LinkBrand>
              <LinkBrand
                href="https://twitter.com/personalization"
                alt="https://twitter.com/personalization"
              >
                {" "}
                Opt-Out,{" "}
              </LinkBrand>
              <LinkBrand
                href="https://www.privacyshield.gov/participant?id=a2zt0000000TORzAAO&status=Active"
                alt="https://www.privacyshield.gov/participant?id=a2zt0000000TORzAAO&status=Active"
              >
                {" "}
                Privacy Shield.{" "}
              </LinkBrand>
              <br />- Pinterest (Pinterest Inc., 635 High Street, Palo Alto, CA,
              94301, USA) –
              <LinkBrand
                href="https://about.pinterest.com/de/privacy-policy"
                alt="https://about.pinterest.com/de/privacy-policy"
              >
                {" "}
                Datenschutzerklärung / Opt-Out.{" "}
              </LinkBrand>
              <br />- LinkedIn (LinkedIn Ireland Unlimited Company Wilton Place,
              Dublin 2, Irland) -
              <LinkBrand
                href="https://www.linkedin.com/legal/privacy-policy"
                alt="ttps://www.linkedin.com/legal/privacy-policy"
              >
                {" "}
                Datenschutzerklärung,{" "}
              </LinkBrand>
              <LinkBrand
                href="https://www.linkedin.com/psettings/guest-controls/retargeting-opt-out"
                alt="https://www.linkedin.com/psettings/guest-controls/retargeting-opt-out"
              >
                {" "}
                Opt-Out,{" "}
              </LinkBrand>
              <LinkBrand
                href=" https://www.privacyshield.gov/participant?id=a2zt0000000L0UZAA0&status=Active"
                alt="https://www.privacyshield.gov/participant?id=a2zt0000000L0UZAA0&status=Active"
              >
                {" "}
                Privacy Shield.{" "}
              </LinkBrand>
              <br />- Xing (XING AG, Dammtorstraße 29-32, 20354 Hamburg,
              Deutschland) -
              <LinkBrand
                href="https://privacy.xing.com/de/datenschutzerklaerung"
                alt="https://privacy.xing.com/de/datenschutzerklaerung"
              >
                {" "}
                Datenschutzerklärung / Opt-Out.{" "}
              </LinkBrand>
              <br />- Wakalet (Wakelet Limited, 76 Quay Street, Manchester, M3
              4PR, United Kingdom) -
              <LinkBrand
                href="https://wakelet.com/privacy.html
              "
                alt="https://wakelet.com/privacy.html
              "
              >
                {" "}
                Datenschutzerklärung / Opt-Out.{" "}
              </LinkBrand>
              <LinkBrand href="" alt="">
                {" "}
              </LinkBrand>
              <LinkBrand href="" alt="">
                {" "}
              </LinkBrand>
              <br />- Soundcloud (SoundCloud Limited, Rheinsberger Str. 76/77,
              10115 Berlin, Deutschland) -
              <LinkBrand
                href="https://soundcloud.com/pages/privacy"
                alt="https://soundcloud.com/pages/privacy"
              >
                {" "}
                Datenschutzerklärung / Opt-Out.{" "}
              </LinkBrand>
            </Typography>
          </div>

          <div className={classes.heading}>
            <Typography variant="display1">
              Einbindung von Diensten und Inhalten Dritter
            </Typography>
          </div>
          <div className={classes.blocksatz}>
            <Typography variant="subheading">
              Wir setzen innerhalb unseres Onlineangebotes auf Grundlage unserer
              berechtigten Interessen (d.h. Interesse an der Analyse,
              Optimierung und wirtschaftlichem Betrieb unseres Onlineangebotes
              im Sinne des Art. 6 Abs. 1 lit. f. DSGVO) Inhalts- oder
              Serviceangebote von Drittanbietern ein, um deren Inhalte und
              Services, wie z.B. Videos oder Schriftarten einzubinden
              (nachfolgend einheitlich bezeichnet als “Inhalte”).
              <br />
              Dies setzt immer voraus, dass die Drittanbieter dieser Inhalte,
              die IP-Adresse der Nutzer wahrnehmen, da sie ohne die IP-Adresse
              die Inhalte nicht an deren Browser senden könnten. Die IP-Adresse
              ist damit für die Darstellung dieser Inhalte erforderlich. Wir
              bemühen uns nur solche Inhalte zu verwenden, deren jeweilige
              Anbieter die IP-Adresse lediglich zur Auslieferung der Inhalte
              verwenden. Drittanbieter können ferner so genannte Pixel-Tags
              (unsichtbare Grafiken, auch als "Web Beacons" bezeichnet) für
              statistische oder Marketingzwecke verwenden. Durch die
              "Pixel-Tags" können Informationen, wie der Besucherverkehr auf den
              Seiten dieser Website ausgewertet werden. Die pseudonymen
              Informationen können ferner in Cookies auf dem Gerät der Nutzer
              gespeichert werden und unter anderem technische Informationen zum
              Browser und Betriebssystem, verweisende Webseiten, Besuchszeit
              sowie weitere Angaben zur Nutzung unseres Onlineangebotes
              enthalten, als auch mit solchen Informationen aus anderen Quellen
              verbunden werden.
            </Typography>
          </div>

          <div className={classes.heading}>
            <Typography variant="display1">Youtube</Typography>
          </div>
          <div className={classes.blocksatz}>
            <Typography variant="subheading">
              Wir binden die Videos der Plattform “YouTube” des Anbieters Google
              LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA, ein.
              <LinkBrand
                href="https://www.google.com/policies/privacy/"
                alt="https://www.google.com/policies/privacy/"
              >
                {" "}
                Datenschutzerklärung,{" "}
              </LinkBrand>
              <LinkBrand
                href="https://adssettings.google.com/authenticated"
                alt="https://adssettings.google.com/authenticated"
              >
                {" "}
                Opt-Out,{" "}
              </LinkBrand>
            </Typography>
          </div>

          <div className={classes.heading}>
            <Typography variant="display1">Google Maps</Typography>
          </div>
          <div className={classes.blocksatz}>
            <Typography variant="subheading">
              Wir binden die Landkarten des Dienstes “Google Maps” des Anbieters
              Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043,
              USA, ein. Zu den verarbeiteten Daten können insbesondere
              IP-Adressen und Standortdaten der Nutzer gehören, die jedoch nicht
              ohne deren Einwilligung (im Regelfall im Rahmen der Einstellungen
              ihrer Mobilgeräte vollzogen), erhoben werden. Die Daten können in
              den USA verarbeitet werden.
              <LinkBrand
                href="https://www.google.com/policies/privacy/"
                alt="https://www.google.com/policies/privacy/"
              >
                {" "}
                Datenschutzerklärung,{" "}
              </LinkBrand>
              <LinkBrand
                href="https://adssettings.google.com/authenticated"
                alt="https://adssettings.google.com/authenticated"
              >
                {" "}
                Opt-Out{" "}
              </LinkBrand>
            </Typography>
          </div>

          <div className={classes.heading}>
            <Typography variant="display1">
              Verwendung von Facebook Social Plugins
            </Typography>
          </div>
          <div className={classes.blocksatz}>
            <Typography variant="subheading">
              Wir nutzen auf Grundlage unserer berechtigten Interessen (d.h.
              Interesse an der Analyse, Optimierung und wirtschaftlichem Betrieb
              unseres Onlineangebotes im Sinne des Art. 6 Abs. 1 lit. f. DSGVO)
              Social Plugins ("Plugins") des sozialen Netzwerkes facebook.com,
              welches von der Facebook Ireland Ltd., 4 Grand Canal Square, Grand
              Canal Harbour, Dublin 2, Irland betrieben wird ("Facebook").
              Hierzu können z.B. Inhalte wie Bilder, Videos oder Texte und
              Schaltflächen gehören, mit denen Nutzer Inhalte dieses
              Onlineangebotes innerhalb von Facebook teilen können. Die Liste
              und das Aussehen der Facebook Social Plugins kann{" "}
              <LinkBrand
                href="https://developers.facebook.com/docs/plugins/"
                alt="https://developers.facebook.com/docs/plugins/"
              >
                {" "}
                hier eingesehen werden.
              </LinkBrand>
              <br />
              Facebook ist unter dem{" "}
              <LinkBrand
                href="https://www.privacyshield.gov/participant?id=a2zt0000000GnywAAC&status=Active"
                alt="https://www.privacyshield.gov/participant?id=a2zt0000000GnywAAC&status=Active"
              >
                Privacy-Shield-Abkommen{" "}
              </LinkBrand>{" "}
              zertifiziert und bietet hierdurch eine Garantie, das europäische
              Datenschutzrecht einzuhalten.
              <br />
              Wenn ein Nutzer eine Funktion dieses Onlineangebotes aufruft, die
              ein solches Plugin enthält, baut sein Gerät eine direkte
              Verbindung mit den Servern von Facebook auf. Der Inhalt des
              Plugins wird von Facebook direkt an das Gerät des Nutzers
              übermittelt und von diesem in das Onlineangebot eingebunden. Dabei
              können aus den verarbeiteten Daten Nutzungsprofile der Nutzer
              erstellt werden. Wir haben daher keinen Einfluss auf den Umfang
              der Daten, die Facebook mit Hilfe dieses Plugins erhebt und
              informiert die Nutzer daher entsprechend unserem Kenntnisstand.
              <br />
              des Onlineangebotes aufgerufen hat. Ist der Nutzer bei Facebook
              eingeloggt, kann Facebook den Besuch seinem Facebook-Konto
              zuordnen. Wenn Nutzer mit den Plugins interagieren, zum Beispiel
              den Like Button betätigen oder einen Kommentar abgeben, wird die
              entsprechende Information von Ihrem Gerät direkt an Facebook
              übermittelt und dort gespeichert. Falls ein Nutzer kein Mitglied
              von Facebook ist, besteht trotzdem die Möglichkeit, dass Facebook
              seine IP-Adresse in Erfahrung bringt und speichert. Laut Facebook
              wird in Deutschland nur eine anonymisierte IP-Adresse gespeichert.
              <br />
              Zweck und Umfang der Datenerhebung und die weitere Verarbeitung
              und Nutzung der Daten durch Facebook sowie die diesbezüglichen
              Rechte und Einstellungsmöglichkeiten zum Schutz der Privatsphäre
              der Nutzer, können diese den{" "}
              <LinkBrand
                href="https://www.facebook.com/about/privacy/"
                alt="https://www.facebook.com/about/privacy/"
              >
                Datenschutzhinweisen von Facebook entnehmen.
              </LinkBrand>
              <br />
              Wenn ein Nutzer Facebookmitglied ist und nicht möchte, dass
              Facebook über dieses Onlineangebot Daten über ihn sammelt und mit
              seinen bei Facebook gespeicherten Mitgliedsdaten verknüpft, muss
              er sich vor der Nutzung unseres Onlineangebotes bei Facebook
              ausloggen und seine Cookies löschen. Weitere Einstellungen und
              Widersprüche zur Nutzung von Daten für Werbezwecke, sind innerhalb
              der{" "}
              <LinkBrand
                href="https://www.facebook.com/settings?tab=ads"
                alt="https://www.facebook.com/settings?tab=ads"
              >
                {" "}
                Facebook-Profileinstellungen möglich{" "}
              </LinkBrand>{" "}
              oder über die US-amerikanische Seite{" "}
              <LinkBrand
                href="http://www.aboutads.info/choices/ "
                alt="http://www.aboutads.info/choices/ "
              >
                {" "}
                www.aboutads.info{" "}
              </LinkBrand>{" "}
              oder die EU-Seite{" "}
              <LinkBrand
                href="http://www.youronlinechoices.com/"
                alt="http://www.youronlinechoices.com/"
              >
                {" "}
                www.youronlinechoices.com{" "}
              </LinkBrand>
              . Die Einstellungen erfolgen plattformunabhängig, d.h. sie werden
              für alle Geräte, wie Desktopcomputer oder mobile Geräte
              übernommen.
            </Typography>
          </div>

          <div className={classes.heading}>
            <Typography variant="display1">Twitter</Typography>
          </div>
          <div className={classes.blocksatz}>
            <Typography variant="subheading">
              Innerhalb unseres Onlineangebotes können Funktionen und Inhalte
              des Dienstes Twitter, angeboten durch die Twitter Inc., 1355
              Market Street, Suite 900, San Francisco, CA 94103, USA,
              eingebunden werden. Hierzu können z.B. Inhalte wie Bilder, Videos
              oder Texte und Schaltflächen gehören, mit denen Nutzer Inhalte
              dieses Onlineangebotes innerhalb von Twitter teilen können. Sofern
              die Nutzer Mitglieder der Plattform Twitter sind, kann Twitter den
              Aufruf der o.g. Inhalte und Funktionen den dortigen Profilen der
              Nutzer zuordnen. Twitter ist unter dem
              <LinkBrand
                href="https://www.privacyshield.gov/participant?id=a2zt0000000TORzAAO&status=Active"
                alt="https://www.privacyshield.gov/participant?id=a2zt0000000TORzAAO&status=Active"
              >
                Privacy-Shield-Abkommen{" "}
              </LinkBrand>
              zertifiziert und bietet hierdurch eine Garantie, das europäische
              Datenschutzrecht einzuhalten.
              <LinkBrand
                href="https://twitter.com/de/privacy"
                alt="https://twitter.com/de/privacy"
              >
                {" "}
                Datenschutzerklärung,{" "}
              </LinkBrand>{" "}
              <LinkBrand
                href="https://twitter.com/personalization"
                alt="https://twitter.com/personalization"
              >
                {" "}
                Opt-Out.{" "}
              </LinkBrand>
            </Typography>
          </div>

          <div className={classes.heading}>
            <Typography variant="display1">Instagram</Typography>
          </div>
          <div className={classes.blocksatz}>
            <Typography variant="subheading">
              Innerhalb unseres Onlineangebotes können Funktionen und Inhalte
              des Dienstes Instagram, angeboten durch die Instagram Inc., 1601
              Willow Road, Menlo Park, CA, 94025, USA, eingebunden werden.
              Hierzu können z.B. Inhalte wie Bilder, Videos oder Texte und
              Schaltflächen gehören, mit denen Nutzer Inhalte dieses
              Onlineangebotes innerhalb von Instagram teilen können. Sofern die
              Nutzer Mitglieder der Plattform Instagram sind, kann Instagram den
              Aufruf der o.g. Inhalte und Funktionen den dortigen Profilen der
              Nutzer zuordnen.{" "}
              <LinkBrand
                href="http://instagram.com/about/legal/privacy/"
                alt="http://instagram.com/about/legal/privacy/"
              >
                {" "}
                Datenschutzerklärung von Instagram.
              </LinkBrand>
            </Typography>
          </div>

          <div className={classes.heading}>
            <Typography variant="display1">Xing</Typography>
          </div>
          <div className={classes.blocksatz}>
            <Typography variant="subheading">
              Innerhalb unseres Onlineangebotes können Funktionen und Inhalte
              des Dienstes Xing, angeboten durch die XING AG, Dammtorstraße
              29-32, 20354 Hamburg, Deutschland, eingebunden werden. Hierzu
              können z.B. Inhalte wie Bilder, Videos oder Texte und
              Schaltflächen gehören, mit denen Nutzer Inhalte dieses
              Onlineangebotes innerhalb von Xing teilen können. Sofern die
              Nutzer Mitglieder der Plattform Xing sind, kann Xing den Aufruf
              der o.g. Inhalte und Funktionen den dortigen Profilen der Nutzer
              zuordnen.{" "}
              <LinkBrand
                href="https://privacy.xing.com/de/datenschutzerklaerung"
                alt="https://privacy.xing.com/de/datenschutzerklaerung"
              >
                {" "}
                Datenschutzerklärung von Xing.
              </LinkBrand>
            </Typography>
          </div>

          <div className={classes.heading}>
            <Typography variant="display1">LinkedIn</Typography>
          </div>
          <div className={classes.blocksatz}>
            <Typography variant="subheading">
              Innerhalb unseres Onlineangebotes können Funktionen und Inhalte
              des Dienstes LinkedIn, angeboten durch die LinkedIn Ireland
              Unlimited Company Wilton Place, Dublin 2, Irland, eingebunden
              werden. Hierzu können z.B. Inhalte wie Bilder, Videos oder Texte
              und Schaltflächen gehören, mit denen Nutzer Inhalte dieses
              Onlineangebotes innerhalb von LinkedIn teilen können. Sofern die
              Nutzer Mitglieder der Plattform LinkedIn sind, kann LinkedIn den
              Aufruf der o.g. Inhalte und Funktionen den dortigen Profilen der
              Nutzer zuordnen. LinkedIn ist unter dem{" "}
              <LinkBrand
                href="https://www.privacyshield.gov/participant?id=a2zt0000000L0UZAA0&status=Active"
                alt="https://www.privacyshield.gov/participant?id=a2zt0000000L0UZAA0&status=Active"
              >
                {" "}
                Privacy-Shield-Abkommen{" "}
              </LinkBrand>{" "}
              zertifiziert und bietet hierdurch eine Garantie, das europäische
              Datenschutzrecht einzuhalten.
              <LinkBrand
                href="https://www.linkedin.com/legal/privacy-policy"
                alt="https://www.linkedin.com/legal/privacy-policy"
              >
                {" "}
                Datenschutzerklärung,{" "}
              </LinkBrand>
              <LinkBrand
                href="https://www.linkedin.com/psettings/guest-controls/retargeting-opt-out"
                alt="https://www.linkedin.com/psettings/guest-controls/retargeting-opt-out"
              >
                {" "}
                Opt-Out.{" "}
              </LinkBrand>
            </Typography>
          </div>

          <div className={classes.heading}>
            <Typography variant="display1">Google+</Typography>
          </div>
          <div className={classes.blocksatz}>
            <Typography variant="subheading">
              Innerhalb unseres Onlineangebotes können Funktionen und Inhalte
              der Plattform Google+, angeboten durch die Google LLC, 1600
              Amphitheatre Parkway, Mountain View, CA 94043, USA („Google“),
              eingebunden werden. Hierzu können z.B. Inhalte wie Bilder, Videos
              oder Texte und Schaltflächen gehören, mit denen Nutzer Inhalte
              dieses Onlineangebotes innerhalb von Google teilen können. Sofern
              die Nutzer Mitglieder der Plattform Google+ sind, kann Google den
              Aufruf der o.g. Inhalte und Funktionen den dortigen Profilen der
              Nutzer zuordnen.
              <br />
              Google ist unter dem{" "}
              <LinkBrand
                href="https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&status=Active"
                alt="https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&status=Active"
              >
                {" "}
                Privacy-Shield-Abkommen{" "}
              </LinkBrand>{" "}
              zertifiziert und bietet hierdurch eine Garantie, das europäische
              Datenschutzrecht einzuhalten. Weitere Informationen zur
              Datennutzung durch Google, Einstellungs- und
              Widerspruchsmöglichkeiten, erfahren Sie in der{" "}
              <LinkBrand
                href="https://policies.google.com/technologies/ads"
                alt="https://policies.google.com/technologies/ads"
              >
                {" "}
                Datenschutzerklärung von Google{" "}
              </LinkBrand>{" "}
              sowie in den Einstellungen für die Darstellung von{" "}
              <LinkBrand
                href="https://adssettings.google.com/authenticated"
                alt="https://adssettings.google.com/authenticated"
              >
                {" "}
              </LinkBrand>{" "}
              Werbeeinblendungen durch Google.
              <br />
              <LinkBrand
                href="https://datenschutz-generator.de/"
                alt="Erstellt mit Datenschutz-Generator.de von RA Dr. Thomas Schwenke"
              >
                Erstellt mit Datenschutz-Generator.de von RA Dr. Thomas Schwenke
              </LinkBrand>
            </Typography>
          </div>

          <div className={classes.heading}>
            <Typography variant="display1">
              Hinweise zur Datenverarbeitung im Zusammenhang mit Google
              Analytics
            </Typography>
          </div>
          <div className={classes.blocksatz}>
            <Typography variant="subheading">
              Diese Website benutzt Google Analytics, einen Webanalysedienst der
              Google Ireland Limited. Wenn der Verantwortlicher für die
              Datenverarbeitung auf dieser Website außerhalb des Europäischen
              Wirtschaftsraumes oder der Schweiz sitzt, dann erfolgt die Google
              Analytics Datenverarbeitung durch Google LLC. Google LLC und
              Google Ireland Limited werden nachfolgend "Google" genannt.
              <br />
              Google Analytics verwendet sog. "Cookies", Textdateien, die auf
              dem Computer des Seitenbesuchers gespeichert werden und die eine
              Analyse der Benutzung der Website durch den Seitenbesucher
              ermöglichen. Die durch das Cookie erzeugten Informationen über die
              Benutzung dieser Website durch den Seitenbesucher (einschließlich
              der gekürzten IP-Adresse) werden in der Regel an einen Server von
              Google übertragen und dort gespeichert.
              <br />
              Google Analytics wird ausschließlich mit der Erweiterung
              "_anonymizeIp()" auf dieser Website verwendet. Diese Erweiterung
              stellt eine Anonymisierung der IP-Adresse durch Kürzung sicher und
              schließt eine direkte Personenbeziehbarkeit aus. Durch die
              Erweiterung wird die IP-Adresse von Google innerhalb von
              Mitgliedstaaten der Europäischen Union oder in anderen
              Vertragsstaaten des Abkommens über den Europäischen
              Wirtschaftsraum zuvor gekürzt. Nur in Ausnahmefällen wird die
              volle IP-Adresse an einen Server von Google in den USA übertragen
              und dort gekürzt. Die im Rahmen von Google Analytics von dem
              entsprechenden Browser übermittelte IP-Adresse wird nicht mit
              anderen Daten von Google zusammengeführt.
              <br />
              Im Auftrag des Seitenbetreibers wird Google die anfallenden
              Informationen benutzen, um die Nutzung der Website auszuwerten, um
              Reports über die Websiteaktivitäten zusammenzustellen und um
              weitere mit der Websitenutzung und der Internetnutzung verbundene
              Dienstleistungen dem Seitenbetreiber gegenüber zu erbringen (Art.
              6 Abs. 1 lit. f DSGVO). Das berechtigte Interesse an der
              Datenverarbeitung liegt in der Optimierung dieser Website, der
              Analyse der Benutzung der Website und der Anpassung der Inhalte.
              Die Interessen der Nutzer werden durch die Pseudonymisierung
              hinreichend gewahrt.
              <br />
              Google LLC. ist nach dem sog.{" "}
              <LinkBrand
                href="https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI"
                alt="Privacy Shield"
              >
                Privacy Shield{" "}
              </LinkBrand>{" "}
              zertifiziert und gewährleistet auf dieser Basis ein angemessenes
              Datenschutzniveau. Die gesendeten und mit Cookies, Nutzerkennungen
              (z. B. User-ID) oder Werbe-IDs verknüpften Daten werden nach 50
              Monaten automatisch gelöscht. Die Löschung von Daten, deren
              Aufbewahrungsdauer erreicht ist, erfolgt automatisch einmal im
              Monat.
              <br />
              Die Erfassung durch Google Analytics kann verhindert werden, indem
              der Seitenbesucher die Cookie-Einstellungen für diese Website
              anpasst. Der Erfassung und Speicherung der IP-Adresse und der
              durch Cookies erzeugten Daten kann außerdem jederzeit mit Wirkung
              für die Zukunft widersprochen werden. Das entsprechende Browser-
              Plugin kann unter dem folgenden{" "}
              <LinkBrand
                href="https://tools.google.com/dlpage/gaoptout"
                alt="https://tools.google.com/dlpage/gaoptout"
              >
                {" "}
                Link{" "}
              </LinkBrand>{" "}
              heruntergeladen und installiert werden.
              <br />
              Der Seitenbesucher kann die Erfassung durch Google Analytics auf
              dieser Webseite verhindern, indem er auf folgenden Link klickt. Es
              wird ein Opt-Out-Cookie gesetzt, der die zukünftige Erfassung der
              Daten beim Besuch dieser Website verhindert.
              <br />
              Weitere Informationen zur Datennutzung durch Google, Einstellungs-
              und Widerspruchsmöglichkeiten, finden sich in der{" "}
              <LinkBrand
                href="https://policies.google.com/privacy"
                alt="https://policies.google.com/privacy"
              >
                {" "}
                Datenschutzerklärung von Google{" "}
              </LinkBrand>{" "}
              sowie in den{" "}
              <LinkBrand
                href="https://adssettings.google.com/authenticated"
                alt="https://adssettings.google.com/authenticated"
              >
                {" "}
                Einstellungen für die Darstellung von Werbeeinblendungen durch
                Google.
              </LinkBrand>
            </Typography>
          </div>

          <div className={classes.heading}>
            <Typography variant="display1">reCAPTCHA</Typography>
          </div>
          <div className={classes.blocksatz}>
            <Typography variant="subheading">
              Zum Schutz Ihrer Anfragen per Internetformular verwenden wir den
              Dienst reCAPTCHA des Unternehmens Google Inc. (Google). Die
              Abfrage dient der Unterscheidung, ob die Eingabe durch einen
              Menschen oder missbräuchlich durch automatisierte, maschinelle
              Verarbeitung erfolgt. Die Abfrage schließt den Versand der
              IP-Adresse und ggf. weiterer von Google für den Dienst reCAPTCHA
              benötigter Daten an Google ein.
              <br />
              Zu diesem Zweck wird Ihre Eingabe an Google übermittelt und dort
              weiter verwendet. Ihre IP-Adresse wird von Google jedoch innerhalb
              von Mitgliedstaaten der Europäischen Union oder in anderen
              Vertragsstaaten des Abkommens über den Europäischen
              Wirtschaftsraum zuvor gekürzt. Nur in Ausnahmefällen wird die
              volle IP-Adresse an einen Server von Google in den USA übertragen
              und dort gekürzt. Im Auftrag des Betreibers dieser Website wird
              Google diese Informationen benutzen, um Ihre Nutzung dieses
              Dienstes auszuwerten.
              <br />
              Die im Rahmen von reCaptcha von Ihrem Browser übermittelte
              IP-Adresse wird nicht mit anderen Daten von Google
              zusammengeführt. Für diese Daten gelten die abweichenden
              Datenschutzbestimmungen des Unternehmens Google. Weitere
              Informationen zu den Datenschutzrichtlinien von Google finden Sie{" "}
              <LinkBrand
                href="https://policies.google.com/privacy?hl=de"
                alt="https://policies.google.com/privacy?hl=de"
              >
                {" "}
                hier.{" "}
              </LinkBrand>
            </Typography>
          </div>
        </Box>
      </Layout>
    );
  }
}

export default withStyles(styles)(Datenschutz);
