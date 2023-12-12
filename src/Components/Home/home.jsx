import React, { Suspense, lazy } from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./home.css";
import RecentTransaction from "../RecentTransaction/RecentTransactions";
import HomeCards from "../HomeCards/HomeCards";
import QuickPay from "../QuickPay/QuickPay";
import DropdownMenu from "../Dropdown/DropdownMenu";
import arrowForward from '../../Images/arrow-forward.svg';
import axios from "axios";
import DoughnutChart from "../Charts/DashboardDonut";
import HalfDoughnutChart from "../Charts/HalfDonut";
import HomeDoughnutChart from "../Charts/HomeDashboard";


export default function Home() {
  const [toggled, setToggled] = useState(1);
  const [data, setData] = useState([]);

  const transactionsData = async () => {
    const result = await axios.get(
      `http://localhost:8081/transactions/category`
    );
    const details = result.data.content;
    setData(details);
  };

  useEffect(() => {
    transactionsData();
  }, []);

  return (
    <div>
      {toggled === 1 ? (
        <div className="home">
          <h5 style={{ color: "#FFFFFF", opacity: "80%" }}>Hi Nordin!</h5>
          <h3 className="underline">Spend Analysis</h3>
          <div className="toggle-wrapper">
            <span>
              {" "}
              <p>Show only sustainablity spendings</p>{" "}
            </span>
            <button className="toggle-button" onClick={() => setToggled(3)}>
              {" "}
              <img src={require("../../Images/Toggle Off.png")} />{" "}
            </button>
          </div>
          <DoughnutChart />
          <span style={{ fontSize: "20px" }}>Recent Transaction</span>
          <RecentTransaction data={data}/>
        </div>
      ) : null}

      {toggled === 2 ? (
        <div className="home">
          <h5 style={{ color: "#FFFFFF", opacity: "80%" }}>Hi Nordin!</h5>
          <h3 className="underline">Spend Analysis</h3>
          <div className="toggle-wrapper">
            <span>
              {" "}
              <p>Show only sustainablity spendings</p>{" "}
            </span>
            <button className="toggle-button" onClick={() => setToggled(3)}>
              {" "}
              <img src={require("../../Images/Toggle Off.png")} />{" "}
            </button>
          </div>
          <HomeDoughnutChart />
          <span style={{ fontSize: "20px" }}>Recent Transaction</span>
          <div className="recent-transactions">
            <Link to="/recenttransactions" className="nav-transaction">
              View all <img src={arrowForward}></img>
            </Link><br />
            <RecentTransaction toggled={toggled} data={data}/>
          </div>

          <QuickPay />
          <HomeCards />
        </div>
      ) : null}

      {toggled === 3 ? (
        <div className="home">
          <h5 style={{ color: "#FFFFFF", opacity: "80%" }}>Hi Nordin!</h5>
          <h3 className="underline">Spend Analysis</h3>
          <div className="toggle-wrapper">
            <span>
              {" "}
              <p>Show only sustainablity spendings</p>{" "}
            </span>
            <button className="toggle-button" onClick={() => setToggled(2)}>
              {" "}
              <img src={require("../../Images/Toggle On.png")} />{" "}
            </button>
          </div>
          <HalfDoughnutChart />
          <DropdownMenu />
        </div>
      ) : null}
    </div>
  );
}