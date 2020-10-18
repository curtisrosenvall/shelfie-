import React from 'react';

export default function Product(props) {
//cant figure out how to get this page to work
    return (

        <div className="product">        

        <img className="product-img" src={props.imgurl}/>
            <h2>{props.name}</h2>
            <p>${props.price}</p>
            <button className='product-button' onClick={() => {props.delete(props.id) }}>
                Delete
            </button>
            <button className='product-button' onClick=''>
                Edit
            </button>
        </div>
    )
}