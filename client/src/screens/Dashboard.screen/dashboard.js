import React from "react";
import { useOutletContext } from "react-router-dom";
import useViewModel from "./dashboardViewModel";
import "./dashboard.css";
import Component from "../../components";
import { TaskCard } from "./components";
export default function Dashboard() {
  const {  } = useViewModel();
  return (
    <div className="container">
        <h1> DashBoard </h1>
    </div>
  );
}
