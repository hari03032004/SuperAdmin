import React from "react";
import { useNavigate } from "react-router-dom";

function Table(props) {
  const items = props.item;
  const uniqueKeys = [...new Set(items.flatMap(obj => Object.keys(obj)))];
  const navigate = useNavigate();
  const handleChange = (event) => {
    navigate("doctorDetails", { state: { doctor: event.target.value} });

  };

  return(
    <table className="dash-table">
      <tr>
        {uniqueKeys.map((heading)=>{
          return <th>{heading}</th>
        })}
      </tr>
      {items.map((item,idx) => {
          return(
            <tr key={idx}>
              <td>{item.id}</td>
              <td>{item.hospital}</td>
              <td>
                <select name="details" id="details" onChange={handleChange}>
                  <option value="">Select</option>
                  <option value={item.hospital}>Doctor Details</option>
                  <option value={item.hospital}>Patient Details</option>
                </select>
              </td>
              <td>{item.category}</td>
              <td>{item.description}</td>
              <td>{item.location}</td>
              <td className="option">
                <button className="edit" onClick={() => props.editRow(idx)}> Edit | </button>
                <button className="remove" onClick={() => props.deleteRow(idx)}>Remove </button>
              </td>
            </tr>
          )
        })
      }
      
    </table>
  )
}

export default Table;