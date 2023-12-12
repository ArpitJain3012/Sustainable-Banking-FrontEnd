import React, { useEffect, useState } from "react";
import Card from "../Cards/Card";
import "./SustainabilityProducts.css";
import axios from "axios";

function SustainabilityProducts() {
  const [data, setData] = useState([]);

  const sustainabilityProductsData = async () => {
    const result = await axios.get(`http://localhost:8081/products/category?productCategory=Sustainable Products`);
    setData(result.data);
  };

  useEffect(() => {
    sustainabilityProductsData();
  }, []);

  return (
    <div className="sustainabilityProducts">
      <div className="headingText">
        <div>
          <h3 className="heading">Sustainable Products</h3>
        </div>
        <div className="Description">
          <p style={{ color: "#C9C9C9" }}>
            Your finances and investments can also be green. We offer various
            financial products that are environmentally friendly.
          </p>
        </div>
        <div>
          <h5 className="heading-secondary">Select a Type</h5>
        </div>
      </div>
      <div className="cardsList">
        {data.map((card) => (
          <div className="cards">
            <Card
              img={card.imageUrl}
              title={card.productName}
              desc={card.productDescription}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SustainabilityProducts;
