import React from "react";
import { Tabs } from "antd";
import ParticipantStudentTable from "./ParticipantStudentTable";

const { TabPane } = Tabs;

export const ParticipantStudents = () => {
  return (
    <div className="card-container">
      <Tabs type="card">
        <TabPane tab="Current" key="1">
          <ParticipantStudentTable />
        </TabPane>
        <TabPane tab="Alumni" key="2">
          <p>Content of Tab Pane 2</p>
          <p>Content of Tab Pane 2</p>
          <p>Content of Tab Pane 2</p>
        </TabPane>
      </Tabs>
    </div>
  );
};
