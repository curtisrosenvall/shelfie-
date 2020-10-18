import React, { Component } from "react";
import Product from "./Product/Product";
import "./Dashboard.css";

export default class Dashboard extends Component {
  componentDidMount() {
    console.log(this.props.inventory)
  }
  render() {
    let mappedProducts = this.props.inventory.map(item => {
      return <Product updateInventory={this.props.updateInventory} item={item}/>
    })
    return (
      <div className="dashboard">
        <div className="mapped-products">
        {mappedProducts}
        </div>
      </div>
    );
  }
}
