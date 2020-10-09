import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AppBar } from "./components/AppBar";
import { Home } from "./components/Home";
import { ParticipantStudents } from "./components/ParticipantStudents";
import CalendarComponent from "./components/CalendarComponent";
import { ProjectProgress } from "./components/Progress";
import { Submission } from "./components/submission"
import { SubmissionTasks } from "./components/SubmissionTasks"
import { viewSubmissions } from "./components/viewSubmissions"
import Volunteers from "./components/Volunteers"
import VolunteerApplications from "./components/VolunteerApplications"

export const Routes = () => {
  return (
    <Router>
      <Switch>
        <AppBar>
          <Route path="/" exact component={Home} />
          <Route path="/calendar" component={CalendarComponent} />
          <Route exact path="/students/participants" component={ParticipantStudents} />
          <Route exact path="/progress" component={ProjectProgress} />
          <Route exact path="/submissions" component={Submission} />
          <Route path="/submissionTasks" component={SubmissionTasks} />
          <Route path="/viewSubmissions" component={viewSubmissions} />
          <Route exact path="/volunteers" component={Volunteers} />
          <Route exact path="/volunteerApplications" component={VolunteerApplications} />
        </AppBar>
      </Switch>
    </Router>
  );
};
