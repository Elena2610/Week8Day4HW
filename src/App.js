import './App.css';
import React from "react";
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Stocks from "./pages/Stocks";
import Stock from "./pages/Stock";
import Nav from "./components/nav";

function App() {
  return (
    <div className="App">   
      <Router>
      <Nav /> 
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/About">
          <About />
        </Route>
        <Route path="/Stocks">
          <Stocks />
        </Route>
        <Route
          path="/Stock/:symbol"
          render={(routerProps) => <Stock {...routerProps} />}
        />
      </Switch>
      </Router>
      
    </div>
  );
}

export default App;

/*
 <Route
          path="/Stock/:symbol"
          render={(routerProps) => <Stock {...routerProps} />}
        />
*/