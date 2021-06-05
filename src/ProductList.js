import React, { Component } from "react";

export default class ProductList extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.info.title}</h1>
        <h5>{this.props.currentCategory}</h5>
      </div>
    );
  }
}
