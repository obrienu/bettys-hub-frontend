import React from "react";
import "./cart.dropdown.style.scss";
import CustomButton from "../button/button.component";
import CartItem from "../cart.item/cart.item.component";
import { connect } from "react-redux";
import { cartItemsSelector } from "../../redux/cart/cart.selection";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";
import { toggleCart } from "../../redux/cart/cart.actions";

const CartDropdown = ({ cartItems, history, match, toggleCart }) => {
  const handleClick = () => {
    history.push(`${match.url}checkout`);
    toggleCart();
  };

  return (
    <div className="CartDropdown">
      <div className="CartItems">
        {cartItems.length ? (
          cartItems.map(cartItem => (
            <CartItem key={cartItem._id} item={cartItem} />
          ))
        ) : (
          <span className="EmptyMessage"> Your cart is empty</span>
        )}
      </div>
      <CustomButton onClick={handleClick}>CHECKOUT</CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: cartItemsSelector
});

const mapDispatchtoState = dispatch => ({
  toggleCart: () => dispatch(toggleCart())
});
export default withRouter(
  connect(mapStateToProps, mapDispatchtoState)(CartDropdown)
);
