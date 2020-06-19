import React, { Component } from "react";

import Header from "./componentes/layout/Header";
import Table from "./componentes/Table";
// import AddTodo from "./components/AddTodo";
// import About from "./components/pages/About";
import "./App.css";



class App extends Component {
  state = {
    users: [],
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Table />
      </div>
    );
  }
}
export default App;
