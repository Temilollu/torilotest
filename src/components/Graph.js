import React from "react";
import "../css/Graph.css";
import vector37 from "../assets/images/Vector 37.png"
import vector35 from "../assets/images/Vector 35.png"
const Graph = () => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  return (
    <div className="graph-container">
    <img src={vector37} className="blue-vector" alt=""/>
    <img src={vector35} className="red-vector" alt=""/>
      <div className="rows">
        <div className="first">
          <p>900</p> <div className="line"></div>
        </div>
        <div className="first">
          <p>600</p> <div className="line"></div>
        </div>
        <div className="first">
          <p>300</p> <div className="line"></div>
        </div>
        <div className="first ">
          <p>0</p> <div className="line"></div>
        </div>
      </div>
      <div className="months">
        {months.map((month) => (
          <p key={month}>{month}</p>
        ))}
      </div>
    </div>
  );
};

export default Graph;
