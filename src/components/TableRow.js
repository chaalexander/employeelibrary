import React from "react";

const styles = {
  image: {
    width: 60,
    height: 60,
    borderRadius: "50px",
  },
};

// creating the function with the props for the table rows
export default function TableRow(props) {
  return (
    <>
      <tr className="tableRow">
        <th scope="row">
          <img style={styles.image} alt={props.first} src={props.thumbnail} />
        </th>
        <td>{props.first}</td>
        <td>{props.last}</td>
        <td>{props.email}</td>
        <td>{props.country}</td>
        <td>{props.phone}</td>
      </tr>
    </>
  );
}
