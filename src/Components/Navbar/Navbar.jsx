import React, { useRef } from "react";
import "./Navbar.css";
import logo1 from "../../images/logo1.svg"
import logo2 from "../../images/logo2.svg"
import Get from "../GetButton/Get";
import { Link } from "react-scroll";

const Navbar = () => {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  
  return (
    <header>
    <div className="container">
      <div className="navBar">
      <div className="logo">
        <a href="/#"><img src={logo1} alt="" /></a>
        <a href="/#"><img src={logo2} alt="" /></a>
      </div>
      <nav className="navLinks">
        <ul ref={navRef}>
            <li><Link activeClass="active" to="about" spy={true} smooth={true}>About</Link></li>
            <li><Link activeClass="active" to="product" spy={true} smooth={true}>Products</Link></li>
            <li><Link activeClass="active" to="faq" spy={true} smooth={true}>FAQ's</Link></li>
        </ul>
            <div className="button">
          <Get/>
          </div>
          <div className="navIcon" onClick={showNavbar}>
         <span className="first-line"></span>
         <span className="second-line"></span>
         </div>
      </nav>
      </div>
    </div>

    </header>
  );
};

export default Navbar;
