import React from 'react'
import car from "../../Images/car.png";
import leaf from "../../Images/leaf.jpg";
const Auto_Loan = () => {
        return (
                <div className='basic' style={{ paddingLeft: '5%' }}>
                        <h1>Auto Loans</h1>
                        <br />
                        <p className='basic2' style={{ width: " 70%" }}>A green car loan can be used to purchase eco-friendly cars or cars with lower average emissions. These fuel-efficient cars typically fall under the category of hybrid or electric and are available from many manufacturers, from Ford to Nissan to Tesla.</p>
                        <br />
                        <br />
                        <div className='allbox'>
                                <div className='box1'>
                                        <img alt="" style={{ width: '100%', height: "50%", borderRadius: "16px" }} src={car}></img>
                                        <br />
                                        <br />
                                        <div style={{ paddingLeft: "5%" }}>
                                                <div>Caribou- Green auto loan     <span style={{ color: "#88C53C" }}>2.79%</span></div>
                                                <br />
                                                <br />
                                                <img alt="" src={leaf}></img>
                                        </div>
                                </div>
                                <div className='box1'>
                                        <img alt="" style={{ width: '100%', height: "50%", borderRadius: "16px" }} src={car}></img>
                                        <br />
                                        <br />
                                        <div style={{ paddingLeft: "5%" }}>
                                                <div>Caribou- Green auto loan     <span style={{ color: "#88C53C" }}>2.79%</span></div>
                                                <br />
                                                <br />
                                                <img alt="" src={leaf}></img>
                                        </div>
                                </div>
                                <div className='box1'>
                                        <img alt="" style={{ width: '100%', height: "50%", borderRadius: "16px" }} src={car}></img>
                                        <br />
                                        <br />
                                        <div style={{ paddingLeft: "5%" }}>
                                                <div>Caribou- Green auto loan     <span style={{ color: "#88C53C" }}>2.79%</span></div>
                                                <br />
                                                <br />
                                                <img alt="" src={leaf}></img>
                                        </div>
                                </div>
                                <div className='box1'>
                                        <img alt="" style={{ width: '100%', height: "50%", borderRadius: "16px" }} src={car}></img>
                                        <br />
                                        <br />
                                        <div style={{ paddingLeft: "5%" }}>
                                                <div>Caribou- Green auto loan     <span style={{ color: "#88C53C" }}>2.79%</span></div>
                                                <br />
                                                <br />
                                                <img alt="" src={leaf}></img>
                                        </div>
                                </div>

                        </div>
                </div>
        )
}

export default Auto_Loan
