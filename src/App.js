import React, { Component } from "react";
import axios from "axios";
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

  componentDidMount() {
    axios
      .get("https://randomuser.me/api/?results=20")
      .then((res) => this.setState({ users: res.data }));
  }

  render() {
    return <Header />;
  }
}
export default App;
