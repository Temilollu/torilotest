import React from "react";
import positiveIcon from "../assets/icons/Group 2.png";
import neutralIcon from "../assets/icons/Group 2 (1).png";
import negativeIcon from "../assets/icons/Group 2 (2).png";
import "../css/Tableside.css";
import { tableData } from "./Table";
import verticon from "../assets/icons/vertIcon.png";

const TableSide = () => {
  const tableSideData = tableData.slice(0, 5);

  return (
    <div className="table-side-container">
      <div className="first-col">
        <h2>Customer Satisfation</h2>
        <p className="across">Across help desk this month</p>
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
      <div className="second-col">
        <div className="heading">
          <h2>Messages</h2> <button>+ New message</button>
        </div>
        <div className="messages">
          {tableSideData.map((table) => (
            <div className="message">
              <img src={table.logo} alt={table.companyName} />
              <div className="text">
                <p className="name">{table.companyName}</p>
                <p>Hey, don’t forget to clear server cache!</p>
                <p>25mins</p>
              </div>
              <img src={verticon} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TableSide;
