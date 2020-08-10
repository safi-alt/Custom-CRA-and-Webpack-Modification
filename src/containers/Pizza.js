import React, { Component } from "react";
import PizzaImage from "../components/PizzaImage/PizzaImage";

class Pizza extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>The Pizza</h1>
        <PizzaImage />
      </div>
    );
  }
}

export default Pizza;
