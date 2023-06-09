import React from "react";
import Background from "../imges/background.jpg";

const App = () => {
  const divStyle = {
    backgroundImage: `url(${Background})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "847px", 
  };

  return (
    <div className="main-banner" style={divStyle}>
      <div className="main-banner-inside">
        <span>
          Best Wind Energy Companies In <b>Tamilnadu India.</b>
        </span>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard.
        </p>
        <button><label> Read More </label></button>
      </div>
    </div>
  );
};

export default App;
