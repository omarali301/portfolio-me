import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import About from "./Component/Home/About/About";
import Home from "./Component/Home/Home/Home";

function App() {
  return (
    <Router>
    <Switch>
    <Route exact path="/">
      <Home/>
    </Route>
    <Route path="/about">
     
    </Route>
    <Route path="/dashboard">
    
    </Route>
  </Switch>

</Router>
  );
}

export default App;
