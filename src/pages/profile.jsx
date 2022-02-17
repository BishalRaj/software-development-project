import React, { useState } from "react";
import UserNavBar from "../components/bar/usernavbar";

const Profile = () => {
  const [userComponent, setuserComponent] = useState([]);

  const setCurrentPage = (page) => {
    setuserComponent(page);
  };

  return (
    <>
      <UserNavBar currentPage={setCurrentPage} />
      {userComponent}
    </>
  );
};

export default Profile;
