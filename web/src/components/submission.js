import React from "react";
import { Button, Card, Col, Row } from "antd";
import { FirebaseDB } from "../firebase";


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
    })
  }
programs = getPrograms();

export const submission = () => {
    return (
    <div className="site-card-wrapper">
        <Row gutter={16}
             style={{ marginBottom: 16 }}>
        <Col span={8}>
            <Card title="Program 1" bordered={false} // TODO: make it firestore
            >
                <Button
                type="primary"
                size="small"
                // // TODO: onClick={should redirect to /SubmissionTasks}
                >
                view details
                </Button>
            </Card>
        </Col>
        <Col span={8}>
            <Card title="Program 2" bordered={false}>
            <Button
              type="primary"
              size="small"
            >
            view details
            </Button>
            </Card>
        </Col>
        <Col span={8}>
            <Card title="Program 3" bordered={false}>
            <Button
              type="primary"
              size="small"
            >
            view details
            </Button>
            </Card>
        </Col>
        </Row>

        <Row gutter={16}>
        <Col span={8}>
            <Card title="Program 4" bordered={false}>
                <Button
                type="primary"
                size="small"
                >
                view details
                </Button>
            </Card>
        </Col>
        </Row>
    </div>
    );
};
