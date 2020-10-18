import React, { Component } from 'react';
import './App.css';

import Header from './Components/Header/Header';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
import axios from 'axios';

class App extends Component {
  constructor(){
    super()
    this.state = {
      inventory:[]
    }
    this.getProducts  = this.getProducts.bind(this)
    this.deleteProduct = this.deleteProduct.bind(this)
  }
  // Dunno why this needs to be refreshed to be presented
  // Deal with it later

  componentDidMount() {
    axios.get('/api/inventory').then( response => {
      console.log('hit api')
      this.setState({
        inventory: response.data
      })
    }).catch( err => {
      console.log('mfr',err)
    })
  }
  getProducts() {
    axios.get('/api/inventory').then( response => {
      console.log('hit api')
      this.setState({
        inventory: response.data
      })
    }).catch( err => {
      console.log('mfr',err)
    })
  }
  deleteProduct(id) {
    axios.delete(`api/inventory/${id}`).then(
      res =>{
          this.setState({
          inventory : res.data
          })
      }
  
  );
  }

  render() {
    return (
      <div>
        <Header/>
        <div className='body-container'>
          <Dashboard
          inventory={this.state.inventory}
          delete={this.deleteProduct}
          />
          <Form
          getProducts={this.getProducts}
          />
        </div>
      </div>
    );
  }
}

export default App;
