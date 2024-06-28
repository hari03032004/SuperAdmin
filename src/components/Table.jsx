import React from "react";
function Table(props) {
  const items = props.item;
  return(
    <table className="dash-table">
      <tr>
        <th>ID</th>
        <th>Hospitals</th>
        <th>Display</th>
        <th>Category</th>
        <th>Description</th>
        <th>Location</th>
        <th>Option</th>
      </tr>
      {items.map((item) => {
          return(
            <tr>
              <td>{item.id}</td>
              <td>{item.hospital}</td>
              <td>
                  <form>
                    <select name="details" id="details">
                      <option value="doctor">Doctor Details</option>
                      <option value="patient">Patient Details</option>
                    </select>
                 </form>
              </td>
              <td>{item.category}</td>
              <td>{item.description}</td>
              <td>{item.location}</td>
              <td >
                <a className="edit"> Edit | </a>
                <a className="remove">Remove</a>
              </td>
            </tr>
          )
        })
      }
      
    </table>
  )
}

export default Table;