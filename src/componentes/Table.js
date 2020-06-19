import React, { Component } from "react";
import Api from "../util/Api";
import TableRow from "./TableRow";

const inputStyle = {
  marginLeft: "400px",
  marginBottom: "100px",
  marginTop: "50px",
  flex: "10",
  padding: "5px ",
  width: "300px",
};

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = { users: [], search: "" };
  }

  componentDidMount() {
    Api.search().then((res) => {
      this.setState({ users: res.data.results }, () => console.log(this.state));
    });
  }

  onChange = (e) => {
    let value = e.target.value;
    const name = e.target.name;
    this.setState(
      {
        [name]: value,
      },
      () => console.log(this.state)
    );
  };

  render() {
    return (
      <div className="container">
        <input
          style={inputStyle}
          type="text"
          name="search"
          search={this.state.search}
          placeholder="Search ..."
          value={this.state.search}
          onChange={this.onChange}
        ></input>
        <table className="table table-hover">
          <thead>
            <tr className="tableHead">
              <th scope="col"></th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">E-mail</th>
              <th scope="col">Country</th>
              <th scope="col">Phone Number</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users
              .filter((user) =>
                user.name.first
                  .toLowerCase()
                  .includes(this.state.search.toLowerCase())
              )
              .map((user, index) => (
                <TableRow
                  key={index}
                  first={user.name.first}
                  thumbnail={user.picture.thumbnail}
                  last={user.name.last}
                  email={user.email}
                  country={user.location.country}
                  phone={user.phone}
                />
              ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
