import React from 'react';


export default function Dtable(props) {
  const items = props.item;
  const uniqueKeys = [...new Set(items.flatMap(obj => Object.keys(obj)))];
  return(
    <table className="dash-table">
      <tr>
        {uniqueKeys.map((heading,i)=>{
          if(heading==="AnalysisRemaining"){
            return <th key={i}>Analysis Remaining </th>
          }
          else{
            return <th key={i}>{heading}</th>
          }
        })}
      </tr>
      {items.map((item,idx) => {
          return(
            <tr key={idx}>
              <td>{item.id}</td>
              <td>{item.status}</td>
              <td>{item.AnalysisRemaining}</td>
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

