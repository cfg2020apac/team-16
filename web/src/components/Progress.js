import React from "react";
import { Collapse, Progress, Row, Col, Card } from "antd";
import TaskProgress from "./TaskProgress";
const { Panel } = Collapse;

function callback(key) {
  console.log(key);
}

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const data = [
  {
    title: "Planning with Purpose",
    period: "09/2019 - 12/2019",
    progress: 60,
    tasks: [
      {
        title: "Task 1",
        fill: "#1bbc64",
        complete: 80,
        incomplete: 20,
      },
      {
        title: "Task 2",
        fill: "#c6b631",
        complete: 60,
        incomplete: 40,
      },
      {
        title: "Task 3",
        fill: "#c96631",
        complete: 30,
        incomplete: 70,
      },
      {
        title: "Task 4",
        fill: "#eba482",
        complete: 20,
        incomplete: 80,
      },
      {
        title: "Task 5",
        fill: "#951f23",
        complete: 25,
        incomplete: 75,
      },
    ],
  },
  {
    title: "Finance for Future",
    period: "06/2019 - 12/2019",
    progress: 30,
    tasks: [
      {
        title: "Task 1",
        fill: "#1bbc64",
        complete: 90,
        incomplete: 20,
      },
      {
        title: "Task 2",
        fill: "#c6b631",
        complete: 80,
        incomplete: 25,
      },
      {
        title: "Task 3",
        fill: "#c96631",
        complete: 60,
        incomplete: 40,
      },
    ],
  },
  {
    title: "Personal Spending",
    period: "06/2020 - 10/2020",
    progress: 70,
    tasks: [
      {
        title: "Task 1",
        fill: "#1bbc64",
        complete: 100,
        incomplete: 30,
      },
      {
        title: "Task 2",
        fill: "#c6b631",
        complete: 80,
        incomplete: 50,
      },
      {
        title: "Task 3",
        fill: "#c96631",
        complete: 65,
        incomplete: 75,
      },
    ],
  },
];

const header = ({ title, period, progress }) => (
  <Row justify="space-between" align="middle">
    <Col xs={2} sm={4} md={6} lg={8} xl={10} style={{ fontSize: "24px" }}>
      {title}
    </Col>
    <Col xs={20} sm={16} md={12} lg={8} xl={4}>
      {period}
    </Col>
    <Col xs={2} sm={4} md={6} lg={8} xl={10}>
      <Progress percent={progress} />
    </Col>
  </Row>
);

export const ProjectProgress = () => {
  return (
    <>
      <h1 style={{ fontSize: "32px", fontWeight: "bold" }}>Progress</h1>
      <h5 style={{ fontSize: "16px", fontWeight: "lighter" }}>Track progress status of various programs</h5>
      <Collapse defaultActiveKey={data[0].title} onChange={callback}>
        {data.map((project) => (
          <Panel showArrow={false} header={header(project)} key={project.title}>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              {project.tasks.map((task) => (
                <Card
                  title={task.title}
                  bordered={false}
                  style={{ width: 500 }}
                >
                  <TaskProgress
                    fill={task.fill}
                    complete={task.complete}
                    incomplete={task.incomplete}
                  />
                </Card>
              ))}
            </div>
          </Panel>
        ))}
      </Collapse>
    </>
  );
};
