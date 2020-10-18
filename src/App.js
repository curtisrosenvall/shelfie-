import React, { Component } from "react";
import "./App.css";
import Dashboard from "./Components/Dashboard/Dashboard";
import Form from "./Components/Form/Form";
import Header from "./Components/Header/Header";
import axios from "axios";
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();

    this.state = {
      inventory: [],
    };
  }
  componentDidMount() {
    axios.get("/api/inventory").then((inventoryResponse) => {
      this.updateInventory(inventoryResponse.data);
      this.setState({ name: "", price: 0, image: "" });
    });
  }
  updateInventory = (data) => {
    console.log("update", this.state.inventory);

    this.setState({ inventory: data });
    console.log("update", this.state.inventory);
  };
  render() {
    return (
      <div>
        <Header />
        <div className="dashboard-container">
          <Dashboard
            inventory={this.state.inventory}
            updateInventory={this.updateInventory}
          />

          <Form updateInventory={this.updateInventory} />
        </div>
      </div>
    );
  }
}

export default App;
