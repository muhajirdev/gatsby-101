import React, { useState } from "react";
import axios from "axios";

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
    <form style={{ padding: 30 }} onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Your email"
        value={email}
        onChange={event => setEmail(event.target.value)}
      />
      <input
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={event => setFirstName(event.target.value)}
        style={{ borderColor: firstNameError ? "red" : null }}
      />
      <input
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={event => setLastName(event.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};
