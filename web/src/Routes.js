import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AppBar } from "./components/AppBar";
import { Home } from "./components/Home";
import { ParticipantStudents } from "./components/ParticipantStudents";
import CalendarComponent from "./components/CalendarComponent";
import AnotherCalendarComponent from "./components/AnotherCalendarComponent";
import { ProjectProgress } from "./components/Progress";
import { Submission } from "./components/submission"
import { SubmissionTasks } from "./components/SubmissionTasks"

export const Routes = () => {
  return (
    <Router>
      <Switch>
        <AppBar>
          <Route path="/" exact component={Home} />
          <Route path="/calendar" component={CalendarComponent} />
          <Route path="/anothercalendar" component={AnotherCalendarComponent} />
          <Route exact path="/students/participants" component={ParticipantStudents} />
          <Route exact path="/progress" component={ProjectProgress} />
          <Route exact path="/submissions" component={Submission} />
          <Route path="/submissionTasks" component={SubmissionTasks} />
        </AppBar>
      </Switch>
    </Router>
  );
};
