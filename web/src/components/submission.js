import React from "react";
import { Button, Card, Col, Row } from "antd";
import { FirebaseDB } from "../firebase";
import { Link } from "react-router-dom";

function getPrograms() {
  let projRef = FirebaseDB.collection("projects");
  let programs = [];
  projRef.get().then((snapshot) => {
    Promise.all(
      snapshot.docs.map((child) => {
        let data = child.data();
        programs.push(data.name);
      })
    );
    return programs;
  });
}
const programs = getPrograms();

export const Submission = () => {
  return (
    <div className="site-card-wrapper">
      <Row gutter={16} style={{ marginBottom: 16 }}>
        <Col span={8}>
          <Card
            title="Finance for Future"
            bordered={false} // TODO: make it firestore
          >
            <Button type="primary" size="small">
              <Link to="/submissionTasks">View Details</Link>
            </Button>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Job_shadowing" bordered={false}>
            <Button type="primary" size="small">
            <Link to="/submissionTasks">View Details</Link>
            </Button>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Planning with Purpose" bordered={false}>
            <Button type="primary" size="small">
            <Link to="/submissionTasks">View Details</Link>
            </Button>
          </Card>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col span={8}>
          <Card title="Personal Spending 101" bordered={false}>
            <Button type="primary" size="small">
            <Link to="/submissionTasks">View Details</Link>
            </Button>
          </Card>
        </Col>
      </Row>
    </div>
  );
};
