import React from "react";
import "./Navbar.css";
import logo1 from "../../images/Group.svg"
import logo2 from "../../images/logo3.svg"
import Get from "../GetButton/Get";

const Navbar = () => {
  return (
    <header>
    <div className="container">
      <div className="navBar">
      <div className="logo">
        <a href="/#"><img src={logo2} alt="" /></a>
        <a href="/#"><img src={logo1} alt="" /></a>
      </div>
      <nav className="navLinks">
        <ul>
            <li><a href="/#">About</a></li>
            <li><a href="/#">Products</a></li>
            <li><a href="/#">FAQs</a></li>
        </ul>
            <div className="button">
          <Get/>
          </div>
      </nav>
      </div>
    </div>

    </header>
  );
};

export default Navbar;
