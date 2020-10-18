import React, { Component } from "react";
import './Product.css'

export default class Product extends Component {
  render() {
    return (
      <div className="product-container">
        {this.props.item.name}

        {this.props.item.price}
        
        {this.props.item.image}

      </div>
    );
  }
}
