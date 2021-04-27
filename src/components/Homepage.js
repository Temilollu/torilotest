import React from "react";
import "../css/homepage.css";
import Graph from "./Graph";
import Navbar from "./Navbar";
import Overview from "./Overview";
import Table from "./Table";
import TableSide from "./TableSide";

const Homepage = () => {
  return (
    <div className="homepage-container">
      <Navbar />
      <Overview />
      <Graph />
      <div className="table-side">
        <Table />
        <TableSide />
      </div>
    </div>
  );
};

export default Homepage;
