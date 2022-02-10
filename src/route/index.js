import React from "react";
import { Route } from "react-router-dom";
import LoginPage from "../pages/login";
const Index = () => {
  return <Route exact path="/" title={"Login Page"} element={<LoginPage />} />;
};

export default Index;
