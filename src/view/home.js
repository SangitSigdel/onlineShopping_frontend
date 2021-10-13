import React from "react";

import ImageCrousal from "./imageCrousal";
import Section1 from "./section1";
import Footer from "./footer";

class Home extends React.Component {
  render() {
    return (
      <div>
        <ImageCrousal />
        <Section1 fn_cartCount={this.props.fn_cartCount} />
        <Footer />
      </div>
    );
  }
}

export default Home;
