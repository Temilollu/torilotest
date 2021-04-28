import React from "react";
import "../css/Graph.css";
import vector37 from "../assets/images/Vector 37.png";
import vector35 from "../assets/images/Vector 35.png";
import Dot from "./Dot";
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
      <div className="graph-heading">
        <select>
          <option value="sort">Sort</option>
        </select>
        <div className="dots">
          <p className="dots-text">
            <Dot color="rgba(41, 121, 242, 1)" /> <span> Projects done </span>
          </p>
          <p className="dots-text">
            <Dot color="rgba(250, 95, 28, 1)" /> <span>New Application</span>{" "}
          </p>
        </div>
      </div>
      <div className="graph">
        <img src={vector37} className="blue-vector" alt="" />
        <img src={vector35} className="red-vector" alt="" />
        <div class="vl"></div>
        <div className="circle"></div>
        <div className="new-app">
          <p className="numbers">689</p>
          <p>New applications</p>
        </div>
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
            <p key={month} className={month}>{month}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Graph;
