import React, { useState } from "react";
import axios from "axios";
import Input from "./input";

/* Icons */
import SvgIcon from "@material-ui/core/SvgIcon";
import Icon from "../components/icon";
import TextField from "@material-ui/core/TextField";
import AccountCircle from "@material-ui/icons/AccountCircle";
import InputAdornment from "@material-ui/core/InputAdornment";
import LinkBrand from "./linkBrand";

import "./input.css";
import SVGCheckbox from "./svg-checkbox";

export default () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [datenschutz, setDatenschutz] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [botVal, setBotVal] = useState("");

  const shouldWarnEmail = submitted && email.length < 3;
  const shouldWarnFirstName = submitted && firstName.length < 3;
  const shouldWarnLastName = submitted && lastName.length < 3;
  const shouldWarnCheck = submitted && datenschutz === false;

  const isBot = botVal.length > 0;

  const isSafe = submitted && datenschutz === true;

  const outlineStyle = {
    outline: shouldWarnCheck
      ? "2px solid red"
      : isSafe
      ? "2px solid black"
      : null
  };

  const [firstNameError, setFirstNameError] = useState(false);

  const sendConfirmation = (email, firstName, lastName) => {
    const url =
      "https://nostalgic-torvalds-088b6c.netlify.com/.netlify/functions/sendConfirmationEmail";

    axios
      .post(url, {
        first_name: firstName,
        last_name: lastName,
        email: email
      })
      .then(function(response) {
        console.log(response);
        window.location.replace(
          "https://squote.uber.space/static/assets/html/almost-finished.html"
        );
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);

    if (isBot) return;

    if (firstName.length < 3) return;
    if (lastName.length < 3) return;
    if (!datenschutz) return;

    sendConfirmation(email, firstName, lastName);
  };
  return (
    <form
      style={{
        padding: 30,
        display: "flex",
        flexDirection: "column",
        border: "10px solid #fff"
      }}
      onSubmit={handleSubmit}
    >
      <div style={{ marginBottom: "1rem", width: "100%" }}>
        <Input
          error={shouldWarnEmail}
          type="email"
          placeholder="du@example.de"
          value={email}
          onChange={event => setEmail(event.target.value)}
          style={{ width: "100%" }}
        />
      </div>
      <div>
        <input
          type="text"
          value={botVal}
          onChange={event => setBotVal(event.target.value)}
          style={{ display: "none" }}
        />
      </div>
      <div style={{ marginBottom: "1rem", width: "100%" }}>
        <Input
          error={shouldWarnFirstName}
          type="text"
          placeholder="Vorname"
          value={firstName}
          onChange={event => setFirstName(event.target.value)}
          style={{ borderColor: firstNameError ? "red" : null }}
        />
      </div>
      <div style={{ marginBottom: "1rem", width: "100%" }}>
        <Input
          error={shouldWarnLastName}
          type="text"
          placeholder="Nachname"
          value={lastName}
          onChange={event => setLastName(event.target.value)}
        />
      </div>
      <div style={{ marginBottom: "1.5rem" }}>
        <input
          className="input-checkbox"
          type="checkbox"
          id="option"
          name="checkbox"
          display="hidden"
          onClick={() => setDatenschutz(!datenschutz)}
        />
        <label
          style={outlineStyle}
          className="checkbox subfield label-subscribe-form"
          for="option"
        >
          <SVGCheckbox />
          <h5 style={{ color: "white" }}>
            <strong>
              Ja, ich akzeptiere die{" "}
              <LinkBrand href="/datenschutz">
                Datenschutzrichtlinie!&nbsp;
              </LinkBrand>
              Die Hinweise habe ich gelesen!
            </strong>
          </h5>
        </label>
      </div>

      <div>
        <button
          style={{
            border: "3px solid #fff",
            backgroundColor: "transparent",
            color: "#fff",
            margin: ".75rem",
            padding: "0.4rem"
          }}
          type="submit"
        >
          ANMELDEN
        </button>
      </div>
    </form>
  );
};
