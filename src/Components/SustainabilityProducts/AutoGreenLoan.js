import React from 'react'
import car from '../../Images/car.png';
import leaf from "../../Images/leaf.jpg";
import './AutoGreenLoan.css';

const AutoGreenLoan = () => {
  return (
    <div className='basic'>
      <a style={{ width: "100%" }} href={"./Auto_Loan"}><img style={{ width: "100%" }} src={car} alt="car"></img></a>
      <br />
      <br />
      <div className='basic1'>
        <h1>Caribou- Green auto loan</h1>
        <img src={leaf} alt="leaf"></img>
        <br />
        <br />
        <h4>
          APR: 5.29%
          <br />
          Term: 60 months
          <br />
          Loan amount: Up to $120,000
          <br />
          Interest rate: 2.79%
        </h4>
        <br />
        <ul className='basic2'>
          <li>Driving an electric vehicle means you would be contributing to environmental sustainability since electric vehicles release fewer harmful carbon dioxide emissions.</li>
          <br /><li>The costs of owning an EV are typically less than a gasoline-powered vehicle.</li>
          <br /> <li>Savings may include a lower cost to charge your electric vehicle (when compared fuel costs) as well as savings on maintenance costs, since EVS typically need less maintenance.</li>
        </ul>
      </div>
      <br />
      <br />
      <div style={{ alignSelf: "center", marginLeft: "-78px" }}><button className='basic3' >Apply Now </button></div>

    </div>
  )
}

export default AutoGreenLoan
