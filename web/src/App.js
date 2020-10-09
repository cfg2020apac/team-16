import React from "react";
import { Button } from 'antd';
import "./App.less";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { AppBar } from "./AppBar";
import AboutComponent from "./components/AboutComponent"
import CalendarComponent from "./components/CalendarComponent"

function App() {
  return (
    <Router>
      <div className="App">
        <AppBar/>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={AboutComponent} />
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
);

export default App;
