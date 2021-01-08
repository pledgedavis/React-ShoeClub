import React from 'react';


function Home(){
    return (
<div className="overlay">
      <header className="App-header">
       <nav>
         <h2>Shop</h2>
         <ul>
           <li><a href="#">Home</a></li>
           <li><a href="#">About</a></li>
           <li className="cart"><a href="#"><ion-icon name="basket"></ion-icon>
               Cart<span>0</span></a></li>
         </ul>
       </nav>
      </header>
    </div>


    )

}

export default Home;