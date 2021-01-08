import React, {useEffect} from 'react';
import { connect } from "react-redux";
import { getNumbers } from "../actions/getAction";

function Navbar(props) {
   console.log(props);

     useEffect(() => {
      getNumbers();
     }, [])

    return (

      <header>
       <div className="App-header">
       <nav>
         <h2>Shoe Club</h2>
         <ul>
           <li><a href="#">Home</a></li>
           <li><a href="#">About</a></li>
           <li className="cart"><a href="#"><ion-icon name="bag-remove-outline"></ion-icon>
               Cart<span>{props.cartProps.cartNumbers}</span></a></li>
         </ul>
       </nav>
       </div>
      </header>

   
    )

}

const mapStateToProps = state => ({
    cartProps: state.cartState
})

export default connect(mapStateToProps, { getNumbers })(Navbar)