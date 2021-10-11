import React from "react";

import "./css/cutomButton.css";

class CustomButton extends React.Component {
  render() {
    return <button className="custom__button">{this.props.button_text}</button>;
  }
}

export default CustomButton;
