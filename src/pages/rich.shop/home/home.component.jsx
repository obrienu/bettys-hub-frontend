import React from "react";
import "./home.style.scss";
import SideAd from "../../../components/ad.section/ad.bar.component";
import ProductContainer from "../../../components/rich.product.container/rich.product.container";
import RichCarousel from "../../../components/rich.carousel/rich.carousel.component";

const RichHome = () => {
  return (
    <div className="RichHome">
      <div className="RichHomeCarousel">
        <RichCarousel />
      </div>
      <div className="RichHomeMainAside1">
        <SideAd index={1} />
      </div>
      <div className="RichHomeMainAside2">
        <SideAd index={2} />
      </div>
      <div className="RichHomeMainAside">
        <SideAd />
      </div>
      <div className="RichHomeMainContent">
        <ProductContainer limit={12} />
      </div>
    </div>
  );
};

export default RichHome;
