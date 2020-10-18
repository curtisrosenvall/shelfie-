import React, {Component} from 'react';
import Product from './Product/Product';

export default class Dashboard extends Component{

    render(){
        let {inventory} = this.props
        return(
            <div id="dashboard">
                <div>
                {inventory.map((product,index) => {
                    return(
                    <Product
                    key={index}
                    name={product.name}
                    price={product.price}
                    id={product.id}
                    imgurl={product.img}
                    delete={this.props.delete}
                    />
                    )
                    }
                    )
                }
                </div>
            </div>
        )
    }
}
