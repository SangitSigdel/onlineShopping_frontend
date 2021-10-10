import React from "react";
import { connect } from "react-redux";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

import "./css/crousal.css";
import { sliderAction } from "../controller/actions";

class ImageCrousal extends React.Component {
  state = {
    images: [],
    slider_counter: 0,
  };

  async componentDidMount() {
    await this.props.sliderAction();
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
    if (this.state.slider_counter < this.state.images.length - 1) {
      this.setState({ slider_counter: this.state.slider_counter + 1 });
    } else {
      this.setState({ slider_counter: 0 });
    }
  };

  previousSlide = () => {
    if (this.state.slider_counter > 0) {
      this.setState({ slider_counter: this.state.slider_counter - 1 });
      console.log(this.state.slider_counter);
    } else {
      this.setState({ slider_counter: this.state.images.length - 1 });
    }
  };

  render() {
    return (
      <div className="crousal__container">
        <img
          src={this.state.images[this.state.slider_counter]}
          alt={this.props.products.name}
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

const mapStateToProps = (state) => {
  return { products: state.products };
};

export default connect(mapStateToProps, { sliderAction })(ImageCrousal);
