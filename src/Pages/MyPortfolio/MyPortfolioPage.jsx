import React from "react";
import MyPortfolio from "../../Components/Portfolio/MyPortfolio";
import "./MyPortfolioPage.css";

export default function MyPortfolioPage() {
  return (
    <div className="portfolio">
      <h1 className="portfolio-heading">My Portfolio</h1>
      <p className="underline"></p>
      <MyPortfolio />
    </div>
  );
}
