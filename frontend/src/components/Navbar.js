import React, {useEffect} from 'react';
import { connect } from "react-redux";
import { getNumbers } from "../actions/getAction";

const  Navbar = (props) =>{


     useEffect = () =>{

     }
    return (
    <div>
      <header className="App-header">
       <nav>
         <h2>Shoe Club</h2>
         <ul>
           <li><a href="#">Home</a></li>
           <li><a href="#">About</a></li>
           <li className="cart"><a href="#"><ion-icon name="bag-remove-outline"></ion-icon>
               Cart<span>{props.cartProps.cartNumbers}</span></a></li>
         </ul>
       </nav>
      </header>
    </div>


    )

}

const mapStateToProps = state => {
    cartProps: state.cartState
}

export default connect(mapStateToProps, { getNumbers })(Navbar)