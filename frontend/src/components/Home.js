
import yeezy from '../images/yeezy.jpg';
import yeezy from '../images/yeezy2.jpg';
import yeezy from '../images/yeezy3.jpg';
import yeezy from '../images/yeezy4.jpg';








const  Home= () =>{
    const [basketNumbers, setBasketNumbers] = useState(0)

    const addToBasket = () => {
        console.log("Button Clicked");
    }

    // basketnumbers is the name of my state and setbasketnumbers updates the state
    return (
<div className="overlay">
      <header className="App-header">
       <nav>
         <h2>Shop</h2>
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



export default Home;