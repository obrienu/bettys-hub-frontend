import "./rich.shop.style.scss";
import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "../../components/rich.header/rich.header.component";
import HomePage from "./home/home.component";
import LongrichAbout from "../longrich.about/longrich.about.component";
import RichCompensation from "../rich.compensation/rich.compensation.component";
import RichJoin from "../rich.join/rich.join.component";

export class RichShop extends Component {
  render() {
    const { match } = this.props;
    return (
      <div className="RichShop">
        <Header />
        <Switch>
          <Route exact path={`${match.path}`} component={HomePage} />
          <Route path={`${match.path}/about`} component={LongrichAbout} />
          <Route
            path={`${match.path}/compensation`}
            component={RichCompensation}
          />
          <Route path={`${match.path}/join`} component={RichJoin} />
        </Switch>
      </div>
    );
  }
}

export default RichShop;
