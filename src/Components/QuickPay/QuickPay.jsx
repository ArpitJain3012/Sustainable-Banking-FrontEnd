import React from "react";
import upArrow from "../../Images/upArrow.png";
import GoPay from "../../Images/GoPay.png";
import image1 from "../../Images/image1.png";
import Image2 from "../../Images/Image2.png";
import Image3 from "../../Images/Image3.png";
import Image4 from "../../Images/Image4.png";
import rightArrow from "../../Images/rightArrow.svg";
import { useState } from 'react';
import "./QuickPay.css";

const QuickPay = () => {
    const [name, setName] = useState("");

    return(
        <div className='quickPayCard'>
            <div className="pay-box">
                <div className="wallet-box">
                    <img src={GoPay} className="Icon" alt="wallet" />
                </div>
                <div><h4 style={{margin:"14px"}}>GoPay</h4></div>
                <div className="arrow-box">
                    <img src={upArrow} className="Icon arrowIcon" alt="arrow" />
                </div>
            </div>
            <div className="paymentDetails">
                <p className="card-title">Recent Transaction</p>
                <div className="card-body">
                    <div className="card">
                        <img className="card-img-top" src={image1} alt="Card image cap" />
                        <p className="card-text">Jenny</p>
                    </div>
                    <div className="card">
                        <img className="card-img-top" src={Image2} alt="Card image cap" />
                        <p className="card-text">John</p>
                    </div>
                    <div className="card">
                        <img className="card-img-top" src={Image3} alt="Card image cap" />
                        <p className="card-text">Pablo</p>
                    </div>
                    <div className="card">
                        <img className="card-img-top" src={Image4} alt="Card image cap" />
                        <p className="card-text">Aarif</p>
                    </div>
                    <div className="left-arrow-box">
                        <img src={rightArrow} className="Icon arrowIcon" alt="arrow" />
                    </div>
                </div>
                <div className="form">
                    <div className="form-field">
                        <label className="input-label">From Account</label>
                        <input type="text" className="img-position arrow" placeholder="3762 2342 0349 0372" value={name} onChange={(e) => setName(e.target.value)} />
                        <label className="input-label">To</label>
                        <input type="text" className="img-position searchIcon"  placeholder="Search Biller code or Nickname" value={name} onChange={(e) => setName(e.target.value)} />
                        <label className="input-label">Account</label>
                        <input type="text" className="img-position" placeholder="USD Enter Amount" value={name} onChange={(e) => setName(e.target.value)} />
                        <label className="input-label">When</label>
                        <input type="text" className="img-position calendarIcon" placeholder="14 Nov 2022" value={name} onChange={(e) => setName(e.target.value)} />
                        <input className="submit"type="submit" value="Pay Now" />
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default QuickPay;