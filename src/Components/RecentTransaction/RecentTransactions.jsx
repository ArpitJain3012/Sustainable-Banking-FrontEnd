import React from "react";
import "./RecentTransaction.css";
import TransactionCard from "./TransactionCard";

const RecentTransaction = (props) => {
  const transactionData = props.data;
  
  return (
    <>
      {transactionData.length > 0 ? (
        <div className="transaction-container">
          {props.toggled === 2
            ? transactionData
                .slice(0, 3)
                .map((val) => (
                  <TransactionCard
                    key={val.transactionId}
                    data={val}
                    toggled={props.toggled}
                  />
                ))
            : transactionData.map((val) => (
                <TransactionCard
                  key={val.transactionId}
                  data={val}
                  toggled={props.toggled}
                />
              ))}
        </div>
      ) : null}
    </>
  );
  
};
export default RecentTransaction;
