import React, { useState} from "react";
import "./Navbar.css";
import img from "../../Images/img.jpg";
import { Link } from "react-router-dom";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import abc from "../../Images/abc.png";
import { SidebarData } from "./SidebarData";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

export default function Navbar() {
  const [sidebar, setsidebar] = useState(false);
  const showsidebar = () => setsidebar(!sidebar);
  return (
    <>
      <div
        style={{ color: "rgba(33, 37, 41, 0.75)", alignItems: "center" }}
        className="nav"
      >
        {" "}
        <Link
          to={"#"}
          style={{ color: "#88C53C", width: "41px", fontSize: "25px" }}
        >
          <HiMiniBars3CenterLeft onClick={showsidebar} />
        </Link>
        <img className="navimg" src={abc}></img>
      </div>
      <div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul onClick={showsidebar}>
            <div style={{ listStyle: "none" }}>
              <li>
                <Link style={{ color: "#88C53C" }} to={"#"}>
                  {" "}
                  <AiOutlineArrowLeft />
                </Link>
              </li>
              <li>
                <img alt="img" className="img-face" src={img}></img>
                <AiOutlineArrowRight />
              </li>
            </div>
            {SidebarData.map((item) => {
              return (
                <li key={item.id} className={item.Name}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </>
  );
}
