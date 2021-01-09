import './App.css';
import React, { Component } from 'react'
import { connect } from 'react-redux'

class App extends Component {

   componentDidCatch(){

   }

  render(){
    // const shoes = this.props.shoes.map((shoe, i) =>{
    //   return <li key ={i} >{shoe.name}</li>
    // });
 
  return (
    <div className="App">
      <header className="App-header">
        
        <h1>
       Shoegram
        </h1>
        
      </header>
    </div>
  ); 
  }
}


const mapStateToProps = state => {
console.log(state)
  return {
     shoe: state.shoeReducer.shoes,
     loading: state.shoeReducer.loading
  }
}

export default connect(mapStateToProps)(App);




// // import React from 'react';
// // import Navbar from './components/Navbar';
// // import Home from './components/Home.js'
// // import Cart from "./components/Cart.js"

// import './App.css';
// import { Provider } from 'react-redux'
// import store from './store.js'
// import { BrowserRouter, Route, Switch} from 'react-router-dom'
// // allows me to create multiple pages ^


// function App() {
//   return (
//     <Provider store={store}>
//      <div className="App">
//        <BrowserRouter>
//        <Navbar/>
//        <Switch>
//        <Route exact path="/" component={Home}/>
//        <Route path="/cart" component={Cart}/>
//        </Switch>
//       </BrowserRouter>
//      </div>
//     </Provider>
//   );
// }

// export default App;
