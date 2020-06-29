import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

function Home() {
  return <h2>Home - Digital Broker</h2>;
}

export default App;
