import React from "react";
import "./App.scss";
import Header from "./components/header/header.component";
import { Route, Switch } from "react-router-dom";
import Homepage from "./pages/homepage/homepage.page";
import Footer from "./components/footer/footer.component";
import AdminPage from "./pages/admin/admin.component";
import Fabric from "./pages/fabric/fabric.component";
import Accessories from "./pages/accessories/accessories.component";
import ShowPage from "./pages/shop.show.page/show.page.component";
import ContactUs from "./pages/contact/contact";
import CartDropdown from "./components/cart.dropdown/cart.dropdown.component";
import Checkout from "./pages/checkout/checkout.component";
import RichShop from "./pages/rich.shop/rich.shop.component";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { cartMenuSelector } from "./redux/cart/cart.selection";

function App(props) {
  const { cartMenu } = props;
  return (
    <div>
      <Header />
      {cartMenu ? <CartDropdown /> : null}
      <div className="Main">
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/bettyhubs/admin" component={AdminPage} />
          <Route path="/fabric" component={Fabric} />
          <Route path="/accessories" component={Accessories} />
          <Route path="/show/:shop/:commId" component={ShowPage} />
          <Route path="/contact" component={ContactUs} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/rich" component={RichShop} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  cartMenu: cartMenuSelector
});

export default connect(mapStateToProps)(App);
