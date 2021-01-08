import React, { Fragment } from 'react';
import { connect } from "react-redux";

const Cart = ({cartProps}) =>{
    console.log(cartProps)

   let productsInCart = []

   Object.keys(cartProps.products).forEach( function(item){
       if(cartProps.products[item].incart);{
       productsInCart.push(cartProps.products[item])
       };
       console.log(productsInCart)
   })

   productsInCart = productsInCart.map( (product, index) => {
        return(
            <Fragment>
                        <div className="product"><ion-icon name="close-circle"></ion-icon><img src={productImages[index]}/>
                        <span className="sm-hide">{product.name}</span>
                        </div>
                        <div className="price sm-hide">${product.price},00</div>
                        <div className="">
                        </div>
            </Fragment>
        )

   })

    return (
       <div>
           <h1>Cart</h1>
       </div>
    )
};

const mapStateToProps = state => ({
    cartProps: state.cartState
});

export default connect(mapStateToProps)(Cart);