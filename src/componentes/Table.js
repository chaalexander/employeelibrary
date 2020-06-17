import React, { Component } from "react";
// import PropTypes from 'prop-types';

class Table extends Component {
  // constructor(props) {
  //     super(props);

  // }

  // componentWillMount() {

  // }

  // componentDidMount() {

  // }

  // componentWillReceiveProps(nextProps) {

  // }

  // shouldComponentUpdate(nextProps, nextState) {

  // }

  // componentWillUpdate(nextProps, nextState) {

  // }

  // componentDidUpdate(prevProps, prevState) {

  // }

  // componentWillUnmount() {

  // }

  render() {
    return (
      <div className="App">
        <div className="container">
          <input
            type="text"
            name="title"
            style={{ flex: "10", padding: "5px " }}
            placeholder="Add Todo ..."
            value="{this.state.title}"
            onChange="{this.onChange}"
          ></input>
        </div>
      </div>
    );
  }
}

// Table.propTypes = {

// };

export default Table;
