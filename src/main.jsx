import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Dashboard from "./routes/Dashboard";
import Navbar from "./components/Navbar";
import Purchase from "./routes/Purchase";
import Payment from "./routes/Payment";
import Settings from "./routes/Settings";
import ContactUs from "./routes/ContactUs";
import AddSubjects from "./routes/AddSubjects";
import Reviews from "./routes/Reviews"
import Accounts from "./routes/Accounts"


import "./components/Sidebar.css";

const AppLayout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
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
        path: "contactUs",
        element: <ContactUs />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);