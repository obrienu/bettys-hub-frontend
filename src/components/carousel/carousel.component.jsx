import React from "react";
import "./carousel.style.scss";
import MenuThumbnail from "../homepage.menu.thumbnail/homepage.menu.thumbnail.component";
import DATA from "../../assets/menu.thumbnail.data";

const Carousel = () => {
  return (
    <div className="homePageCarousel">
      <div className="CarouselTop">
        <div className="CarouselTopText">
          <h1 className="CarouselHeaderText">Bettys Hub</h1>
          <h6 className="CarouselBodyText">
            Your No. 1 stop shop for quality and budget friendly fabrics and
            fashion accessories. We are commited to giving you great bargains
            and excellent service.
          </h6>
        </div>
      </div>
      <div className="HomePageCarouselThumbnails">
        {DATA.map(data => (
          <MenuThumbnail key={data.text} {...data} />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
