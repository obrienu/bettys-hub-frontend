import "./rich.shop.style.scss";
import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "../../components/rich.header/rich.header.component";

export class RichShop extends Component {
  render() {
    const { match } = this.props;
    return (
      <div className="">
        <Header />
        <Switch>
          <Route exact path={`${match.path}`} />
        </Switch>
      </div>
    );
  }
}

export default RichShop;
