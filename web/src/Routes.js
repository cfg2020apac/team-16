import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AppBar } from "./components/AppBar";
import { Home } from "./components/Home";
import { ParticipantStudents } from "./components/ParticipantStudents";

export const Routes = () => {
  return (
    <Router>
      <Switch>
        <AppBar>
          <Route exact path="/" component={Home} />
          <Route exact path="/students/participants" component={ParticipantStudents} />
        </AppBar>
      </Switch>
    </Router>
  );
};
