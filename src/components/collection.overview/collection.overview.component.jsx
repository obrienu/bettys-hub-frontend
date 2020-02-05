import React, { Component } from "react";
import "./collection.overview.style.scss";
import CollectionItem from "../collection.item/collection.item.component";
import { withRouter } from "react-router-dom";
import {} from "../../redux/shop/shop.actions";
import Loader from "../loader/loader.component";
import PaginateContainer from "../paginate.container/paginate.container.component";

class CollectionOverview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: [],
      activePage: 1,
      pages: 0
    };
    this.paginate = this.paginate.bind(this);
  }

  componentDidMount() {
    const { items } = this.props;
    if (items) {
      let pages = Math.trunc(items.totalItems / 15) + 1;
      let filteredItems = items.data.filter((item, index) => index < 15);
      this.setState({
        ...this.state,
        items: [...filteredItems],
        pages
      });
    }
  }

  componentDidUpdate(prevProps) {
    const { match, items } = this.props;
    if (match.params.category !== prevProps.match.params.category && items) {
      let filteredItems = items.data.filter((item, index) => index < 15);
      let pages = Math.trunc(filteredItems.length / 15) + 1;
      this.setState({
        ...this.state,
        items: [...filteredItems],
        pages
      });
    }
  }

  paginate(page) {
    const {
      items: { data }
    } = this.props;
    const start = (page - 1) * 15;
    const finish = start + 15;
    const newItems = data.slice(start, finish);
    this.setState({
      ...this.state,
      items: newItems,
      activePage: page
    });
  }

  render() {
    const { shop } = this.props;
    const { items, pages, activePage } = this.state;
    const header = shop.substring(0, 1).toUpperCase() + shop.substring(1);
    return items ? (
      <section className="CollectionOverview">
        <h1 className="CollectionOverviewHeader">{header}</h1>
        <div className="CollectionOverviewTop">
          {items.map(item => (
            <CollectionItem key={item._id} shop={shop} item={item} />
          ))}
        </div>
        <div className="CollectionOverviewBottom">
          <PaginateContainer
            onClick={this.paginate}
            active={activePage}
            pages={pages}
          />
        </div>
      </section>
    ) : (
      <Loader />
    );
  }
}

export default withRouter(CollectionOverview);
