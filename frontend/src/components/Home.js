import React, { state } from 'react';
import yeezy from '../images/yeezy.jpg';
import yeezy2 from '../images/yeezy2.jpg';
import yeezy3 from '../images/yeezy3.jpg';
import yeezy4 from '../images/yeezy4.jpg';



const  Home = () =>{
    
    return (
<div className="container">
      <div className="image" >
        <img src={yeezy} alt="Yeezy"/>
      <h3> first Yeezy </h3>
      <h3>$330</h3>
      <a className="addToCart cart1" href="#">  Add to cart </a>
     </div>

   <div className="image" >
   <img src={yeezy2} alt="Yeezy"/>
   <h3> second Yeezy </h3>
   <h3>$330</h3>
   <a className="addToCart cart2" href="#">  Add to cart </a>
   </div>

   <div className="image" >
   <img src={yeezy3} alt="Yeezy"/>
   <h3> third Yeezy </h3>
   <h3>$390</h3>
   <a  className="addToCart cart3" href="#">  Add to cart </a>
   </div>

  
</div>
    )

}



export default Home;