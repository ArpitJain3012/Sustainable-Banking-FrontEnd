import React, { useState, useEffect } from "react";
import "./DropdownMenu.css";
import RecentTransaction from "../RecentTransaction/RecentTransactions";
import axios from "axios";

export default function DropdownMenu() {
  const categories = ["All", "Food", "Fuel", "Grocery", "Travel","Fashion"];
  const greenPoints = ["All", "Low 1-2", "Medium 2-4", "High 4-5"];
  const [titleName, setTitleName] = useState("Recent")
  const [data, setData] = useState([]);
  const [filterData, setfilterData] = useState([]);
  const [show, setShow] = useState(true);

  const transactionsData = async () => {
    const result = await axios.get(
      `http://localhost:8081/transactions/category`
    );
    setData(result.data.content);
    setfilterData(result.data.content);
  };

  useEffect(() => {
    transactionsData();
  }, []);

  const handleFilter = async (e) => {
    const selectedOption = e.target.value;
    if(e.target.value === "All"){
      setfilterData(data);
    }else{
      setTitleName(e.target.value);
      setShow(!show);
      const filterOption = await axios.get(
        `http://localhost:8081/transactions/category?category=${selectedOption}`
      );
      console.log(filterOption.data.content);
      setfilterData(filterOption.data.content);
    }
  };

  const ratingFilter = (e) => {
    console.log(e.target.value)
    if(e.target.value === "Low 1-2"){
      console.log("handlefilter");
      console.log(data);
      const filterOption = data.filter (
        (res) => res.sustainableRating < 2 
      );
      setfilterData(filterOption);
    }else if(e.target.value === "Medium 2-4"){
      console.log("handlefilter");
      console.log(data);
      const filterOption = data.filter (
        (res) => (res.sustainableRating > 2 && res.sustainableRating < 4)
      );
      setfilterData(filterOption);
    }else if(e.target.value === "High 4-5"){
      console.log("handlefilter");
      console.log(data);
      const filterOption = data.filter (
        (res) => res.sustainableRating > 4
      );
      setfilterData(filterOption);
    }else {
      setfilterData(data);
    }
  };

  return (
    <div className="container-box">
      <span style={{ fontSize: "20px" }}>{titleName} Transaction</span>
          <br />
      {show && 
        <div className="row">
          <div className="col-6">
            <select
              name="Categories"
              defaultValue="Categories"
              className="drop-down-button"
              onChange={(e) => e.target.value}
              onClick={handleFilter}
            >
              {categories.map((category, index) => {
                return <option key={index}>{category}</option>;
              })}
            </select>
          </div>
          <div className="col-6">
            <select
              name="greenpoints"
              defaultValue="Green Points"
              className="drop-down-button"
              onChange={(e) => e.target.value}
              onClick={ratingFilter}
            >
              {greenPoints.map((points, index) => {
                return <option key={index}>{points}</option>;
              })}
            </select>
          </div>
        </div>
      }
      <RecentTransaction data={filterData}/>
    </div>
  );
}
