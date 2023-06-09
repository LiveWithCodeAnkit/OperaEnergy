import React from "react";
import { CompanyLogo } from "../constant/CompanyLogo";


const OurClient = () => {
  return (
    <>
      <div className="ourclient-page">
        <div className="ourclient-page-title">
          <label>
            Our <b>Client</b>
          </label>
        </div>
        <div className="clint-companies-logo">
          {CompanyLogo.map((contents) => (
            <img src={contents.image} alt={contents.id} key={contents.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default OurClient;
