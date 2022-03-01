import React from "react";
import "./AccountTable.scss";

const AccountTable = (props) => {
  const data = props.accountData;
  return (
    <div className="accountTableWrapper" style={{ color: "white" }}>
      <table>
        <thead style={{ borderRadius: "10px !important" }}>
          <tr>
            <th>ASSET</th>
            <th>AMOUNT</th>
            <th>USER ACCOUNT</th>
            <th>REFERRAL EARNING</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className="asset">
              <img src={data.img} alt="btc-icon" />
              <div className="btc">
                <span className="stats">{data.asset}</span>
                <div className="avax">
                  <span className="status">Put&nbsp;</span>
                  <div className="avaxContent">
                    <img src={data.chain.img} alt="avax-icon" />
                    <span>{data.chain.name}</span>
                  </div>
                </div>
              </div>
            </td>

            <td className="amount">
              <div>
                <span className="stats">{data.amount}</span>
                <span className="status">{data.state}</span>
              </div>
            </td>

            <td className="userAccount">
              <span className="stats">
                {data.user.slice(0, 5)}..{data.user.slice(-7)}
              </span>
            </td>

            <td className="referralEarning">
              <div>
                <span className="stats">{data.referral_earnings}</span>
                <span className="status">
                  View on BSC Scan
                  <img src="assets/externalLink.png" alt="externalLink" />
                </span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AccountTable;
