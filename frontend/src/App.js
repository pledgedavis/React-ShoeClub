import './App.css';
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchAllShoes } from "./actions/shoesAction";

class App extends Component {
   componentDidMount(){
      this.props.fetchAllShoes()
   }

  render(){
    // const shoes = this.props.shoes.map((shoe, i) =>{
    //   return <li key ={i} >{shoe.name}</li>
    // });
 
  return (

  //  <Router>
    <div className="App">
      <header className="App-header">
        <h1>
       Shoegram
        </h1>
        {/* <li>{this.props.loading ? <h3>Loading...</h3>}</li> */}
        {console.log("hello", this.shoes)}
        <h3> <li>{this.shoes} hello</li></h3>
      </header>
    </div>
    // </Router>
  ); 
  }
}


const mapStateToProps = state => {
console.log(state)
  return {
     shoes: state.shoeReducer.shoes,
     loading: state.shoeReducer.loading
  }
}

export default connect(mapStateToProps, {fetchAllShoes})(App);




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
