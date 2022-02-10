import React from "react";
import { Route } from "react-router";
import LoginPage from "../pages/login";
const Routes = () => {
  return <Route exact path="/" title={"Login Page"} element={<LoginPage />} />;
};

export default Routes;
