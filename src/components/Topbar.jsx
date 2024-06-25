import React from "react";

function Topbar(props) {
  return (
    <div className="topbar">
      <h1>{props.name}</h1> 
      <div className="topbar-user">
        <img src="./dash.svg" />
        <h3>Dashboard</h3>
        <img src="./user-image.svg" />
      </div>
    </div>
  );
}

export default Topbar;