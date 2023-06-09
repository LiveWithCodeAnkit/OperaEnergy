import React from "react";

const IntroPage = () => {
  return (
    <>
      <div className="intro-page">
        <div className="intro-page-logo">
          <img src="whoIamlogo.jpg" alt="logoOfIntroPage" />
        </div>
        <div className="intro-page-anologo">
          <img src="logo2.jpg" alt="logo" />
        </div>

        <div className="into-page-about">
          <div className="about-engineerImage">
            <img src="engineerImage.jpg" alt="engineerImage" />
            {/* <img src="SolarImg.jpg" alt="solarImage"/> */}
          </div>
          <div className="about-engineerImage2">
            <img src="SolarImg.jpg" alt="solarImage" />
          </div>

          <div className="intro-page-description">
            <div className="intro-page-who-logo">
              <img src="whoWeAre.jpg" alt="whoWeAre Logo" />
              <span>WHO WE ARE</span>
            </div>
            <span className="intro-page-description-span">
              The Best Solution Provider For <b>Green Energy.</b>
            </span>

            <p>
              We have a team of domain experts who strive for excellence in the
              renewable energy generation sector...
            </p>

            <div className="intro-page-description-inside">

              <div className="intro-page-mini">
                <img src="roundCircle.jpg" alt="Round Logo" />
                <label>1.Our Culture</label>
                <p>
                  Our passion to work with the client satisfaction is the source
                  of our success. We 100% believe in ethics...
                </p>
              </div>

              <div className="intro-page-mini">
                <img src="solar.jpg" alt="solar Logo" />
                <label>2. Our Productivity</label>
                <p>
                  We take pride in successfully executing 1.30 GW+ and
                  pipelining renewable energy projects of capacity of 1GW in
                  next...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IntroPage;
