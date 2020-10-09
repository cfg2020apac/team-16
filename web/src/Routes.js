import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AppBar } from "./AppBar";
import { Home } from "./Home";

export const Routes = () => {
  return (
    <Router>
      <Switch>
        <AppBar>
          <Route path="/" component={Home} />
          <Route path="/about" component="" />
        </AppBar>
      </Switch>
    </Router>
  );
};
