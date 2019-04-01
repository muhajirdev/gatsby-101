import React from "react";
/* Icons */
import Dashboard from "@material-ui/icons/Dashboard";
import Circle from "@material-ui/icons/CheckCircleOutline";
import Share from "@material-ui/icons/Share";
import Send from "@material-ui/icons/Send";
import AttachFile from "@material-ui/icons/AttachFile";
import PlusOne from "@material-ui/icons/PlusOne";

export const menuEducation = [
    // {
    //     // Blog 
    //     name: "News",
    //     url: "/anlagekonzept",
    //     icon: <Dashboard />
    // },
    {
        name: "Newsletter",
        url: "/subscribe",
        icon: <Send />
    }
];


export const menuStrategie = [
    {
        name: "Anlagestrategie",
        url: "/anlagestrategie",
        icon: <Dashboard />
    },
    {
        name: "Vorteile",
        url: "/vorteile",
        icon: <Circle />
    },
    {
        name: "FAQ",
        url: "/faq",
        icon: <Circle />
    },
    {
        name: "Abonnement",
        url: "/abonnement",
        icon: <Circle />
    },
];

export const menuAboutUS = [

    {
        name: "Das Team StockBoost",
        url: "/team",
        icon: <PlusOne />
    },
    {
        name: "Vision",
        url: "/vision",
        icon: <AttachFile />
    }
    
];

export const menuLogin = [

    {
        name: "Registrierung",
        url: "/",
        icon: <PlusOne />
    },
    {
        name: "Kundenbereich",
        url: "/",
        icon: <AttachFile />
    }
];


export const menuiOS = [
    // {
    //     name: "News",
    //     url: "/anlagekonzept",
    //     icon: <Dashboard />
    // },
    {
        name: "Vision",
        url: "/vision",
        icon: <PlusOne />
    },
    {
        name: "Vorteile",
        url: "/vorteile",
        icon: <Circle />
    },
    {
        name: "FAQ",
        url: "/faq",
        icon: <Circle />
    },
    // {
    //   name: "VorteileTable",
    //   url: "/vorteileTable",
    //   icon: <Done />
    // },
    {
        name: "Das Team StockBoost",
        url: "/team",
        icon: <PlusOne />
    },
    {
        name: "Kundenbereich",
        url: "/",
        icon: <AttachFile />
    },
    // {
    //     name: "Blog",
    //     url: "/",
    //     icon: <Share />
    // },
    {
        name: "Newsletter",
        url: "/subscribe",
        icon: <Send />
    }
];