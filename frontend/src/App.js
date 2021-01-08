// import logo from './logo.svg';
import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home.js'
import './App.css';
import { Provider } from 'react-redux'
import store from './store.js'


function App() {
  return (
    <Provider store={store}>
     <div className="App">
      <Navbar/>
      <Home/>
     </div>
    </Provider>
  );
}

export default App;
