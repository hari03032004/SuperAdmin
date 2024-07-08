import React from 'react';


export default function Dtable(props) {
  const items = props.item;
  const uniqueKeys = [...new Set(items.flatMap(obj => Object.keys(obj)))];
  return(
    <table className="dash-table">
      <tr>
        {uniqueKeys.map((heading,i)=>{
          return <th key={i}>{heading}</th>
        })}
      </tr>
      {items.map((item,idx) => {
          return(
            <tr key={idx}>
              <td>{item.id}</td>
              <td>{item.gender}</td>
              <td>{item.age}</td>
              <td>{item.region}</td>
              <td>{item.height}</td>
              <td>{item.weight}</td>
              <td>{item.bmi}</td>
              <td>{item.shoesize}</td>
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