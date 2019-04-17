import React from "react";
/* Icons */
import Send from "@material-ui/icons/Send";
import PlusOne from "@material-ui/icons/PlusOne";
import Close from "@material-ui/icons/Close";
import BarChart from "@material-ui/icons/BarChart";
import PieChart from "@material-ui/icons/PieChart";
import BubbleChart from "@material-ui/icons/BubbleChart";
import Lens from "@material-ui/icons/Lens";
import Texture from "@material-ui/icons/Texture";

export const menuiOS = [
  {
    name: "",
    url: null,
    icon: <Close style={{ height: "1.85rem", width: "1.85rem" }} />
  },
  {
    name: "Strategie",
    seperator: true
  },
  {
    name: "Anlagestrategie",
    url: "/Strategie/anlagestrategie",
    icon: <BarChart style={{ transform: "scaleX(-1)" }} />
  },
  {
    name: "Vorteile",
    url: "/Strategie/vorteile",
    icon: <PlusOne />
  },
  {
    name: "FAQ",
    url: "/Strategie/faq",
    icon: <PieChart />
  },
  {
    name: "Team",
    seperator: true
  },
  {
    name: "Vision",
    url: "/Team/vision",
    icon: <BubbleChart />
  },
  
  {
    name: "Das Team StockBoost",
    url: "/Team/team",
    icon: <Lens />
  },
  {
    name: "Mastermind",
    url: "/Team/mastermind",
    icon: <Texture />
  },
  {
    name: "Finanzbildung",
    seperator: true
  },
  {
    name: "Newsletter",
    url: "/Finanzbildung/subscribe/",
    icon: <Send style={{ transform: "rotate(-45deg)" }} />
  }
];

export const menuEducation = [
  {
    name: "Newsletter",
    url: "/Finanzbildung/subscribe/",
    icon: ""
  }
];

export const menuStrategie = [
  // {
  //   name: "Abonnement",
  //   url: "/Strategie/abonnement",
  //   icon: ""
  // },
  {
    name: "Anlagestrategie",
    url: "/Strategie/anlagestrategie",
    icon: ""
  },
  {
    name: "FAQ",
    url: "/Strategie/faq",
    icon: ""
  },
  {
    name: "Vorteile",
    url: "/Strategie/vorteile",
    icon: ""
  }
];

export const menuAboutUS = [
  {
    name: "Das Team StockBoost",
    url: "/Team/team",
    icon: ""
  },
  {
    name: "Mastermind",
    url: "/Team/mastermind",
    icon: ""
  },
  {
    name: "Vision",
    url: "/Team/vision",
    icon: ""
  }
];

export const menuLogin = [
  // {
  //     name: "Registrierung",
  //     url: "/StockBoost/registrierung",
  //     icon: <PlusOne />
  // },
  // {
  //     name: "Kundenbereich",
  //     url: "/StockBoost/kundenbereich",
  //     icon: <AttachFile />
  // }
];
