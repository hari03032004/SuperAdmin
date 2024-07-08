import React from "react";
function Topbar(props) {
  return (
    <div className="topbar">
      <div className="topbar-heading">
        <h1>{props.name}</h1>
      </div>
      <div className="topbar-user">
        {props.dash && <img src="../public/dash.svg" />}
        {props.dashboard && <h3>Dashboard</h3>}
        {props.user && <img src="../public/user-image.svg"/>}
      </div>
    </div>
  );
}

export default Topbar;