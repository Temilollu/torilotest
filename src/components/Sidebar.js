import React from "react";
import { Link, useLocation } from "react-router-dom";
import dashboardIcon from "../assets/icons/Vector (12).png";
import companies from "../assets/icons/Group.png";
import projects from "../assets/icons/Vector (13).png";
import messages from "../assets/icons/Vector (15).png";
import settings from "../assets/icons/settings 1.png"
import "../css/sidebar.css";
const Sidebar = () => {
  const sidebarItems = [
    {
      name: "Dashboard",
      icon: dashboardIcon,
      link: "/",
    },
    {
      name: "Companies",
      icon: companies,
      link: "/companies",
    },
    {
      name: "Projects",
      icon: projects,
      link: "/projects",
    },
    {
      name: "Messages",
      icon: messages,
      link: "/messages",
    },
    {
      name: "Settings",
      icon: settings,
      link: "/settings",
    },
  ];

  const { pathname } = useLocation();

  return (
    <div className="side-bar-wrapper">
      {sidebarItems.map((item) => (
        <Link className={pathname === item.link ? "active" : "inactive"}>
          <img src={item.icon} alt="" />
          <p>{item.name}</p>
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
