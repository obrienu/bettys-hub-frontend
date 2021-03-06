import React, { Component } from "react";
import "./show.page.style.scss";
import { connect } from "react-redux";
import ShowThumbnail from "../../components/show.thumbnail/show.thumbnail.component";
import { selectShowpage } from "../../redux/shop/shop.selection";
import { getShowpage } from "../../redux/shop/shop.actions";
import { createStructuredSelector } from "reselect";
import Loader from "../../components/loader/loader.component";
import { addCartItem } from "../../redux/cart/cart.actions";
import placeholder from "../../assets/img/placeholder.jpg";
import Editor from "../../components/texteditor/editor.component";

class ShowPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSelected: ""
    };
    this.selectThumbnail = this.selectThumbnail.bind(this);
  }

  componentDidMount() {
    const { match, getShowpage } = this.props;
    getShowpage(match.params.shop, match.params.commId);
  }

  componentDidUpdate(prevProps) {
    const { item } = this.props;
    if (prevProps.item.name !== item.name) {
      this.setState({
        ...this.state,
        isSelected: item.imageUrl[0]
      });
    }
  }

  selectThumbnail(imageUrl) {
    this.setState({
      ...this.state,
      isSelected: imageUrl
    });
  }

  render() {
    const { name, price, description, imageUrl } = this.props.item;
    const { addCartItem } = this.props;
    return this.props.item.name ? (
      <div className="ShowPage">
        <div className="ShowPageContainer">
          <div className="ShowPageImageContainer">
            <div className="ShowPageThumbnails">
              {imageUrl.map((image, index) => (
                <ShowThumbnail
                  key={index}
                  onClick={() => {
                    this.selectThumbnail(image);
                  }}
                  background={image || placeholder}
                />
              ))}
            </div>
            <img
              className="ShowPageImage"
              src={this.state.isSelected || placeholder}
              alt="ThumbnailImage"
            />
          </div>
          <div className="ShowPageNameHeader">
            <h3>{name.toUpperCase()}</h3>
            <h3>#{price}</h3>
            <div
              title="Add to cart"
              onClick={() => addCartItem(this.props.item)}
              className="ShowPageAddToCart"
            >
              Add to Cart{" "}
              <span>
                <i className="fas fa-cart-plus"></i>
              </span>
            </div>
          </div>
          <div className="ShowPageText">
            <div className="ShowPageDescription">
              <Editor editorValue={description} />
            </div>
          </div>
        </div>
      </div>
    ) : (
      <Loader />
    );
  }
}

const mapStateToProps = createStructuredSelector({
  item: selectShowpage
});

const mapDispatchToProps = dispatch => ({
  getShowpage: (shop, id) => dispatch(getShowpage(shop, id)),
  addCartItem: item => dispatch(addCartItem(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(ShowPage);
