import React, { Component } from "react";

import Header from "./componentes/layout/Header";
// import Table from "./componentes/Table";
// import AddTodo from "./components/AddTodo";
// import About from "./components/pages/About";
import "./App.css";

// api for user
// https://randomuser.me/api/?results=50

class App extends Component {
  state = {
    users: [],
  };

  render() {
    return <Header />;
  }
}
export default App;
