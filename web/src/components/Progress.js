import React from "react";
import { Collapse, Progress, Row, Col, Space } from "antd";

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
  },
  {
    title: "Finance for Future",
    period: "06/2019 - 12/2019",
    progress: 30,
  },
];

const extra = (percent) => (
  <div style={{ width: "500px", display: "flex" }}>
    <Progress percent={percent} />
  </div>
);

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
    <Collapse defaultActiveKey={data[0].title} onChange={callback}>
      {data.map((project) => (
        <Panel
          showArrow={false}
          header={header(project)}
          key={project.title}
          //   extra={extra(project.progress)}
        >
          <p>{text}</p>
        </Panel>
      ))}
    </Collapse>
  );
};
