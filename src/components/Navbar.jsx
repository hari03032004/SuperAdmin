import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import { IconContext } from "react-icons";
import "./Sidebar.css";  

function Navbar() {
  const [sidebar, setSidebar] = useState(true);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "black" }}>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" >
            <li className="logo">
              <img src="./logo.svg" className="logo-image" height="40px"/>
              <Link to="/" className="logo-text">
                  PaceB  
              </Link>
            </li>
            <li className="menu">
              MENU
            </li>
            {SidebarData.map((item, index) => {
              if(index<4 || index >4){
                return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    {console.log(item.icon)}
                    <span >{item.title}</span>
                  </Link>
                </li>
              );
              }
              else if(index === 4){
                return (
                <>
                  <li className="menu">
                    OTHERS
                  </li>
                  <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span >{item.title}</span>
                  </Link>
                </li>
                </>
                
              );
              }
            })}
          </ul>
          <p className="logout">Logout</p>
        </nav>
        
      </IconContext.Provider>
    </>
  );
}

export default Navbar;