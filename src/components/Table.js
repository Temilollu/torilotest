import React from "react";
import "../css/Table.css";
import Dot from "./Dot";
import cregitalIcon from "../assets/icons/Cregital.png";
import inteliaLogo from "../assets/icons/Rectangle 12.png";
import optisoftLogo from "../assets/icons/Rectangle 12 (2).png";
import imperialsoftLogo from "../assets/icons/Rectangle 12 (3).png";
import AItechmaLogo from "../assets/icons/Rectangle 12 (4).png";
import TalosmartLogo from "../assets/icons/Rectangle 12 (5).png";
import AtlassianLogo from "../assets/icons/Rectangle 12 (6).png";
import WeevilCompanyLogo from "../assets/icons/Rectangle 12 (7).png";
import EnyataLogo from "../assets/icons/Rectangle 12 (8).png";
import CloudNetLogo from "../assets/icons/Rectangle 12 (9).png";
import backwardArrow from "../assets/icons/Vector (16).png";
import forwardArrow from "../assets/icons/Vector (17).png";
export const tableData = [
  {
    logo: cregitalIcon,
    companyName: "Cregital",
    companySize: 102,
    yearsOfInc: 3,
    revenue: "NGN 1,000,000",
    status: "Approved",
    color: "rgba(80, 184, 60, 1)",
  },
  {
    logo: inteliaLogo,
    companyName: "Intelia",
    companySize: 102,
    yearsOfInc: 3,
    revenue: "NGN 1,000,000",
    status: "Approved",
    color: "rgba(80, 184, 60, 1)",
  },
  {
    logo: optisoftLogo,
    companyName: "Optisoft",
    companySize: 102,
    yearsOfInc: 3,
    revenue: "NGN 1,000,000",
    status: "Approved",
    color: "rgba(80, 184, 60, 1)",
  },
  {
    logo: imperialsoftLogo,
    companyName: "Imperialsoft",
    companySize: 102,
    yearsOfInc: 3,
    revenue: "NGN 1,000,000",
    status: "Declined",
    color: "rgba(250, 95, 28, 1)",
  },
  {
    logo: AItechmaLogo,
    companyName: "AItechma",
    companySize: 102,
    yearsOfInc: 3,
    revenue: "NGN 1,000,000",
    status: "Declined",
    color: "rgba(250, 95, 28, 1)",
  },
  {
    logo: TalosmartLogo,
    companyName: "Talosmart",
    companySize: 102,
    yearsOfInc: 3,
    revenue: "NGN 1,000,000",
    status: "Pending",
    color: "rgba(255, 202, 0, 1)",
  },
  {
    logo: AtlassianLogo,
    companyName: "Atlassian",
    companySize: 102,
    yearsOfInc: 3,
    revenue: "NGN 1,000,000",
    status: "Declined",
    color: "rgba(250, 95, 28, 1)",
  },
  {
    logo: WeevilCompanyLogo,
    companyName: "Weevil Company",
    companySize: 102,
    yearsOfInc: 3,
    revenue: "NGN 1,000,000",
    status: "Approved",
    color: "rgba(80, 184, 60, 1)",
  },
  {
    logo: CloudNetLogo,
    companyName: "CloudNet",
    companySize: 102,
    yearsOfInc: 3,
    revenue: "NGN 1,000,000",
    status: "Approved",
    color: "rgba(80, 184, 60, 1)",
  },
  {
    logo: EnyataLogo,
    companyName: "Enyata",
    companySize: 102,
    yearsOfInc: 3,
    revenue: "NGN 1,000,000",
    status: "Approved",
    color: "rgba(80, 184, 60, 1)",
  },
];

const Table = () => {
  return (
    <div className="table-container">
      <div className="heading">
        <div className="tabs">
          <div className="tab-item active">All</div>
          <div className="tab-item">
            <Dot color="rgba(80, 184, 60, 1)" /> Approved
          </div>
          <div className="tab-item">
            <Dot color="rgba(255, 219, 81, 1)" /> Pending
          </div>
          <div className="tab-item">
            <Dot color="rgba(80, 184, 60, 1)" /> Declined
          </div>
        </div>
        <select>
          <option value="sort">Sort</option>
        </select>
      </div>

      <table style={{ width: "100%" }}>
        <tr>
          <th>
            <input type="checkbox" name="" id="" />
          </th>
          <th width="35%" style={{ paddingLeft: "4rem" }}>
            Company name
          </th>
          <th width="18%">Company size</th>
          <th width="12%">Yrs of inc.</th>
          <th width="42%">Revenue</th>
        </tr>

        {tableData.map((row) => (
          <tr key={row.companyName}>
            <td>
              <input type="checkbox" name="" id="" />
            </td>
            <td>
              <img src={row.logo} alt="logo" /> <span>{row.companyName}</span>
            </td>
            <td>{row.companySize}</td>
            <td>{row.yearsOfInc}</td>
            <td className="status-row">
              <span>{row.revenue}</span>
              <div
                className="status"
                style={{
                  backgroundColor:
                    row.status === "Approved"
                      ? "#E3F1DF"
                      : row.status === "Declined"
                      ? "#FDECE2"
                      : "#FFFAE8",
                  color: row.color,
                }}
              >
                <Dot color={row.color} />
                <span>{row.status}</span>
              </div>{" "}
            </td>
          </tr>
        ))}
      </table>
      <div className="table-footer">
        <img src={backwardArrow} alt="" />
        <ul className="pagination">
          <li className="active">1</li>
          <li>2</li>
          <li>3</li>
          <li className="double-dots">...</li>
          <li>200</li>
        </ul>
        <img src={forwardArrow} alt="" />
      </div>
    </div>
  );
};

export default Table;
