import React, { useState } from "react";
import { BsGrid, BsFileBarGraph, BsBarChart, BsGlobe2 } from "react-icons/bs";
import { AiOutlineDollar } from "react-icons/ai";
import { AiOutlinePieChart, AiOutlineControl } from "react-icons/ai";
import { FaShareAlt } from "react-icons/fa";
import { TiDocumentText } from "react-icons/ti";
import { WiMoonFull } from "react-icons/wi";
import {
  RiDatabase2Line,
  RiMoonClearFill,
  RiNotificationBadgeLine,
} from "react-icons/ri";

import "./Sidebar.scss";

const sidebarContent = [
  {
    id: "s1",
    icon: <BsGrid />,
    link: "Home",
  },
  {
    id: "s2",
    icon: <BsFileBarGraph />,
    link: "Section 1",
  },
  {
    id: "s3",
    icon: <AiOutlineControl />,
    link: "Section 2",
  },
  {
    id: "s4",
    icon: <RiNotificationBadgeLine />,
    link: "Section 3",
  },
  {
    id: "s5",
    icon: <AiOutlineDollar />,
    link: "Section 4",
  },
  {
    id: "s6",
    icon: <RiDatabase2Line />,
    link: "Section 5",
  },
  {
    id: "s7",
    icon: <AiOutlinePieChart />,
    link: "Section 6",
  },
  {
    id: "s8",
    icon: <BsBarChart />,
    link: "Section 7",
  },
  {
    id: "s9",
    icon: <FaShareAlt />,
    link: "Section 8",
  },
  {
    id: "s10",
    icon: <TiDocumentText />,
    link: "Documentation",
  },
];

const Sidebar = (props) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  if (isCollapsed === true) {
    return (
      <div className="openSidebar">
        <img
          onClick={() => setIsCollapsed(false)}
          src="assets/closing_icon.png"
          alt="closing_icon"
        />
      </div>
    );
  }

  return (
    <div className={`${props.className} sidebarWrapper`}>
      <div className="sidebarHeading">
        <div className="heading">
          <img src="assets/n.png" alt="n" className="headingIcon" />
          <h1 className="headingText">Name</h1>
        </div>
        <img
          onClick={() => setIsCollapsed(true)}
          className="collapse"
          src="assets/closing_icon.png"
          alt="closing_icon"
        />
      </div>

      <div className="sidebarNavigation">
        {sidebarContent.map((content) => (
          <ul key={content.id}>
            <li>
              <div className="sidebarNavigationContent">
                <span>{content.icon}</span>
                <a href="www.google.com">{content.link}</a>
              </div>
            </li>
          </ul>
        ))}
      </div>

      <div className="sidebarFooter">
        <div className="sidebarFooterButton">
          <div className="leftButton">
            <img src="assets/n.png" alt="n" />
            <span className="price">$0.90</span>
          </div>
          <div className="rightButton">
            <span className="price">BUY $XYZ</span>
          </div>
        </div>
        <div className="themeChanger">
          <BsGlobe2 className="globeIcon" />
          <div className="theme">
            <RiMoonClearFill className="lightTheme" />
            <WiMoonFull className="darkTheme" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
