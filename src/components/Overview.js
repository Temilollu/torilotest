import React from "react";
import upArrow from "../assets/icons/Shape.png";
import downArrow from "../assets/icons/Shape (1).png";
const Overview = () => {
  const overviewData = [
    {
      title: "Registered companies",
      percentage: 5.25,
      number: 849,
      time: "Since last week",
      bgColor: "rgba(253, 236, 226, 1)",
    },
    {
      title: "New application",
      percentage: 1.23,
      number: 508,
      time: "Since last week",
      bgColor: "rgba(234, 239, 253, 1)",
    },
    {
      title: "Total project done",
      percentage: 1.23,
      number: 508,
      time: "Since last week",
      bgColor: "rgba(255, 243, 197, 1)",
    },
    {
      title: "New projects",
      percentage: 5.25,
      number: 508,
      time: "Since last week",
      bgColor: "rgba(231, 245, 254, 1)",
    },
  ];
  return (
    <div className="overview-container">
      <h2>Overview</h2>
      <div className="overview-item">
        {overviewData.map((overview) => (
          <div
            className="overview"
            style={{ backgroundColor: overview.bgColor }}
          >
            <p className="title">{overview.title}</p>
            <p className="number">{overview.number}</p>
            <p
              className={
                overview.percentage > 5 ? "percentage green" : "percentage red"
              }
            >
              {overview.percentage > 5 ? (
                <img src={upArrow} alt="up" />
              ) : (
                <img src={downArrow} alt="down" />
              )}{" "}
              {overview.percentage}%
            </p>
            <p className="time">{overview.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Overview;
