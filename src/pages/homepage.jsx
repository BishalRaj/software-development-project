import React from "react";
// import {google} from "../components";
import GoogleMapComponent from "../components/google/maps";
import Navbar from "../components/bar/homepagenavbar";
const Homepage = () => {
  return (
    <div>
      <Navbar />
      <GoogleMapComponent />
    </div>
  );
};

export default Homepage;
