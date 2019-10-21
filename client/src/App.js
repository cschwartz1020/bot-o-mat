import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Robots from "./components/Robots";
import NavigationBar from "./components/NavigationBar";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavigationBar />
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/robots" component={Robots} />
            <Route path="/about" component={About} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
