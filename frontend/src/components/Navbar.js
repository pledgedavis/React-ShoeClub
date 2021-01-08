import React from 'react';

const  Navbar= () =>{
    return (
    <div>
      <header className="App-header">
       <nav>
         <h2>Shoe Club</h2>
         <ul>
           <li><a href="#">Home</a></li>
           <li><a href="#">About</a></li>
           <li className="cart"><a href="#"><ion-icon name="bag-remove-outline"></ion-icon>
               Cart<span>0</span></a></li>
         </ul>
       </nav>
      </header>
    </div>


    )

}

export default Navbar;