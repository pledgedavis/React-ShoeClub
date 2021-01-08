import React from 'react';
import yeezy from '../images/yeezy.jpg';
import yeezy2 from '../images/yeezy2.jpg';
import yeezy3 from '../images/yeezy3.jpg';
import yeezy4 from '../images/yeezy4.jpg';



const  Home= () =>{
    // const [basketNumbers, setBasketNumbers] = useState(0)

    // const addToBasket = () => {
    //     console.log("Button Clicked");
    // }

    // basketnumbers is the name of my state and setbasketnumbers updates the state
    return (
<div className="container">
      <div className="image" >
    <img src="yeezy" alt="Yeezy"/>
      <h3> first Yeezy </h3>
      <h3>$330</h3>
      <a href="#">  Add to cart </a>
     </div>
    </div>
    )

}



export default Home;