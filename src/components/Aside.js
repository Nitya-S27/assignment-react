import React from "react";
import "./Aside.scss";
import { BiChevronDown } from "react-icons/bi";
import { BsArrowLeft } from "react-icons/bs";
import { RiWallet3Line } from "react-icons/ri";
import { MdCancelPresentation } from "react-icons/md";

const Aside = (props) => {
  return (
    <div className={`${props.className} asideWrapper`}>
      <div className="asideButtons">
        <div className="avalanche">
          <img src="assets/avalanche.png" alt="avalanche" />
          <span>Avalanche</span>
          <BiChevronDown className="downArrow" />
        </div>
        <div className="staticInfo">
          <RiWallet3Line className="wallet" />
          <span>0xf6...1353</span>
          <BiChevronDown className="downArrow" />
        </div>
      </div>

      <div className="form">
        <div className="formHeading">
          <BsArrowLeft className="leftArrow" />
          <span>Custom Link</span>
        </div>
        <p>https://testnet.xyz.xyz/trade?ref=</p>
        <input type="text" placeholder="ENTER" />
      </div>

      <div className="submissionButton">
        <div className="customLink">
          <img src="assets/externalLink.png" alt="link" />
          <span>Custom Link</span>
        </div>
        <div className="cancel">
          <MdCancelPresentation className="cancelIcon" />
          <span>Cancel</span>
        </div>
      </div>
    </div>
  );
};

export default Aside;
