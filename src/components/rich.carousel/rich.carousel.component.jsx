import React, { Component } from "react";
import data from "../../assets/rich.carousel.data";
import RichCarouselImage from "../rich.carousel.image/rich.carousel.image.component";
import CarouselToggler from "../carousel.toggler/carousel.toggler.component";
import "./rich.carousel.style.scss";

export class RichCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageIndex: 0
    };
    this.handlePrevious = this.handlePrevious.bind(this);
    this.handleNext = this.handleNext.bind(this);
  }

  interval = null;
  componentDidMount() {
    this.interval = setInterval(() => {
      const lastImageIndex = data.length - 1;
      const currentImageIndex = this.state.imageIndex;
      const nextImageIndex =
        lastImageIndex === currentImageIndex ? 0 : currentImageIndex + 1;
      this.setState(currentState => ({
        imageIndex: nextImageIndex
      }));
    }, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  handleNext() {
    const lastImageIndex = data.length - 1;
    const currentImageIndex = this.state.imageIndex;
    const nextImageIndex =
      lastImageIndex === currentImageIndex ? 0 : currentImageIndex + 1;
    this.setState(currentState => ({
      imageIndex: nextImageIndex
    }));
  }

  handlePrevious() {
    const lastImageIndex = data.length - 1;
    const currentImageIndex = this.state.imageIndex;
    const previousImageIndex =
      0 === currentImageIndex ? lastImageIndex : currentImageIndex - 1;
    this.setState(currentState => ({
      imageIndex: previousImageIndex
    }));
  }

  render() {
    return (
      <div className="RichCarousel">
        <RichCarouselImage image={data[this.state.imageIndex]} />
        <CarouselToggler
          onClick={this.handleNext}
          direction="right"
          code="&#10095;"
        />
        <CarouselToggler
          onClick={this.handlePrevious}
          direction="left"
          code="&#10094;"
        />
      </div>
    );
  }
}

export default RichCarousel;
