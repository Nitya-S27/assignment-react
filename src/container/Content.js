import React, { useEffect, useState } from "react";
import { RiWallet3Line, RiFileCopyFill } from "react-icons/ri";
import { MdCancel } from "react-icons/md";
import AccountTable from "../components/AccountTable";
import "./Content.scss";
const Rewards = [
  {
    id: "1",
    amount: "$40",
    currency: "AVAX",
  },
  {
    id: "2",
    amount: "$40",
    currency: "BNB",
  },
  {
    id: "3",
    amount: "$40",
    currency: "BTC",
  },
];

const Referral = [
  {
    refAmount: "",
    refDes: "Your Referral LInk for xyz",
    refLink: "https://unityexchange.design",
  },
  {
    refAmount: "",
    refDes: "Your Referral LInk for xyz",
    refLink: "https://unityexchange.design",
  },
];

const Content = (props) => {
  const [promoVisibility, setPromoVisibility] = useState(true);
  const [accountData, setAccountData] = useState([]);
  const [currIndex, setCurrIndex] = useState(0);
  const [buttonClass, setButtonClass] = useState("action");

  const fetchAcountData = async () => {
    const response = await fetch(
      "https://raw.githubusercontent.com/akshita151199/APIs/main/data"
    );
    const data = await response.json();
    setAccountData(data.data);
  };

  useEffect(() => {
    fetchAcountData();
  }, []);

  const promoVisibilityHandler = () => {
    setPromoVisibility((prev) => !prev);
  };

  return (
    <div className={`${props.className} contentWrapper`}>
      <div className="topNav">
        <div className="title">Section</div>
        <div className="tierButton">
          <div>
            <RiWallet3Line className="walletIcon" />
          </div>
          <div className="tierAmount">0.2$XYZ</div>
          <div className="tierInfo">Tier 1</div>
        </div>
      </div>

      <div
        style={{ display: promoVisibility ? "flex" : "none" }}
        className="promoPanel"
      >
        <div className="description">
          <MdCancel onClick={promoVisibilityHandler} className="cancelIcon" />
          <p>
            Lorem ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <button>Tutorial</button>
        </div>
        <img
          className="illustration"
          src="assets/database.png"
          alt="database"
        />
      </div>

      <div className="rewards">
        <p className="rewardHeading">Your rewards</p>
        <div className="rewardDes">
          <h1 className="rewardAmt">$ 0.26231428</h1>
          <div className="button">
            <img src="assets/externalLink.png" alt="externalLink" />
            <span>Custom Link</span>
          </div>
        </div>
        <div className="rewardCurrency">
          {Rewards.map((reward) => (
            <p key={reward.id}>
              {reward.amount}
              {reward.currency}
            </p>
          ))}
        </div>
      </div>

      <div className="referral">
        {Referral.map((details, index) => (
          <div key={index} className="referralDetails">
            <div className="moneyBag">
              <img src="assets/moneyBag.png" alt="moneyBag" />
              <span>12.5% of fee</span>
            </div>
            <p className="des">{details.refDes}</p>
            <div className="link">
              <p>{details.refLink}</p>
              <RiFileCopyFill className="copyIcon" />
            </div>
          </div>
        ))}
      </div>

      {accountData.length !== 0 && (
        <div>
          <div className="contentNavigation">
            {accountData.map((data, index) => (
              <div key={index} className="navigationButton">
                <button
                  className={index === currIndex && buttonClass}
                  onClick={() => {
                    setCurrIndex(index);
                    setButtonClass("action");
                  }}
                >
                  {index === 0 ? "First" : "Second"} Tab
                </button>
              </div>
            ))}
          </div>
          <AccountTable accountData={accountData[currIndex]} />
        </div>
      )}
    </div>
  );
};

export default Content;
