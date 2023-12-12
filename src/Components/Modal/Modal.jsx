import React, { useEffect, useState } from "react";
import "./Modal.css";
import lee from "../../Images/lee.jpg";
import Login from "../../Pages/Login/login";
const Modal = () => {
  const [visible, setvisible] = useState(false);
  const func = () => {
    return <Login />;
  };

  useEffect(() => {
    function handlescreenclick() {
      setvisible(!visible);
    }

    window.addEventListener("click", handlescreenclick);

    return () => {
      window.addEventListener("click", handlescreenclick);
    };
  }, [visible]);
  return (
    <>
      {visible && (
        <div className="exit-main">
          <div className="exit">
            <div className="exit-text">quote for the day...</div>
            <div className="exit-text1">
              Sustainability is not about doing less harm, it is about doing
              more good...
            </div>
            <div>
              <img className="img" src={lee}></img>
            </div>
            <div className="gr">Carbon Footprint of this session was 22gms</div>
          </div>
        </div>
      )}{" "}
    </>
  );
};

export default Modal;
