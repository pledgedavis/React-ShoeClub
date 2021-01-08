import React from 'react';
import { connect } from "react-redux";

const Cart = ({cartProps}) =>{
    console.log(cartProps)



    
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