import React from "react";
// import PropTypes from 'prop-types';

const inputStyle = {
  marginLeft: "400px",
  marginBottom: "100px",
  marginTop: "50px",
  flex: "10",
  padding: "5px ",
};

function Table(props) {
  return (
    <div className="App">
      <div className="container">
        <input
          style={inputStyle}
          type="text"
          name="title"
          placeholder="Add Todo ..."
          value="{this.state.title}"
          onChange="{this.onChange}"
        ></input>
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">E-mail</th>
              <th scope="col">Country</th>
              <th scope="col">DOB</th>
              <th scope="col">Phone Number</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              {/* <th scope="row">
                {
                  <img alt={props.name.first} src={props.picture.thumbnail} />  props.id
                }
              </th>
              <td>{props.name.first}</td>
              <td>{props.name.last}</td>
              <td>{props.email}</td>
              <td>{props.location.country}</td>
              <td>{props.dob.date}</td>
              <td>{props.phone}</td> */}

              <th scope="row">1</th>
              <td>Peter</td>
              <td>Parker</td>
              <td>peter@gmail.com</td>
              <td>USA</td>
              <td>08-09-99</td>
              <td>1234</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

// Table.propTypes = {

// };

export default Table;
