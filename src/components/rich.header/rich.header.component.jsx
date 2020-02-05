import "./rich.header.style.scss";
import React from "react";
import { NavLink } from "react-router-dom";

const RichHeader = () => {
  return (
    <div className="RichHeaderNav">
      <li className="RichLinks">
        <NavLink activeClassName="ActiveLink" className="Link" to="/rich" exact>
          Rich
        </NavLink>
      </li>
      <li className="RichLinks">
        <NavLink
          activeClassName="ActiveLink"
          className="Link"
          to="/rich/join"
          exact
        >
          Join Longrich
        </NavLink>
      </li>
      <li className="RichLinks">
        <NavLink
          activeClassName="ActiveLink"
          className="Link"
          to="/rich/compensation"
          exact
        >
          Compensation Plan
        </NavLink>
      </li>
      <li className="RichLinks">
        <NavLink
          activeClassName="ActiveLink"
          className="Link"
          exact
          to="/rich/about"
        >
          About Rich
        </NavLink>
      </li>
    </div>
  );
};

export default RichHeader;
