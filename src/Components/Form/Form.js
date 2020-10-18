import React, {Component} from 'react';
import axios from 'axios';

export default class Form extends Component{
    constructor(){
        super()
        this.state={
            name:'',
            price:0,
            imgurl:''
        }
    }

    addProduct = () => {
        let {name, price, imgurl } = this.state
        axios.post('/api/product', {name, price, imgurl}).then(response => {
            this.setState({
                name: '',
                price: '',
                imgurl: ''
            })
            this.props.getProducts(response.data)
        })
    }

    handleChange = (val, key) => {
        let obj = {}
        obj[key] = val 
        this.setState(obj)
    }
    clearValues = () =>{
        this.setState({
            name: '',
            price: '',
            imgurl: ''
        })
    }

    render(){
        return(
            <div id="form">
                <img className='form-image' src={this.state.imgurl} />
                <div>Image URL: 
                    <input value={this.state.imgurl} onChange={(e) => this.handleChange(e.target.value, 'imgurl')}/>
                </div>
                <div>Product Name: 
                    <input value={this.state.name} onChange={(e) => this.handleChange(e.target.value, 'name')}/>
                </div>
                <div>Price: 
                    <input value={this.state.price} onChange={(e) => this.handleChange(e.target.value, 'price')}/>
                </div>
                <div>
                <button className='button' onClick={this.clearValues}>Cancel</button>
                <button className='button' onClick={this.addProduct}>Add to Inventory</button>
                </div>

            </div>
        )
    }
}
