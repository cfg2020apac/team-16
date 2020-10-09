import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AppBar } from "./components/AppBar";
import { Home } from "./components/Home";
import { ParticipantStudents } from "./components/ParticipantStudents";
import { ProjectProgress } from "./components/Progress";

export const Routes = () => {
  return (
    <Router>
      <Switch>
        <AppBar>
          <Route exact path="/" component={Home} />
          <Route exact path="/students/participants" component={ParticipantStudents} />
          <Route exact path="/progress" component={ProjectProgress} />
        </AppBar>
      </Switch>
    </Router>
  );
};
