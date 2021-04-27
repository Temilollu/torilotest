import React from "react";
import positiveIcon from "../assets/icons/Group 2.png";
import neutralIcon from "../assets/icons/Group 2 (1).png";
import negativeIcon from "../assets/icons/Group 2 (2).png";
import "../css/Tableside.css";
const TableSide = () => {
  return (
    <div className="table-side-container">
      <div className="first-col">
        <h2>Customer Satisfation</h2>
        <p>Across help desk this month</p>
        <p id="response">Response received</p>
        <p id="number">390</p>
        <div className="details">
          <div className="positive">
            <p>positive</p>
            <img src={positiveIcon} alt="" />
            <p className="percent">60%</p>
          </div>
          <div className="neutral">
            <p>neutral</p>
            <img src={neutralIcon} alt="" />
            <p className="percent">20%</p>
          </div>
          <div className="negative">
            <p>negative</p>
            <img src={negativeIcon} alt="" />
            <p className="percent">30%</p>
          </div>
        </div>
      </div>
      <div className="second-col"></div>
    </div>
  );
};

export default TableSide;
