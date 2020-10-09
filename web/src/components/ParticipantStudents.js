import React from "react";
import { Tabs } from "antd";
import ParticipantStudentTable from "./ParticipantStudentTable";
import AlumniStudentTable from "./AlumniStudentTable";

const { TabPane } = Tabs;

export const ParticipantStudents = () => {
  return (
    <div className="card-container">
      <Tabs type="card">
        <TabPane tab="Current" key="1">
          <ParticipantStudentTable />
        </TabPane>
        <TabPane tab="Alumni" key="2">
          <AlumniStudentTable />
        </TabPane>
      </Tabs>
    </div>
  );
};
