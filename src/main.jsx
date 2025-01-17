import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import App from "./App"
import Dashboard from "./routes/Dashboard";
import Navbar from "./components/Navbar";
import Purchase from "./routes/Purchase";
import Payment from "./routes/Payment";
import Settings from "./routes/Settings";
import ContactUs from "./routes/ContactUs";
import AddSubjects from "./routes/AddSubjects";
import Reviews from "./routes/Reviews";
import Accounts from "./routes/Accounts";
import DoctorDetails from './routes/DoctorDetails';
import PatientDetails from "./routes/PatientDetails"
import "./components/Sidebar.css";
import './App.css'
import "./index.css"

const AppLayout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);

const router = createBrowserRouter([
  {
    path: "/login",
    element:<App/>,
  },
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "/dashboard/doctorDetails",
        element: <DoctorDetails />,
      },
      {
        path: "/dashboard/patientDetails",
        element: <PatientDetails />,
      },
      {
        path: "/purchase",
        element: <Purchase />,
      },
      {
        path: "/addSubjects",
        element: <AddSubjects />,
      },
      {
        path: "/Reviews",
        element: <Reviews />,
      },
      {
        path: "/accounts",
        element: <Accounts />,
      },
      {
        path: "/payment",
        element: <Payment />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
      {
        path: "/contactus",
        element: <ContactUs />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);