import React, { Component } from "react";
import Logo from "../../assets/img/logo1.png";
import { NavLink, Link } from "react-router-dom";
import "./header.style.scss";
import MenuBar from "../toggle.menu/toggle.menu.component";
import CartIcon from "../cart.icon/cart.icon.component";

export class Header extends Component {
  state = { showMenu: false };

  toggleMenu = () => {
    this.setState({
      showMenu: !this.state.showMenu
    });
  };
  render() {
    const Menu = (
      <ul className="HeaderNavLink">
        <li className="links">
          <NavLink activeClassName="ActiveLink" className="Link" to="/" exact>
            Home
          </NavLink>
        </li>
        <li className="links">
          <NavLink activeClassName="ActiveLink" className="Link" to="/fabric">
            Fabrics
          </NavLink>
        </li>
        <li className="links">
          <NavLink
            activeClassName="ActiveLink"
            className="Link"
            to="/accessories"
          >
            Accessories
          </NavLink>
        </li>
        <li className="links">
          <NavLink activeClassName="ActiveLink" className="Link" to="/rich">
            Rich
          </NavLink>
        </li>
        <li className="links">
          <NavLink activeClassName="ActiveLink" className="Link" to="/about">
            About
          </NavLink>
        </li>

        <li className="links">
          <NavLink activeClassName="ActiveLink" className="Link" to="/checkout">
            Checkout
          </NavLink>
        </li>
        <li className="links">
          <NavLink activeClassName="ActiveLink" className="Link" to="/Contact">
            Contact Us
          </NavLink>
        </li>
      </ul>
    );

    const DropdownMenu = (
      <ul
        className={
          this.state.showMenu
            ? "HeaderNavLinkDropdown Drop"
            : "HeaderNavLinkDropdown"
        }
      >
        <li onClick={this.toggleMenu} className="links">
          <NavLink activeClassName="ActiveLink" className="Link" to="/" exact>
            Home
          </NavLink>
        </li>
        <li onClick={this.toggleMenu} className="links">
          <NavLink activeClassName="ActiveLink" className="Link" to="/fabric">
            Fabrics
          </NavLink>
        </li>
        <li onClick={this.toggleMenu} className="links">
          <NavLink
            activeClassName="ActiveLink"
            className="Link"
            to="/accessories"
          >
            Accessories
          </NavLink>
        </li>
        <li onClick={this.toggleMenu} className="links">
          <NavLink activeClassName="ActiveLink" className="Link" to="/rich">
            Rich
          </NavLink>
        </li>
        <li onClick={this.toggleMenu} className="links">
          <NavLink activeClassName="ActiveLink" className="Link" to="/about">
            About
          </NavLink>
        </li>
        <li onClick={this.toggleMenu} className="links">
          <NavLink activeClassName="ActiveLink" className="Link" to="/checkout">
            Checkout
          </NavLink>
        </li>
        <li onClick={this.toggleMenu} className="links">
          <NavLink activeClassName="ActiveLink" className="Link" to="/Contact">
            Contact Us
          </NavLink>
        </li>
      </ul>
    );

    return (
      <nav className="HeaderContainer">
        <div>
          <Link className="HeaderLogoContainer" to="/">
            <img src={Logo} alt="logo" className="HeaderLogo" />
          </Link>
        </div>
        <div className="HeaderNav">
          <MenuBar
            className="MenuBar"
            onClick={this.toggleMenu}
            showMenu={this.state.showMenu}
          />
          {this.state.showMenu ? DropdownMenu : Menu}
          <ul className="HeaderNavSocial">
            <li className="Links">
              <a className="SocialLink" href="#">
                <i className="Link fab fa-facebook-f"></i>
              </a>
            </li>
            <li className="Links">
              <a className="SocialLink" href="#">
                <i className="Link fab fa-instagram"></i>
              </a>
            </li>
            <li className="Links">
              <a className="SocialLink" href="#">
                <i className="Link fab fa-twitter"></i>
              </a>
            </li>
            <li className="Links">
              <CartIcon />
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
