import React, { useState } from "react";
import { withStyles } from "@material-ui/core";
import styles from "../styles";

// Expansion Panel
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/Add";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";

import Typography from "@material-ui/core/Typography";

const CloseIcon = ({ active }) => {
  return (
    <ExpandMoreIcon
      style={{ fill: "#fff", transform: active ? "rotate(45deg)" : null }}
    />
  );
};

const Collapsable = withStyles(styles)(({ title, children, classes }) => {
  const [active, setActive] = useState(false);
  return (
    <ExpansionPanel
      onClick={() => setActive(!active)}
      style={{ background: "transparent", boxShadow: "none" }}
    >
      <ExpansionPanelSummary
        expandIcon={<CloseIcon active={active} />}
        style={{ padding: 0 }}
      >
        <Typography variant="primary" className={classes.heading}>
          {title}
        </Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails style={{ padding: 0 }}>
        <Typography variant="subheading" className={classes.blocksatz}>
          {children}
        </Typography>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
});

export default Collapsable;
