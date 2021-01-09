import React, { state } from 'react';
import yeezy from '../images/yeezy.jpg';
import yeezy2 from '../images/yeezy2.jpg';
import yeezy3 from '../images/yeezy3.jpg';
import yeezy4 from '../images/yeezy4.jpg';
import { connect } from 'react-redux';
import { addCart } from '../actions/addAction' 



const  Home = (props) =>{


    console.log(props)
    return (
<div className="container">
      <div className="image" >
        <img src={yeezy} alt="Yeezy"/>
      <h3> first Yeezy </h3>
      <h3>$330</h3>
      <a onClick={() => props.addCart("yeezy")} className="addToCart cart1" href="#">  Add to cart </a>
     </div>

   <div className="image" >
   <img src={yeezy2} alt="Yeezy2"/>
   <h3> second Yeezy </h3>
   <h3>$330</h3>
   <a onClick={() => props.addCart("yeezy2")} className="addToCart cart2" href="#">  Add to cart </a>
   </div>

   <div className="image" >
   <img src={yeezy3} alt="Yeezy3"/>
   <h3> third Yeezy </h3>
   <h3>$390</h3>
   <a onClick={() => props.addCart("yeezy3")} className="addToCart cart3" href="#">  Add to cart </a>
   </div>

</div>
    )

}



export default connect(null, { addCart })(Home);