import React from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

import "./css/crousal.css";

class ImageCrousal extends React.Component {
  state = {
    images: [],
    slider_counter: 0,
  };

  async componentDidMount() {
    const listImages = [];
    if (this.props.products.length > 0) {
      this.props.products.map((data) => {
        listImages.push(data.images[0]);
        return null;
      });

      this.setState({ images: listImages });
    }

    setInterval(() => {
      if (this.state.slider_counter < this.state.images.length - 1) {
        this.setState({ slider_counter: this.state.slider_counter + 1 });
      } else {
        this.setState({ slider_counter: 0 });
      }
    }, 2500);
  }

  nextSlide = () => {
    if (this.state.slider_counter < this.state.images.length) {
      this.setState({ slider_counter: this.state.slider_counter + 1 });
    } else {
      this.setState({ slider_counter: 0 });
    }
  };

  previousSlide = () => {
    if (this.state.slider_counter >= 0) {
      this.setState({ slider_counter: this.state.slider_counter - 1 });
    } else {
      this.setState({ slider_counter: this.state.images.length });
    }
  };

  render() {
    return (
      <div className="crousal__container">
        <img
          src={this.state.images[this.state.slider_counter]}
          alt={this.state.images[this.state.slider_counter]}
        />

        <GrFormPrevious
          className="icon__crousal icon__previous"
          onClick={() => this.previousSlide()}
        />
        <GrFormNext
          className="icon__crousal icon__next"
          onClick={() => this.nextSlide()}
        />
      </div>
    );
  }
}

export default ImageCrousal;
