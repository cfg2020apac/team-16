import React from "react";
import { Table, Button, Tag, Space, Progress, Modal, Input } from "antd";
import { MailOutlined } from "@ant-design/icons";
import { createFromIconfontCN } from "@ant-design/icons";
import { FirebaseDB } from "../firebase";

const { TextArea } = Input;

const IconFont = createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js",
});

const { Column, ColumnGroup } = Table;

const data = [
  {
    name: 'Jane Doe',
    submssion: ['progress report.pdf', 'proposal.docx', 'task.docx'],
  },
  {
    name: 'John Smith',
    submssion: ['progress report.pdf'],
  },
  {
    name: 'Edward King',
    submssion: ['task.docx', 'team project.pdf', 'proposal.docx'],
  },
];

class SubmissionsTable extends React.Component {
  state = {
    selectedRowKeys: [], // Check here to configure the default column
    loading: false,
    students: [],
    ModalText: "Content of the modal",
    visible: false,
    confirmLoading: false,
    subject: "",
    body: "",
  };

  render() {
    const {
      loading,
      selectedRowKeys,
      selectedNames,
      students,
      changed,
      visible,
      confirmLoading,
      ModalText,
    } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
    const hasSelected = selectedRowKeys.length > 0;
    return (
      <div>
        <Table dataSource={data}>
          <Column title="Name" dataIndex="name" key="firstName">
          </Column>
          <Column
            title="Submissions"
            key="submssion"
            render={(text, record) => (
              <Space size="middle">
                <a>{record.submssion[0]}</a>
                <a>{record.submssion[1]}</a>
                <a>{record.submssion[2]}</a>
                <a>{record.submssion[3]}</a>
                <a>{record.submssion[4]}</a>
              </Space>
            )}
          />
        </Table>,
      </div>
    );
  }
}

export default SubmissionsTable;