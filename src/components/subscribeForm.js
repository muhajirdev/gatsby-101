import React, { useState } from "react";
import axios from "axios";
import Input from "./input";

/* Icons */
import SvgIcon from "@material-ui/core/SvgIcon";
import Icon from "../components/icon";





export default () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

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
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (firstName.length < 3) return;
    if (lastName.length < 3) return;

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
          type="email"
          placeholder="Your email"
          value={email}
          onChange={event => setEmail(event.target.value)}
          style={{ width: "100%" }}
        />
      </div>
      <div style={{ marginBottom: "1rem", width: "100%" }}>
        <Input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={event => setFirstName(event.target.value)}
          style={{ borderColor: firstNameError ? "red" : null }}
        />
      </div>
      <div style={{ marginBottom: "1rem", width: "100%" }}>
        <Input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={event => setLastName(event.target.value)}
        />
      </div>     
      <div>
        <input
          type="checkbox"
          id="option"
          name="checkbox"
          display="hidden"
        
        />
        <label className="checkbox subfield" for="option">
        <svg viewBox="0 0 60 40" aria-hidden="true" focusable="false"> 
        <path d="M21,2 C13.4580219,4.16027394 1.62349378,18.3117469 3,19 C9.03653312,22.0182666 25.2482171,10.3758914 30,8 C32.9363621,6.53181896 41.321398,1.67860195 39,4 C36.1186011,6.8813989 3.11316157,27.1131616 5,29 C10.3223659,34.3223659 30.6434647,19.7426141 35,18 C41.2281047,15.5087581 46.3445303,13.6554697 46,14 C42.8258073,17.1741927 36.9154967,19.650702 33,22 C30.3136243,23.6118254 17,31.162498 17,34 C17,40.4724865 54,12.4064021 54,17 C54,23.7416728 34,27.2286213 34,37" stroke-width="4" fill="none" stroke-dasharray="270" stroke-dashoffset="270">
        </path>
       </svg>

          <h5>
            <strong>
              Ja, ich akzeptiere die{" "}
              <a target="_blank" href="../sites/AGB.html">
                Datenschutzrichtlinie!&nbsp;
              </a>
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
            color: "#fff"
          }}
          type="submit"
        >
          Subscribe
        </button>
      </div>
    </form>
  );
};
