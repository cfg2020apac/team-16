import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AppBar } from "./AppBar";
import { Home } from "./components/Home";
import { ParticipantStudents } from "./components/ParticipantStudents";
import { CalendarComponent } from "./components/CalendarComponent";
import { AnotherCalendarComponent } from "./components/AnotherCalendarComponent";

export const Routes = () => {
  return (
    <Router>
      <Switch>
        <AppBar>
          <Route path="/" exact component={Home} />
          <Route path="/calendar" component={CalendarComponent} />
          <Route path="/anothercalendar" component={AnotherCalendarComponent} />
          <Route exact path="/students/participants" component={ParticipantStudents} />
        </AppBar>
      </Switch>
    </Router>
  );
};
