import React, { useState, useEffect } from "react";
import "./GreenMarketPlace.css";
import heart from "../../Images/heart.svg";
import cart from "../../Images/cart.svg";
import filter from "../../Images/filter.svg";
import ProductCart from "./ProductCart";
import phone from "../../Images/phone.png";
import axios from "axios";

const GreenMarketPlace = () => {
  const [searchInput, setSearchInput] = useState("");
  const [data, setData] = useState([]);
  const filterButtons = ["All", "Home", "Lifestyle", "Technology"];
  const [filterData, setFilterData] = useState([]);
  const [searchList, setSearchList] = useState([]);

  const getGrerrnMarketProduct = async () => {
    const result = await axios.get(
      `http://localhost:8081/products/category?productCategory=Green Market Place`
    );
    const productData = result.data;
    setData(productData);
    setFilterData(productData);
  };

  const handleFilterOption = (e) => {
    const selectedOption = e.target.value;
    if (selectedOption != "All") {
      const filterOption = data.filter(
        (res) => res.subCategory === selectedOption
      );
      setFilterData(filterOption);
    } else {
      setFilterData(data);
    }
  };

  const handleSearchOption = (e) => {
    const searchInput = e.target.value;
    setSearchInput(searchInput);
    const filterOption = data.filter((res) =>
      res.productName.toLowerCase().includes(searchInput.toLowerCase())
    );
    setSearchList(filterOption);
  };

  const handleSearchResult = (selectedProduct) => {
    setSearchInput(selectedProduct.productName);
    const filterOption = data.filter(
      (res) => res.productName === selectedProduct.productName
    );
    setFilterData(filterOption);
  };

  useEffect(() => {
    getGrerrnMarketProduct();
  }, []);

  return (
    <div className="MarketPlace">
      <div className="header">
        <h1>Green Market Place</h1>
        <div>
          <img className="heart" src={heart} alt="likes" />
          <img src={cart} alt="cart" />
        </div>
      </div>
      <div className="search-box">
        <input
          type="text"
          className="search"
          placeholder="Search products"
          onChange={handleSearchOption}
          value={searchInput}
        />
        <img className="filterIcon" src={filter} alt="filter" />
      </div>

      <div className="search-result">
        {searchList.length ? (
          <ul>
            {searchList.map((item) => (
              <li key={item.productId} onClick={() => handleSearchResult(item)}>
                {item.productName}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
      <div className="filterOption">
        {filterButtons.map((buttonName) => {
          return (
            <button
              type="button"
              onClick={handleFilterOption}
              className="btn"
              value={buttonName}
            >
              {buttonName}
            </button>
          );
        })}
      </div>
      <div className="ads">
        <div className="ads-body">
          <span className="ads-title">Advancement</span>
          <span className="ads-title1">Samsung Galaxy S21</span>
          <div className="buttons">
            <button type="button" className="buy-btn">
              Buy
            </button>
            <span>4425</span>
          </div>
        </div>
        <div className="ads-img">
          <img src={phone} className="phone-img" alt="phone" />
        </div>
      </div>
      <div className="product-container">
        {filterData.map((data) => (
          <ProductCart key={data.productId} data={data} />
        ))}
      </div>
    </div>
  );
};

export default GreenMarketPlace;
