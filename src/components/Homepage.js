import React from "react";
import "../css/homepage.css";
import Navbar from "./Navbar";
import Overview from "./Overview";
import Table from "./Table";
import TableSide from "./TableSide";

const Homepage = () => {
  return (
    <div className="homepage-container">
      <Navbar />
      <Overview />
      <div className="table-side">
        <Table />
        <TableSide />
      </div>
    </div>
  );
};

export default Homepage;
