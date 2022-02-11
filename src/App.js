import { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import HomePage from "./pages/homepage";
function App() {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route exact path="/" title={"Home Page"} element={<HomePage />} />
          <Route
            exact
            path="/register"
            title={"Register Page"}
            element={<RegisterPage />}
          />
          <Route
            exact
            path="/login"
            title={"Login Page"}
            element={<LoginPage />}
          />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
}

export default App;
