import React from "react";
import "./collection.item.style.scss";
import { withRouter } from "react-router-dom";
import { addCartItem } from "../../redux/cart/cart.actions";
import { connect } from "react-redux";

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
      <div
        onClick={handleClick}
        style={{ backgroundImage: `url(${imageUrl[0]})` }}
        className="CollectionItemImage"
      ></div>
      <div className="CollectionItemBody">
        <div className="CollectionItemName">{name}</div>
        <div className="CollectionItemFooter">
          <span className="CollectionItemFooterPrice"> # {price}</span>
          <span
            title="Add to cart"
            onClick={addToCart}
            className="CollectionItemFooterFavourite"
          >
            {" "}
            <i className="fas fa-cart-plus">XX</i>
          </span>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToState = dispatch => ({
  addCartItem: item => dispatch(addCartItem(item))
});

export default withRouter(connect(null, mapDispatchToState)(CollectionItem));
