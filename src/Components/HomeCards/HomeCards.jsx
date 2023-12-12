import React from "react";
import "./HomeCards.css";
import { Link } from "react-router-dom";

function HomeCard(props) {
    return (
        <div className="card-home">
            <div className="homecard-body">
            <Link to={props.redirectTo} className="">
                <img className="homecard-img"  src = {props.img} alt = {props.alt} />
                <h2 className="homecard-title">{props.title} <br /> {props.title2}</h2>
            </Link>
            </div>
        </div>
    )
}

function HomeCards() {
    return(
    <div className="wrapper">

    <div><h3 className="underline">Sustainable Products</h3></div>

    <HomeCard
    img = {require("../../Images/Green Auto Loans.png")}
    alt = "Grass Houses"
    title = "Green Investments"
    title2 = "Green Future"
    redirectTo = "SustainableProduct"
    />

    <div><h3 className="underline">Green Market Place</h3></div>

    <HomeCard
    img = {require("../../Images/CheekyPanda.jpg")}
    alt = "Cheeky Panda"
    title = "Planet Positive"
    title2 = "Shopping"
    redirectTo = "GreenMarketPlace"
    />
    </div>

    )
}

export default HomeCards;