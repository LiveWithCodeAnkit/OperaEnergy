import React,{useState} from "react";
import { IoIosArrowDown } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = () => {
  const [showMediaIcon, setShowMediaIcon] = useState(false);
  return (
    <>
      <div className="main-navbar">
        <img src="brandName.jpg" />
        <nav  className={  showMediaIcon ? "mobile-menu-link" : "nav-menu"}>
          <a href="#">Home</a> <span>|</span>
          <div className="nav-inside-menu">
            <a href="#">About Us</a>
            <IoIosArrowDown />
          </div>
          <span>|</span>
          <div className="nav-inside-menu">
            <a href="#">Businesses</a>
            <IoIosArrowDown />
          </div>
          <span>|</span>
          <div className="nav-inside-menu">
            <a href="#">Projects</a>
            <IoIosArrowDown />
          </div>
          <span>|</span>
          <a href="#">Career</a> <span>|</span>
          <a href="#">Contact</a> <span>|</span>
          <a href="#">Blog</a>
        </nav>

        <div className="nav-flg">
          <div className="flg-inside">
            <img src="flag.jpg" alt="flag img" className="nav-img-flg"/>
            <span>ENG</span>
            <IoIosArrowDown />
            <button>
              <label>Book Now</label>
            </button>
          </div>        
        </div>
        <div className="humburger-nav">
        <a
            href="#"
            onClick={() => {
              setShowMediaIcon(!showMediaIcon);
              console.log(showMediaIcon);
            }}
          >
            <GiHamburgerMenu className="icon-humburger"/>
            </a>
          </div>
      </div>
    </>
  );
};

export default Navbar;
