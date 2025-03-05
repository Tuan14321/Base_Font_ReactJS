import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/login/login";
import { appPath } from "./appPath";
import PrivateRoute from "./privateRouter";

const AppRouters = () => {
  return (
    <Routes>
      <Route path="*" element={<Login />} exact />
      <Route path={appPath.login} element={<Login />} exact />

      <Route
        path={appPath.home}
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
        exact
      />
    </Routes>
  );
};

export default AppRouters;
