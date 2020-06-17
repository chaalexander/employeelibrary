import React from "react";

function Header() {
  return (
    <header style={headerStyle}>
      <h1>Employee Library</h1>

      <p>Search the employee by name.</p>
      
    </header>
  );
}

const headerStyle = {
  background: "pink",
  color: "black",
  textAlign: "center",
  padding: "10px",
};

export default Header;
