import React, { Component } from "react";
import Header from "./layout/Header";
import Table from "./componentes/Table";

import "./App.css";

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Table />
      </>
    );
  }
}
export default App;
