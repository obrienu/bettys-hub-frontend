import React, { Component } from "react";
import "./checkout.style.scss";
import CheckoutItem from "../../components/checkout.item/checkout.item.componentt";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { cartItemsSelector } from "../../redux/cart/cart.selection";
import Button from "../../components/button/button.component";
import Input from "../../components/CustomInput/custom.input.component";
import Dropdown from "../../components/html.select/select.component";
import axios from "axios";

class CheckoutPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      contact: "",
      contact_details: "",
      enquiry_status: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { name, contact_details, contact } = this.state;
    const { cartItems } = this.props;
    const body = { name, contact_details, contact, cartItems };
    axios
      .post("api/checkout", body)
      .then(res =>
        this.setState({
          name: "",
          contact: "",
          contact_details: "",
          enquiry_status: res.data
        })
      )
      .catch(err =>
        this.setState({
          enquiry_status: err
        })
      );
  }

  render() {
    const { cartItems } = this.props;
    return (
      <div>
        {this.state.enquiry_status ? (
          <div className="CheckoutAlert">
            {this.state.enquiry_status.toUpperCase()}
          </div>
        ) : null}

        <div className="checkout-page">
          <div className="checkout-header">
            <div className="header-block">
              <span>Product</span>
            </div>
            <div className="header-block">
              <span>Description</span>
            </div>
            <div className="header-block">
              <span>Price</span>
            </div>
            <div className="header-block">
              <span>Remove</span>
            </div>
          </div>
          {cartItems.map(cartItem => (
            <CheckoutItem cartItem={cartItem} key={cartItem._id} />
          ))}
        </div>
        <form onSubmit={this.handleSubmit} className="CheckoutForm">
          <Input
            isRequired={true}
            name="name"
            onChange={event => this.handleChange(event)}
            value={this.state.name}
            type="text"
          />
          <div className="CheckoutFormContact">
            <Dropdown
              isRequired={true}
              label="Contact type"
              options={["", "WhatsApp", "Call", "Messenger", "Email"]}
              onChange={event => this.handleChange(event)}
              value={this.state.contact}
              name="contact"
            />
            <Input
              isRequired={true}
              name="contact_details"
              onChange={event => this.handleChange(event)}
              value={this.state.contact_details}
              type="text"
            />
          </div>

          <div>
            <Button type="" style={{ width: "4rem", marginLeft: "1rem" }}>
              Enquire
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  cartItems: cartItemsSelector
});

export default connect(mapStateToProps)(CheckoutPage);
