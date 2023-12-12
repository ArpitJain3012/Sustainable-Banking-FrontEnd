import React from "react";

export default function MyPortfolioCard(props) {
  return (
    <div className="portfolioCard">
      <div className="card-icon">
        <img src={props.data.image} className="card-logo" alt="image" />
      </div>
      <div style={{ margin: "10px" }}>
        <h1 className="companyname">{props.data.companyName}</h1>
        <p className="amountinvested">
          {" "}
          amt invested - $ {props.data.amountInvested}
        </p>
      </div>
      <div className={props.data.stockChange > 0 ? "stockup" : "stockdown"}>
        <p>
          {`${props.data.stockChange}` > 0
            ? `${props.data.stockChange}% `
            : `${Math.abs(props.data.stockChange)}% `}
          <i
            className={
              props.data.stockChange > 0
                ? "fa-solid fa-caret-up"
                : "fa-solid fa-caret-down"
            }
          ></i>
        </p>
      </div>
    </div>
  );
}
