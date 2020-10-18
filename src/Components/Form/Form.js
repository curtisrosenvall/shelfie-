import React, { Component } from "react";
import "./Form.css";
import axios from "axios";

class Form extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      price: 0,
      image: "",
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submit = () => {
    axios
      .post("/api/inventory", this.state)
      .then((response) => {
        console.log(response);
        axios.get("/api/inventory").then((inventoryResponse) => {
          this.props.updateInventory(inventoryResponse.data);
          this.setState({ name: "", price: 0, image: "" });
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className='form-container'>
        <div className="form">
          <img id="image" />
          {this.state.image}
          <p>Image Url:</p>
          <input onChange={this.handleChange} name="image"></input>
          <p>Product Name:</p>
          <input
            name="name"
            onChange={(e) => this.setState({ name: e.target.value })}
          ></input>
          <p>Price:</p>
          <input
            name="price"
            onChange={(e) => this.setState({ price: e.target.value })}
          ></input>
          <button id="button1">CANCEL</button>
          <button id="button2" onClick={this.submit}>
            ADD TO INVENTORY
          </button>
        </div>
      </div>
    );
  }
}

export default Form;
