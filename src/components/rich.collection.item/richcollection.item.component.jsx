import "./richcollection.item.style.scss";
import React from "react";
import { Link } from "react-router-dom";
import { addCartItem } from "../../redux/cart/cart.actions";
import { connect } from "react-redux";

const RichItem = props => {
  const { imageUrl, name, price, _id, pv } = props;
  let item = { imageUrl: [imageUrl], name, price, _id };
  const addToCart = () => {
    const { addCartItem } = props;
    addCartItem(item);
  };

  return (
    <div className="RichItem">
      <Link to={`/rich/products/${_id}`}>
        <img className="RichItemImage" src={imageUrl} alt={name} />
      </Link>
      <div className="RichItemName">{name}</div>
      <div className="RichItemPrice">
        <span className="RichItemFooterPrice"> # {price}</span>
        <span
          title="Add to cart"
          onClick={addToCart}
          className="RichItemFavourite"
        >
          {" "}
          <i className="fas fa-cart-plus"></i>
        </span>
      </div>
      {pv ? <div className="RichItemPriceTag">{pv} pv</div> : null}
    </div>
  );
};

const mapDispatchToState = dispatch => ({
  addCartItem: item => dispatch(addCartItem(item))
});

export default connect(null, mapDispatchToState)(RichItem);
