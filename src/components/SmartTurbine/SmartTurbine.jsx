import React, { useState, useEffect } from "react";
import Background from "../imges/background2.jpg";

const SmartTurbine = () => {
  const [height, setHeight] = useState("650px");

  const handleResize = () => {
    const is768Screen = window.matchMedia("(max-width: 768px)").matches;
    const newHeight = is768Screen ? "796px" : "650px";
    setHeight(newHeight);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const divStyle = {
    backgroundImage: `url(${Background})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: height,
  };

  return (
    <>
      <div className="turbine-page">
        <div className="turbine-page-logo">
          <img src="halfRound.jpg" alt="halfRound" />
        </div>

        <div className="turbine-page-inside" style={divStyle}>
          <div className="turbine-page-smart-logo">
            <img src="turbinelogo.png" alt="turbine Logo" />
            <span className="turbine-page-span">SMART TURBINE</span>
          </div>

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>

          <div className="turbine-page-description">
            <div className="turbine-page-box">
              <div className="box-inside">
                <img src="pensilepaper.jpg" alt="pensile paper logo" />
                <div className="turbine-box-inside">
                  <label>110+</label>
                  <span>Project Completed</span>
                </div>
              </div>

              <div className="box-inside">
                <img src="singleMale.jpg" alt="singleMale  logo" />
                <div className="turbine-box-inside">
                  <label>11+</label>
                  <span>Years Of Experience</span>
                </div>
              </div>
            </div>
            <img src="Fan.png" alt="fan logo" />

            <div className="turbine-page-box">
              <div className="box-inside">
                <img src="engineer.jpg" alt="engineerImage  logo" />
                <div className="turbine-box-inside">
                  <label>90+</label>
                  <span>Project Completed</span>
                </div>
              </div>

              <div className="box-inside">
                <img src="chatgroup.jpg" alt="chatgroup  logo" />
                <div className="turbine-box-inside">
                  <label>170+</label>
                  <span>Years Of Experience</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SmartTurbine;
