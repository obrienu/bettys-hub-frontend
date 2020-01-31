import React from "react";
import "./checkout.item.style.scss";
import { deleteItem } from "../../redux/cart/cart.actions";
import { connect } from "react-redux";

const CheckoutItem = ({ cartItem, deleteItem }) => {
  const { name, imageUrl, price } = cartItem;

  const handleDelete = () => deleteItem(cartItem);

  return (
    <div className="checkout-item ">
      <div className="image-container">
        <img src={imageUrl[0]} alt="item" />
      </div>
      <span className="name">{name}</span>

      <span className="price">{price}</span>
      <div onClick={handleDelete} className="remove-button">
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  deleteItem: cartItem => dispatch(deleteItem(cartItem))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
