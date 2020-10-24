import logo from './logo.svg';
import './App.css';


import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

//components
import Home from './pages/Home'

function App() {
  return (
    <div className="App">

      <Router>
        <Switch>
          <Route path="/" component={Home}></Route>
        </Switch>
      </Router>


    </div>
  );
}

export default App;
