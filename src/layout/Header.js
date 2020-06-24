import React from "react";

function Header() {
  return (
    <header style={headerStyle}>
      <h1 style={headerStyle.h1}>Employee Library</h1>

      <p>Search the employee by name.</p>
    </header>
  );
}

const headerStyle = {
  background: "#ff8493",
  color: "black",
  textAlign: "center",
  padding: "10px",
  height: "200px",

  h1: {
    marginTop: "40px",
    fontSize: "60px",
  },
};

export default Header;
