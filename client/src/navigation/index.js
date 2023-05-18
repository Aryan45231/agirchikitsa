import React from "react";
import { Route, Routes } from "react-router-dom";
import { ProSidebarProvider } from "react-pro-sidebar";
import PrivateRoutes from "./PrivateRoutes";
import Component from "../components";
import Register from "../screens/auth.screen/register.auth.screen/register";
import Signin from "../screens/auth.screen/signin.screen/signin";
import NotFound from "../screens/notFound.screen/notFound";
import Dashboard from "../screens/Dashboard.screen/dashboard";
import Jankari from "../screens/jankari.screen/jankari";
import Feeds from "../screens/Feeds.screen/Feeds";
export default function RootNavigator() {
  return (
    <ProSidebarProvider>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/register" element={<Register />} />
        <Route element={<PrivateRoutes />}>
          <Route element={<Component.SideBar />}>
            <Route path="/jankari" element={<Jankari />} />
            <Route path="/home" element={<Dashboard />} />
            <Route path="/feeds" element={<Feeds />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ProSidebarProvider>
  );
}
