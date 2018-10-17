import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import MoviesList from "./MoviesList";

// 65e043c24785898be00b4abc12fcdaae

const App = () => (
  <Router>
    <div className="App">
      <Switch>
        <Route exact path="/test" component={Test} />
        <Route path="/" component={MoviesList} />
      </Switch>
    </div>
  </Router>
);

export default App;

const Test = () => <h1>Test</h1>;
