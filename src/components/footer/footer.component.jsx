import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/logo1.png";
import "./footer.style.scss";

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="FooterTop">
        <div className="FooterTopSection">
          <img src={Logo} alt="logo" />
        </div>
        <div className="FooterTopSection">
          <li className="FooterLinks">
            <Link className="FooterLink" to="/">
              Home
            </Link>
          </li>
          <li className="FooterLinks">
            <Link className="FooterLink" to="/fabric">
              Fabrics
            </Link>
          </li>
          <li className="FooterLinks">
            <Link className="FooterLink" to="/accessories">
              Accessories
            </Link>
          </li>
          <li className="FooterLinks">
            <Link className="FooterLink" to="/rich">
              Rich
            </Link>
          </li>
        </div>
        <div className="FooterTopSection">
          <li className="FooterLinks">
            <Link className="FooterLink" to="/checkout">
              Checkout
            </Link>
          </li>
          <li className="FooterLinks">
            <Link className="FooterLink" to="/contact">
              Contact Us
            </Link>
          </li>
          <li className="FooterLinks">
            <Link className="FooterLink" to="/accessories">
              Blog
            </Link>
          </li>
          <li className="FooterLinks">
            <Link className="FooterLink" to="/fabric">
              Shop
            </Link>
          </li>
        </div>
        <div className="FooterTopSection">
          <li className="FooterContactInfo">Contact Info</li>
          <li className="FooterAddresses">
            <span className="FooterIcon">
              <i className="fas fa-location-arrow"></i>
            </span>
            {"  "}
            <span className="FooterAddress">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </span>
          </li>
          <li className="FooterAddresses">
            <span className="FooterIcon">
              <i className="fas fa-mobile-alt"></i>
            </span>
            {"  "}
            <span className="FooterAddress">08065288667</span>
          </li>
          <li className="FooterAddresses">
            <span className="FooterIcon">
              {" "}
              <i className="fas fa-envelope"></i>
            </span>
            {"  "}
            <span className="FooterAddress">lorem@gmail.com</span>
          </li>
        </div>
      </div>
      <div className="FooterBottom">
        Copyright &copy; 2019, Designed by Pisces 360 Net
      </div>
    </footer>
  );
};

export default Footer;
