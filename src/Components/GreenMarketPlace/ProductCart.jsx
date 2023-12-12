import React from "react";
import "./GreenMarketPlace.css";

const ProductCart = (props) => {
    const { productName, price, imageUrl } = props.data;
    return (
        <div className="green-product-card">
            <div className="card-img">
                <img src={imageUrl} className="image" alt="..."/>
            </div>
            <div className="card-body">
                <span className="productName">{productName}</span>
                <span className="productAmount">${price}</span>
            </div>
        </div>
    );
}

export default ProductCart;