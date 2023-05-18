import React, { useContext, useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../../context/auth.context";
import Component from "../../../components";

export default function register() {
  const { isAuthenticated } = useContext(AuthContext);
 
  if (isAuthenticated) {
    return <Navigate to="/home" />;
  }
  return (
    <div>
      {/* <Component.Row justifyContent="space-between">
        <p>1</p>
        <Component.Spacer position="left" size="100" />
        <p>2</p>
      </Component.Row>
      <Component.TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
      />
      <Component.Alert severity="success">Page not found</Component.Alert>
      <Component.CircularProgress /> */}
    </div>
  );
}