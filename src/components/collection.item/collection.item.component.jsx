import React from "react";
import "./collection.item.style.scss";
import { withRouter } from "react-router-dom";
import { addCartItem } from "../../redux/cart/cart.actions";
import { connect } from "react-redux";
import placeholder from "../../assets/img/placeholder.jpg";

const CollectionItem = ({ item, shop, history, addCartItem }) => {
  const { price, name, imageUrl, _id } = item;

  const addToCart = () => {
    addCartItem(item);
  };

  const handleClick = () => {
    history.push(`/show/${shop}/${_id}`);
  };

  return (
    <div className="CollectionItem">
      <span className="CollectionItemFooterSale">Sale</span>

      <img
        onClick={handleClick}
        className="CollectionItemImage"
        src={imageUrl[0] || placeholder}
        alt={name}
      />

      <div className="CollectionItemName">{name}</div>
      <div className="CollectionItemFooter">
        <span className="CollectionItemFooterPrice"> # {price}</span>
        <span
          title="Add to cart"
          onClick={addToCart}
          className="CollectionItemFooterFavourite"
        >
          {" "}
          <i className="fas fa-cart-plus"></i>
        </span>
      </div>
    </div>
  );
};

const mapDispatchToState = dispatch => ({
  addCartItem: item => dispatch(addCartItem(item))
});

export default withRouter(connect(null, mapDispatchToState)(CollectionItem));
