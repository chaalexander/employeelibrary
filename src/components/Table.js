import React, { Component } from "react";
import Api from "../util/Api";
import TableRow from "./TableRow";

const inputStyle = {
  marginLeft: "400px",
  marginBottom: "50px",
  marginTop: "50px",
  flex: "10",
  padding: "5px ",
  width: "300px",
};

const sortTypes = {
  up: {
    class: "arrow-up",
    fn: (a, b) => {
      const nameA = a.name.first.toUpperCase();
      const nameB = b.name.first.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      return 0;
    },
  },
  down: {
    class: "arrow-down",
    fn: (a, b) => {
      const nameA = a.name.first.toUpperCase();
      const nameB = b.name.first.toUpperCase();
      if (nameA < nameB) {
        return 1;
      }
      if (nameA > nameB) {
        return -1;
      }

      return 0;
    },
  },
  default: {
    class: "sort",
    // fn: (a, b) => a,
  },
};

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      sortedUsers: [],
      search: "",
      currentSort: "default",
    };
  }

  componentDidMount() {
    Api.search().then((res) => {
      this.setState(
        { users: res.data.results, sortedUsers: res.data.results },
        () => console.log(this.state)
      );
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

  onClick = (e) => {
    e.preventDefault();
    const { currentSort } = this.state;
    let nextSort;

    if (currentSort === "down") nextSort = "up";
    else if (currentSort === "up") nextSort = "default";
    else if (currentSort === "default") nextSort = "down";

    console.log(this.state.currentSort, nextSort);

    if (nextSort === "default") {
      let originalUsers = this.state.users;

      this.setState({
        sortedUsers: originalUsers,
        currentSort: nextSort,
      });
    } else {
      let newSortedUsers = this.state.sortedUsers;
      newSortedUsers.sort(sortTypes[nextSort].fn);
      this.setState({ sortedUsers: newSortedUsers, currentSort: nextSort });
    }
  };

  render() {
    const { currentSort } = this.state;
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
              <th scope="col">
                <button onClick={this.onClick}>
                  <i className={`fas fa-${sortTypes[currentSort].class}`} />
                </button>{" "}
                First
              </th>
              <th scope="col">Last</th>
              <th scope="col">E-mail</th>
              <th scope="col">Country</th>
              <th scope="col">Phone Number</th>
            </tr>
          </thead>
          <tbody>
            {this.state.sortedUsers
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
