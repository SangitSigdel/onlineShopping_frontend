import React from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../controller/actions";

import ImageCrousal from "./imageCrousal";
import Section1 from "./section1";
import Footer from "./footer";

class Home extends React.Component {
  async componentDidMount() {
    await this.props.fetchProducts();
  }

  render() {
    return (
      <div>
        {this.props.products.length > 0 && (
          <ImageCrousal products={this.props.products} />
        )}
        <Section1 products={this.props.products} />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { products: state.products };
};

export default connect(mapStateToProps, { fetchProducts })(Home);
