import React from "react";
import "./cart.icon.style.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/img/shopping-bag.svg";
import { connect } from "react-redux";
import { selectCartItemsCount } from "../../redux/cart/cart.selection";
import { toggleCart } from "../../redux/cart/cart.actions";

const CartIcon = ({ itemCount, toggleCart }) => {
  const handleClick = () => {
    toggleCart();
  };

  return (
    <div onClick={handleClick} className="CartIcon">
      <ShoppingIcon className="ShoppingIcon" />
      <span className="ItemCount">{itemCount}</span>
    </div>
  );
};

const mapStateToProps = state => ({
  itemCount: selectCartItemsCount(state)
});

const mapDispatchToProps = dispatch => ({
  toggleCart: () => dispatch(toggleCart())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
