import React from "react";
import { Space, Button, Card, Col, Row } from "antd";
import { FirebaseDB } from "../firebase";
import { Link } from "react-router-dom";

const gridStyle = {
    width: '25%',
    textAlign: 'center',
  };
// TODO: In the below card, there should be a way to receive parameter from previous link to set the name
export const SubmissionTasks = () => {
    return (
    <div className="site-card-wrapper">
    <Card title="Program Name" noHovering>
        <Card.Grid style={gridStyle}>
        <Link to="/viewSubmissions">Task1</Link>
        </Card.Grid>
        <Card.Grid style={gridStyle}>
        <Link to="/viewSubmissions">Task2</Link>
        </Card.Grid>
        <Card.Grid style={gridStyle}>
        <Link to="/viewSubmissions">Task3</Link>
        </Card.Grid>
        <Card.Grid style={gridStyle}>
        <Link to="/viewSubmissions">Task4</Link>
        </Card.Grid>
    </Card>
    </div>
    );
};