import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import { FaUserAlt } from "react-icons/fa";
import "./Sidebar.css";

export const SidebarData = [
  {
    title: "Dashboard",
    path: "/",
    icon: <img src="./Chart.svg" className="svg"/>,
    cName: "nav-text",
  },
  {
    title: "Purchase",
    path: "/Purchase",
    icon: <img src="./Buy.svg" className="svg"/>,
    cName: "nav-text",
  },
  {
    title: "Add Subjects",
    path: "/AddSubjects",
    icon: <img src="./Document.svg" className="svg"/>,
    cName: "nav-text",
  },
  {
    title: "Reviews",
    path: "/Reviews",
    icon: <img src="./Chat.svg" className="svg"/>,
    cName: "nav-text",
  },
  {
    title: "Settings",
    path: "/Settings",
    icon: <img src="./Setting.svg" className="svg"/>,
    cName: "nav-text",
  },
  {
    title: "Payments",
    path: "/Payments",
    icon: <img src="./Wallet.svg" className="svg"/>,
    cName: "nav-text",
  },
  {
    title: "Accounts",
    path: "/Accounts",
    icon: <img src="./Profile.svg" className="svg"/>,
    cName: "nav-text",
  },
  {
    title: "ContactUs",
    path: "/ContactUs",
    icon: <img src="./Help.svg" className="svg"/>,
    cName: "nav-text",
  },
];
