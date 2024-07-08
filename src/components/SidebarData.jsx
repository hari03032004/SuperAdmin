import React from "react";
import { GrUpdate } from "react-icons/gr";
import "./Sidebar.css";

export const SidebarData = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: <img src="../public/Chart.svg" className="d svg"/>,
    cName: "nav-text",
  },
  {
    title: "Purchase",
    path: "/Purchase",
    icon: <img src="../public/Buy.svg" className="svg"/>,
    cName: "nav-text",
  },
  {
    title: "Add Subjects",
    path: "/AddSubjects",
    icon: <img src="../public/Document.svg" className="svg"/>,
    cName: "nav-text",
  },
  {
    title: "Reviews",
    path: "/Reviews",
    icon: <img src="../public/Chat.svg" className="svg"/>,
    cName: "nav-text",
  },
  {
    title: "Settings",
    path: "/Settings",
    icon: <img src="../public/Setting.svg" className="svg"/>,
    cName: "nav-text",
  },
  {
    title: "Payments",
    path: "/Payment",
    icon: <img src="../public/Wallet.svg" className="svg"/>,
    cName: "nav-text",
  },
  {
    title: "Accounts",
    path: "/Accounts",
    icon: <img src="../public/Profile.svg" className="svg"/>,
    cName: "nav-text",
  },
  {
    title: "OTA Update",
    path: "/otaupdate",
    icon: <GrUpdate color="#E64E4D" />,
    cName: "nav-text",
  },
  {
    title: "ContactUs",
    path: "/ContactUs",
    icon: <img src="../public/Help.svg" className="svg"/>,
    cName: "nav-text",
  },
];
