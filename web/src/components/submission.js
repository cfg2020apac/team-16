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
const data = [
  "Finance for Future",
  "Job Shadowing",
  "Planning with Purpose",
  "Personal Spending 101",
];
const programs = getPrograms();

export const Submission = () => {
  return (
    <>
      <h1 style={{ fontSize: "32px", fontWeight: "bold" }}>Choose a Program</h1>
      <div className="site-card-wrapper" style={{display:"flex", flexWrap:"wrap"}}>
        {/* <Row gutter={16} style={{ marginBottom: 16 }}> */}
        {data.map((title) => (
          <Col span={7} style={{marginRight:"10px", marginBottom:"10px"}}>
            <Card
              title={title}
              bordered={false} // TODO: make it firestore
            >
              <Button type="primary" size="small">
                <Link
                  to={{
                    pathname: "/submissionTasks",
                    state: {
                      title: title,
                    },
                  }}
                >
                  View Details
                </Link>
              </Button>
            </Card>
          </Col>
        ))}
        {/* </Row> */}
      </div>
    </>
  );
};
