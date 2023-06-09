import React from "react";
import { HiLocationMarker, HiChevronDoubleRight } from "react-icons/hi";
import { IoIosCall, IoMdMail } from "react-icons/io";

import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { BsLinkedin, BsYoutube } from "react-icons/bs";

const FooterPage = () => {
  return (
    <>
      <div className="footer-page">
        <div className="footer-tittle">
          <label className="footer-page-lable">
            We Value Our <b>Customers</b>
          </label>

          <button>
            <span>Get The Quote</span>
          </button>
        </div>

        <div className="footer-description">
          <div className="desciption-one">
            <img src="brandnamel.png" />
            <div className="location-footer">
              <HiLocationMarker className="location-icon" />
              <p>
                Shreeji plaza, 201, Main Rd, Valkeshwari, <br />
                Park Colony, Jamnagar, Gujarat 361008
              </p>
            </div>
            <div className="location-footer">
              <IoIosCall className="location-icon" />
              <p>(+91) 89802 30024</p>
            </div>
            <div className="location-footer">
              <IoMdMail className="location-icon" />
              <p>info@operaenergy.in</p>
            </div>
          </div>

          <div className="quick-links">
            <label>Quick Link</label>
            <div className="location-footer">
              <HiChevronDoubleRight className="aarow-icon" />
              <p>About</p>
            </div>
            <div className="location-footer">
              <HiChevronDoubleRight className="aarow-icon" />
              <p>Turn Key EPC Services</p>
            </div>
            <div className="location-footer">
              <HiChevronDoubleRight className="aarow-icon" />
              <p>Executed Project</p>
            </div>

            <div className="location-footer">
              <HiChevronDoubleRight className="aarow-icon" />
              <p>Captive / Group Captive</p>
            </div>

            <div className="location-footer">
              <HiChevronDoubleRight className="aarow-icon" />
              <p>Career</p>
            </div>

            <div className="location-footer">
              <HiChevronDoubleRight className="aarow-icon" />
              <p>Blog</p>
            </div>
          </div>

          {/* ... */}
          <div className="quick-links2">
            <div className="location-footer">
              <HiChevronDoubleRight className="aarow-icon" />
              <p> Capex (EPC Model)</p>
            </div>
            <div className="location-footer">
              <HiChevronDoubleRight className="aarow-icon" />
              <p>Captive Project Pipeline</p>
            </div>
            <div className="location-footer">
              <HiChevronDoubleRight className="aarow-icon" />
              <p>Energy Storage</p>
            </div>

            <div className="location-footer">
              <HiChevronDoubleRight className="aarow-icon" />
              <p>Third-Party Power Sale</p>
            </div>

            <div className="location-footer">
              <HiChevronDoubleRight className="aarow-icon" />
              <p>Our Clients</p>
            </div>

            <div className="location-footer">
              <HiChevronDoubleRight className="aarow-icon" />
              <p>Privacy Policy</p>
            </div>
            <div className="location-footer">
              <HiChevronDoubleRight className="aarow-icon" />
              <p>Contact Us</p>
            </div>
          </div>


          {/* ...social media */}


          <div className="quick-links3">
            <div className="location-footer">
              <FaFacebookF className="aarow-icon" />
              <p> Facebook</p>
            </div>
            <div className="location-footer">
              <FaTwitter className="aarow-icon" />
              <p>Twitter</p>
            </div>
            <div className="location-footer">
              <BsLinkedin className="aarow-icon" />
              <p>LinkedIn</p>
            </div>

            <div className="location-footer">
              <FaInstagram className="aarow-icon" />
              <p>Instagram</p>
            </div>

            <div className="location-footer">
              <BsYoutube className="aarow-icon" />
              <p>Youtube</p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <span>
          Copyright © 2022 <u>Operaenergy</u>. All Rights Reserved.Powered by{" "}
          <u>Sauratech</u>
        </span>
      </div>
    </>
  );
};

export default FooterPage;
