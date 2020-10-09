import React from "react";
import { Space, Button, Card, Col, Row } from "antd";
import { FirebaseDB } from "../firebase";

const gridStyle = {
    width: '25%',
    textAlign: 'center',
  };

export const SubmissionTasks = () => {
    return (
    <div className="site-card-wrapper">
    <Card title="Program Name" noHovering>
        <Card.Grid style={gridStyle}>Task1</Card.Grid>
        <Card.Grid style={gridStyle}>Task2</Card.Grid>
        <Card.Grid style={gridStyle}>Task3</Card.Grid>
        <Card.Grid style={gridStyle}>Task4</Card.Grid>
        <Card.Grid style={gridStyle}>Task5</Card.Grid>
        <Card.Grid style={gridStyle}>Task6</Card.Grid>
        <Card.Grid style={gridStyle}>Task7</Card.Grid>
    </Card>
    </div>
    );
};