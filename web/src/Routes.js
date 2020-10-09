import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AppBar } from "./AppBar";
import CalendarComponent from "./components/CalendarComponent";
import AnotherCalendarComponent from "./components/AnotherCalendarComponent";
import { Home } from "./Home";


export const Routes = () => {
  return (
    <Router>
      <Switch>
        <AppBar>
          <Route path="/" exact component={Home} />
          <Route path="/calendar" component={CalendarComponent} />
          <Route path="/anothercalendar" component={AnotherCalendarComponent} />
        </AppBar>
      </Switch>
    </Router>
  );
};
