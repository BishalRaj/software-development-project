import { Fragment } from "react";
import "./App.css";
import { BrowserRouter, Routes } from "react-router-dom";
import Route from "./route";
function App() {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
}

export default App;

// Added new collaborator 
