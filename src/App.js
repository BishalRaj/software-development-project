import { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/login";
function App() {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route exact path="/" title={"Login Page"} element={<LoginPage />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
}

export default App;
