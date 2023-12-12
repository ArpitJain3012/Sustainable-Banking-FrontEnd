import React, { useEffect, useState } from "react";
import MyPortfolioCard from "./MyPortfolioCard";
import "./MyPortfolio.css";
import axios from "axios";
import PortfolioChart from "../Charts/PortfolioChart";

export default function MyPortfolio() {
  const [data, setData] = useState([]);

  const portfolioData = async () => {
    const result = await axios.get(`http://localhost:8081/portfolio/list`);
    setData(result.data);
  };

  useEffect(() => {
    portfolioData();
  }, []);
  return (
    <div className="portfolio-container">
      <div>
        <p className="portfolio-heading">Portfolio list</p>
        <p className="underline"></p>
      </div>
      <PortfolioChart />

      {data.map((data) => (
        <MyPortfolioCard key={data.id} data={data} />
      ))}
      
    </div>
  );
}
