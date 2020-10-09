import React from "react";
import { Table, Button, Progress } from "antd";
import { MailOutlined } from "@ant-design/icons";
import { createFromIconfontCN } from "@ant-design/icons";
import { FirebaseDB } from "../firebase";

const IconFont = createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js",
});

const columns = [
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Program",
    dataIndex: "program",
    filters: [
      {
        text: "London",
        value: "London",
      },
      {
        text: "New York",
        value: "New York",
      },
    ], //replace with program names
  },
  {
    title: "Email",
    dataIndex: "email",
  },
  {
    title: "Progress",
    dataIndex: "progress",
    sorter: (a, b) => a.progress - b.progress,
    render: (text, record) => (
      <Progress percent={record.progress} status="active" />
    ),
  },
];

const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    progress: 32,
    program: `London, Park Lane no. ${i}`,
    email: "kingedward@gmail.com",
  });
}

function getStudents() {
  let studentRef = FirebaseDB.collection("student");
  let students = [];
  studentRef.get().then((snapshot) => {
    Promise.all(
      snapshot.docs.map((child) => {
        const id = child.id;
        const data = child.data();
        const progRef = data.enrolled_proj;
        let student = {
          id,
          name: data.name,
          email: data.email_addr,
          progress: data.progress,
          key: data.email_addr,
        };
        progRef.get().then((res) => {
          const progData = res.data();
          student["program"] = progData.name;
        });
        students.push(student);
      })
    );
  });
  return students;
}
class ParticipantStudentTable extends React.Component {
  state = {
    selectedRowKeys: [], // Check here to configure the default column
    loading: false,
    students: [],
  };

  start = () => {
    this.setState({ loading: true });
    // ajax request after empty completing
    setTimeout(() => {
      this.setState({
        selectedRowKeys: [],
        loading: false,
      });
    }, 1000);
  };

  onSelectChange = (selectedRowKeys) => {
    console.log("selectedRowKeys changed: ", selectedRowKeys);
    this.setState({ selectedRowKeys });
  };

  componentDidMount() {
    let studentRef = FirebaseDB.collection("student");
    let students = [];
    studentRef.get().then((snapshot) => {
      Promise.all(
        snapshot.docs.map((child) => {
          const id = child.id;
          let data = child.data();
          let student = {
            id,
            name: data.name,
            email: data.email_addr,
            progress: data.progress,
            key: data.email_addr,
            progRef: data.enrolled_proj,
          };
          students.push(student);
        })
      );
      Promise.all(
        students.map((student) => {
          const progRef = student.progRef;
          progRef.get().then((res) => {
            const progData = res.data();
            student["program"] = progData.name;
          });
        })
      );
      this.setState({ students });
    });
  }

  render() {
    const { loading, selectedRowKeys, students, changed } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
    const hasSelected = selectedRowKeys.length > 0;
    console.log(this.state);
    return (
      <div>
        <div
          style={{ marginBottom: 16, display: "flex", justifyContent: "end" }}
        >
          <Button
            type="primary"
            onClick={this.start}
            disabled={!hasSelected}
            loading={loading}
            size="large"
          >
            Reset
          </Button>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginLeft: "25px",
            }}
          >
            <Button
              type="primary"
              icon={<MailOutlined />}
              size="large"
              style={{ marginRight: "10px" }}
            >
              Send Email
            </Button>
            <Button
              type="primary"
              icon={<IconFont type="icon-facebook" />}
              size="large"
            >
              Send Certificates
            </Button>
          </div>
          <span style={{ marginLeft: 8 }}>
            {hasSelected ? `Selected ${selectedRowKeys.length} items` : ""}
          </span>
        </div>
        <Table
          rowSelection={rowSelection}
          columns={columns}
          dataSource={students}
        />
      </div>
    );
  }
}

export default ParticipantStudentTable;
