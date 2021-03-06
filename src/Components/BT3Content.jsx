import React, { Component } from "react";
import BT3Carousel from "./BT3Carousel";
import BT3ProductList from "./BT3ProductList";

export default class BT3Content extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <BT3Carousel></BT3Carousel>
          <BT3ProductList></BT3ProductList>
        </div>
      </React.Fragment>
    );
  }
}
