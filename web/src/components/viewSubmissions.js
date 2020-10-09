import React from "react";
import { Tabs, Empty, Space } from "antd";
import SubmissionTable from "./SubmissionTable";

const { TabPane } = Tabs;

export const viewSubmissions = () => {
  return (
    <div className="card-container">
      <Tabs type="card">
        <TabPane tab="Submitted" key="1" style={{ height: "75vh" }}>
          <SubmissionTable />
        </TabPane>
        <TabPane tab="Not Submitted" key="2" style={{ height: "75vh" }}>
            <Empty description={false} style={{marginTop:"auto", marginBottom:"auto"}} />
        </TabPane>
      </Tabs>
    </div>
  );
};
