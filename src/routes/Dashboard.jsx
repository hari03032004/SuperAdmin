import React from "react";
import "../index.css"
import Topbar from "../components/Topbar";
import Table from "../components/Table";
import Searchbar from "../components/Searchbar";
import Button from "../components/Button";

function Dashboard() {
  const item = [
    {id:1,hospital:"A",display:"Patient",category:"---",description:"---",location:"---",option:" "},
    {id:1,hospital:"A",display:"Patient",category:"---",description:"---",location:"---",option:" "},
    {id:1,hospital:"A",display:"Patient",category:"---",description:"---",location:"---",option:" "},
    {id:1,hospital:"A",display:"Patient",category:"---",description:"---",location:"---",option:" "}
  ]
return (
    <div className="layout">
      <div></div>
      <div className="container">
        <Topbar name="Super Admin Dashboard"/>
        <Searchbar/>
        <Table item={item} />
        <div className="downbar">
          <div className="downbar-buttons">
            <Button data="+ Add new" width="150px"/>
            <Button data="Back" width="100px"/>
          </div>
          <div className="downbar-pages">
            <h1>Pages</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;