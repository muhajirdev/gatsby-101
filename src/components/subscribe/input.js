import React from "react";

import TextField from "@material-ui/core/TextField";
import AccountCircle from "@material-ui/icons/AccountCircle";
import InputAdornment from "@material-ui/core/InputAdornment";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  multilineColor: {
    color: "white"
  }
});

export default withStyles(styles)(
  ({ type, placeholder, value, onChange, classes, error, defaultValue }) => {
    return (
      <TextField
        error={error}
        id="input-with-icon-textfield"
        placeholder={placeholder}
        style={{ marginBottom: "1.5rem", width: "100%", color: "white" }}
        defaultValue={defaultValue}
        type={type}
        value={value}
        onChange={onChange}
        InputProps={{
          classes: {
            input: classes.multilineColor
          },
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle nativeColor="white" fill="white" color="white" />
            </InputAdornment>
          )
        }}
      />
      // <input
      //   type={type}
      //   placeholder={placeholder}
      //   value={value}
      //   onChange={onChange}
      //   style={{
      //     width: "100%",
      //     backgroundColor: "transparent",
      //     border: "none",
      //     borderBottom: "1px solid #fff",
      //     color: "#fff"
      //   }}
      // />
    );
  }
);
