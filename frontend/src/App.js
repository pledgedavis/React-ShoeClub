import "./App.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Welcome from "./containers/Welcome";
import Shoes from "./containers/Shoes";
import Contact from "./containers/Contact";
import Navbar from "./components/Navbar";
import ShoePage from "./components/ShoePage";

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/shoes" component={Shoes} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/shoePage" component={ShoePage} />
        </Switch>
      </Router>
    );
  }
}
export default App;
