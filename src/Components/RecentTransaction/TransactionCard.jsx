import React from "react";
import "./RecentTransaction.css";
import leaf1 from "../../Images/Icon awesome-leaf.svg";
import leaf2 from "../../Images/Icon awesome-leaf-1.svg";
import leaf3 from "../../Images/Icon awesome-leaf-2.svg";
import leaf4 from "../../Images/Icon awesome-leaf-3.svg";
import leaf5 from "../../Images/Icon awesome-leaf-4.svg";
import dollar from "../../Images/Group 24260.svg";

const TransactionCard = (props) => {
  const { companyName, sustainableRating, amount, time, imageUrl } = props.data;

  const leafs = [leaf1, leaf2, leaf3, leaf4, leaf5];
  const newLeaf = leafs.slice(0, sustainableRating);
  return (
    <div className="tranacationCard">
      <div className="icon">
        <img src={imageUrl} className="logo" alt="CompanyLogo" />
      </div>
      <div className="tranacation-details">
        <h1>{companyName}</h1>
        {newLeaf.map((val) => {
          return <img src={val}></img>;
        })}
        <br />
        <div
          className={
            props.toggled === 2 ? "dollar-amount" : "dollar-amount-none"
          }
        >
          <img src={dollar} alt="" />
          <span className="transaction-amount">{amount}</span>
        </div>
      </div>
      <div className="amountCard">
        <h1
          className={
            props.toggled < 3 ? "transaction-amount" : "transaction-amount-red"
          }
        >
          $ {amount}
        </h1>
        <p className="transaction-time">{time} hours ago</p>
      </div>
    </div>
  );
};
export default TransactionCard;
