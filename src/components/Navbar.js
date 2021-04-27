import React from "react";
import face from "../assets/images/confident-smiling-young-man-9TEB46P 1.png";
import bell from "../assets/icons/notification 1.png";
import searchIcon from "../assets/icons/loupe 1.png";
const Navbar = () => {
  return (
    <div className="navbar">
      <img src={searchIcon} alt="search" className="searchIcon"/>
      <input type="search" placeholder="Search"  />
      <div className="profile">
        <img src={bell} alt="bell" />
        <img src={face} alt="user" className="user" />
      </div>
    </div>
  );
};

export default Navbar;
