import "./richcollection.item.style.scss";
import React from "react";
import { Link } from "react-router-dom";

const RichItem = props => {
  const { imageUrl, name, price } = props;
  return (
    <div className="RichItem">
      <Link>
        <img className="RichItemImage" src={imageUrl} alt={name} />
        <div className="RichItemName">{name}</div>
        <div className="RichItemPrice"># {price}</div>
        <div className="RichItemPriceTag">{price}</div>
      </Link>
    </div>
  );
};

export default RichItem;
