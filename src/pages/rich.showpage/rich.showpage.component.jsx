import "./rich.showpage.style.scss";
import React, { Component } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { getSingleProduct } from "../../redux/rich/rich.action";
import { addCartItem } from "../../redux/cart/cart.actions";
import { richItemSelector } from "../../redux/rich/rich.selection";
import Loader from "../../components/loader/loader.component";

export class RichShowPage extends Component {
  constructor(props) {
    super(props);

    this.addToCart = this.addToCart.bind(this);
  }
  componentDidMount() {
    const { match, getItem } = this.props;
    getItem(match.params.id);
  }

  addToCart() {
    const { item, addCartItem } = this.props;
    let newItem = { ...item };
    newItem.imageUrl = [item.imageUrl];
    addCartItem(newItem);
  }

  render() {
    const { item } = this.props;
    return item ? (
      <div className="RichShowPage" style={{ padding: "1rem" }}>
        <h2 className="RichShowPageHeader">{item.name}</h2>
        <div className="RichShowPageImage">
          <img src={item.imageUrl} alt={item.name} />
        </div>
        <div>{item.text}</div>

        <hr />
        <div
          style={{
            display: "flex",
            flexFlow: "row",
            justifyContent: "space-between"
          }}
        >
          <span
            title="Add to cart"
            onClick={this.addToCart}
            className="CollectionItemFooterFavourite"
          >
            {" "}
            <i className="fas fa-cart-plus"></i>
          </span>
          <span style={{ fontWeight: 600 }}>#{item.price}</span>
        </div>
      </div>
    ) : (
      <Loader />
    );
  }
}
const mapStateToProps = createStructuredSelector({
  item: richItemSelector
});

const mapDispatchToProps = dispatch => ({
  getItem: id => dispatch(getSingleProduct(id)),
  addCartItem: item => dispatch(addCartItem(item))
});
export default connect(mapStateToProps, mapDispatchToProps)(RichShowPage);
