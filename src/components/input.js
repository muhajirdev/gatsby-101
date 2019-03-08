import React from "react";

export default ({ type, placeholder, value, onChange }) => (
  <input
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    style={{
      width: "100%",
      backgroundColor: "transparent",
      border: "none",
      borderBottom: "1px solid #fff",
      color: "#fff"
    }}
  />
);
