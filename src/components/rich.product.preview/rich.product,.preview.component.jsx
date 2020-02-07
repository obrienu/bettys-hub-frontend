import React, { Component } from "react";
import "./rich.product,.preview.style.scss";
import Loader from "../loader/loader.component";
import RichProductItem from "../rich.product.item/rich.product.item.component";
import { getPreview } from "../../redux/rich/rich.action";
import {
  richLoaderSelector,
  richPreviewSelector
} from "../../redux/rich/rich.selection";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

class RichProductPreview extends Component {
  componentDidMount() {
    const { getPreview } = this.props;
    getPreview();
  }

  render() {
    const { isLoading, preview } = this.props;
    return (
      <section className="RichProductPreview">
        <h1 className="RichProductPreviewHeader">Bettys Rich</h1>
        {isLoading ? (
          <Loader />
        ) : (
          <div className="ProductPreview">
            {preview
              .filter((rich, index) => index < 3)
              .map((rich, index) => (
                <RichProductItem
                  key={index}
                  {...rich}
                  isReversed={(index + 1) % 2 === 0}
                />
              ))}
          </div>
        )}
      </section>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isLoading: richLoaderSelector,
  preview: richPreviewSelector
});

const mapDispatchToProps = dispatch => ({
  getPreview: () => dispatch(getPreview())
});

export default connect(mapStateToProps, mapDispatchToProps)(RichProductPreview);
