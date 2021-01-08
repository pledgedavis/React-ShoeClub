import React, { Fragment } from 'react';
import { connect } from "react-redux";
import yeezy from '../images/yeezy.jpg';
import yeezy2 from '../images/yeezy2.jpg';
import yeezy3 from '../images/yeezy3.jpg';
import yeezy4 from '../images/yeezy4.jpg';

const Cart = ({cartProps}) =>{
    console.log(cartProps)

   let productsInCart = []

   Object.keys(cartProps.products).forEach( function(item){
       if(cartProps.products[item].incart);{
       productsInCart.push(cartProps.products[item])
       };
       console.log(productsInCart)
   })

   const productImages = [yeezy, yeezy2, yeezy3]

   productsInCart = productsInCart.map( (product, index) => {
        return(
            <Fragment>
                        <div className="product"><ion-icon name="close-circle"></ion-icon><img src={productImages[index]}/>
                        <span className="sm-hide">{product.name}</span>
                        </div>
                        <div className="price sm-hide">${product.price},00</div>
                        <div className="quantity">
                            <ion-icon className="increase" name="arrow-foward-circle-outline"></ion-icon>
                        </div>
                        <div className="total">${product.numbers * product.price},00</div>
            </Fragment>
        )

   })

};

const mapStateToProps = state => ({
    cartProps: state.cartState
});

export default connect(mapStateToProps)(Cart);