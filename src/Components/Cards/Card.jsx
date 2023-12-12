import React from "react";
import "./Card.css";

function Card(props){
    return(
        <div className="product-card">
                <img className="product-cardImg"  src = {props.img} alt ="" />
                <h6 className="product-cardTitle">{props.title}</h6>
                <p className="product-cardDesc">{props.desc}</p>
            </div>
    )
}

export  default Card;