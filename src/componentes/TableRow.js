import React from 'react'

export default function TableRow(props) {
    return (
      <>
        <tr>
          <th scope="row">
            <img
              style={{ width: 60, height: 60 }}
              alt={props.first}
              src={props.thumbnail}
            />
          </th>
          <td>{props.first}</td>
          <td>{props.last}</td>
          <td>{props.email}</td>
          <td>{props.country}</td>
          <td>{props.dob}</td>
          <td>{props.phone}</td>
        </tr>
      </>
    );
}
