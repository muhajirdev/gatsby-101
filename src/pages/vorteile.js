import React from "react";
import { Link } from "gatsby";
import { Component } from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

/* styled */
import styled from "styled-components";

/* MUI */
import PropTypes from 'prop-types';
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableFooter from '@material-ui/core/TableFooter';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Paper from '@material-ui/core/Paper';


/* Components */
import Icon from '../components/icon'

// Link 
// <h6><Link to="/">Go back to the homepage</Link></h6>

const styles = {
  header: {
    backgroundColor: "transparent",
    boxShadow: "none"
  },
  root: {
    flexGrow: 1,
    position: "fixed",
    width: "100%",
    zIndex: 200,
    top: 0
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },

  logo: {
    fontWeight: 700
  }
};



class Vorteile extends Component {
  render() {
    const { classes } = this.props;

    return (

  <Layout>
    <SEO title="VORTEILE" />
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        backgroundColor: "#FF8000",
        height: "15rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
    </div>
   
   <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        maxWidth: "65%",
        marginRight: "auto",
        marginLeft: "auto"
      }}
      >
     


        <h1>Deine Vorteile</h1>
      


        <h6>
        Die StockBoost Aktienstrategie basiert auf quantitativem Ansatz; verdichtet historische Aktienpreisentwicklung, positive Gewinnüberraschung sowie Analystendaten.
        <br /><br /> 
        Der Stock Ansatz filtert systematisch ein Aktienuniversum bestehend aus 4000 US-Amerikanischen Unternehmen mit einer Marktkapitalisierung von 500 Mio. - 10 Mrd. USD. So stehen US-Midcap-Aktien und nicht Mainstreamwerte im Fokus der Aktienstrategie bei Beachtung notwendiger Portfolio-Diversifikation. 
        <br /><br /> 
        Der Boost Ansatz, der Depot-Boost, investiert bei gegebener positiver Marktlage in US-Amerikanische Unternehmen, die vor neuen Bewertungen stehen und somit ein starkes Momentum, eine sich beschleunigende positive Trendbewegung, aufweisen. 
        <br /><br /> 
        Subjektive Entscheidungen sind insgesamt unbedeutend, naiv konstruierte Portfolios, die hoch konzentriert sind, ausgeschlossen. Eine deutliche Reduzierung des Maximum Drawdown des Portfolios ist durch die konsequent sukzessive Reduzierung der Aktienquote von 100% auf 66%, in potentiellen Seitwärtsphasen und Bärenmärkten, gewährleistet. 
        <br /><br /> 
        Die StockBoost Aktienstrategie eignet sich als Beimischung für klassische Wertschriftenportfolios (Wertschriften: schweizerisch für Aktien und Anleihen) oder auch als aktive Komponente für passiv ausgerichtete ETF-Portfolios. 
        <br /><br /> 
        Empirische Studien haben in der Vergangenheit für sämtliche Komponenten der StockBoost Aktienstrategie eine risikoadjustierte Überrendite – Outperformance - nachgewiesen.
        <br /><br /> 
        Diesen Nachweis führen wir permanent transparent ‘ungehebelt’ in einem USD 20'000 Echtgelddepot, bei einer Aktienquote von 66% - 100%, weiter. 
        <br /><br /> 
        Abonnenten der STOCKBOOST Aktienstraegie werden unmittelbar nach den Portfolio Umschichtungen über sämtliche Käufe / Verkäufe informiert.
        <br /><br /> 
        Der Aufwand für die Umsetzung von STOCKBOOST beträgt ca. 15 Minuten pro Woche.
        </h6>

    
      </div>
     
      <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        backgroundColor: "#FF8000",
        height: "100%",
        justifyContent: "center",
        alignItems: "center"
      }}
    >

<div style={{overflowX: 'scroll'}}>

      <Table style={{ maxWidth: '50%', marginTop: 'theme.spacing.unit * 3', overflowX: 'auto', margin: "0 auto" }}>

        <TableHead>

          <TableCell><Typography variant="headline"> Boost bietet dir:</Typography> </TableCell>
          <TableCell align="left"><Typography variant="headline">Deine Vorteile:</Typography> </TableCell>

        </TableHead>

        <TableBody>
          <TableRow>
            <TableCell>Seine Aktienstrategie mit quantitativem Ansatz. Diversifiziere dein Depot mit System oder verwende StockBoost als aktive Komponente für passiv ausgerichtete ETF-Portfolios.</TableCell>
            <TableCell>nutze Boost als Beimischung - egal ob als Investor oder Trader</TableCell>
          </TableRow>

          <TableRow>
            <TableCell>ein systematisches Regelwerk um mittelgroße US-Aktien mit hohem Kurspotential auszuwählen.</TableCell>
            <TableCell>erhalte liquide Werte mit Substanz und Wachstumspotential ohne eigenen aufwendigen Auswahlprozess</TableCell>
          </TableRow>

          <TableRow>
            <TableCell>ausschließlich Aktien und verwendet keinen Hebel.</TableCell>
            <TableCell>eine einfache Risikobewertung & ausgewogene Sektor Diversifikation</TableCell>
          </TableRow>

          <TableRow>
            <TableCell>klare Regeln und 1x pro Woche konkrete Information zu den Anpassungen im Depot (Käufe/Verkäufe). </TableCell>
            <TableCell>einfache Handhabung, da alle Ein- und Ausstiege per Market Order in liquiden Werten umsetzbar sind.</TableCell>
          </TableRow>

    

          <TableRow>
            <TableCell>bei positivem Marktumfeld eine zweite Swing Strategie als Depot-Boost. Ihr erhaltet die Information zu diesen zusätzlichen Ein- & Ausstiegen immer direkt (max. 1 Mail/Tag)</TableCell>
            <TableCell>erhalte trendstarke Aktien zum richtigen Zeitpunkt. Die Umsetzung ist identisch zu den wöchentlichen Umschichtungen.</TableCell>
          </TableRow>

          <TableRow>
            <TableCell>Die Aktienquote liegt zwischen 66% bis 100% (unter Berücksichtigung des Marktumfelds)</TableCell>
            <TableCell>dein Depot unterliegt geringeren Schwankungen bei Marktrücksetzern</TableCell>
          </TableRow>

          <TableRow>
            <TableCell>eine detaillierte Liveumsetzung mit ausgewerteten Track Record unseres Echtgelddepots</TableCell>
            <TableCell>keine leeren Versprechungen und die langfristige Entwicklung ist nachvollziehbar</TableCell>
          </TableRow>
          
          <TableRow>
            <TableCell>eine unkomplizierte und zeitschonende Umsetzung</TableCell>
            <TableCell>nur ca. 15 Minuten Zeitaufwand pro Woche</TableCell>
          </TableRow>

        </TableBody>
      </Table>
    </div>
    </div>
  </Layout>

);
}
}

export default withStyles(styles)(Vorteile);

