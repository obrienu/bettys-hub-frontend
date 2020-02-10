import React, { Component } from "react";
import "./homepage.style.scss";
import Carousel from "../../components/carousel/carousel.component";
import CollectionPreview from "../../components/collection.preview/collection.preview.component";
import CollectionItem from "../../components/collection.item/collection.item.component";
import RichProductPreview from "../../components/rich.product.preview/rich.product,.preview.component";
import { connect } from "react-redux";
import { compose } from "redux";
import { getItems } from "../../redux/shop/shop.actions";
import {
  accessoriesSelection,
  fabricSelection
} from "../../redux/shop/shop.selection";
import { createStructuredSelector } from "reselect";

const PreviewWrapper = CollectionPreview(CollectionItem);
class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = { width: 0 };

    this.updateDimensions = this.updateDimensions.bind(this);
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
    const { accessories, fabric } = this.props;
    if (!accessories && !fabric) {
      compose(
        this.props.getItems("fabric"),
        this.props.getItems("accessories")
      );
    }
  }

  updateDimensions() {
    this.setState({ width: window.innerWidth });
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  render() {
    let index;
    index = this.state.width <= 775 ? 8 : 5;
    return (
      <main className="Homepage">
        <Carousel />
        <PreviewWrapper
          name="Fabric"
          data={this.props.fabric}
          itemNumber={index}
        />
        <PreviewWrapper
          name="Accessories"
          data={this.props.accessories}
          itemNumber={index}
        />
        <RichProductPreview />
      </main>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  accessories: accessoriesSelection,
  fabric: fabricSelection
});

const mapDispatchToProps = dispatch => ({
  getItems: shop => dispatch(getItems(shop))
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
