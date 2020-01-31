import "./rich.header.style.scss";
import React from "react";
import { NavLink } from "react-router-dom";

const RichHeader = () => {
  return (
    <div className="RichHeaderNav">
      <li className="RichLinks">
        <NavLink activeClassName="ActiveLink" className="Link" to="/rich">
          Rich
        </NavLink>
      </li>
      <li className="RichLinks">
        <NavLink
          activeClassName="ActiveLink"
          className="Link"
          to="/rich/products"
        >
          Products
        </NavLink>
      </li>
      <li className="RichLinks">
        <NavLink activeClassName="ActiveLink" className="Link" to="/rich/blog">
          Blog
        </NavLink>
      </li>
      <li className="RichLinks">
        <NavLink activeClassName="ActiveLink" className="Link" to="/rich/about">
          About Rich
        </NavLink>
      </li>
    </div>
  );
};

export default RichHeader;
