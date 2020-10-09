import React from "react";
import { Space, Button, Card, Col, Row } from "antd";
import { FirebaseDB } from "../firebase";
import { Link } from "react-router-dom";

const gridStyle = {
  width: "25%",
  textAlign: "center",
};

const data = ["Task 1", "Task 2", "Task 3", "Task 4"];
// TODO: In the below card, there should be a way to receive parameter from previous link to set the name
export const SubmissionTasks = ({ location }) => {
  const { title } = location.state;
  return (
    <div className="site-card-wrapper">
      <Card title={title} noHovering>
        {data.map((task) => (
          <Link to="/viewSubmissions">
            <Card.Grid style={gridStyle}>{task}</Card.Grid>
          </Link>
        ))}
      </Card>
    </div>
  );
};
