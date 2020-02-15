import React from "react";
import "./ad.item.style.scss";
import { Link } from "react-router-dom";

const AdItem = props => {
  return (
    <div className="AdItem">
      <Link to="/rich/compensation">
        <img src={props.image} alt="ad" className="AdImage" />
      </Link>
    </div>
  );
};

export default AdItem;
