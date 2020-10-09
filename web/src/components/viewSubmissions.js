import React from "react";
import { Tabs } from "antd";
import SubmissionTable from "./SubmissionTable";

const { TabPane } = Tabs;

export const viewSubmissions = () => {
  return (
    <div className="card-container">
      <Tabs type="card">
        <TabPane tab="Submitted" key="1">
          <SubmissionTable />
        </TabPane>
        <TabPane tab="not submitted" key="2">
          <p>Content of Tab Pane 2</p>
          <p>Content of Tab Pane 2</p>
          <p>Content of Tab Pane 2</p>
        </TabPane>
      </Tabs>
    </div>
  );
};
