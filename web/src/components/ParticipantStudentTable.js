import React from "react";
import { Table, Button, Progress, Modal, Input, message } from "antd";
import { MailOutlined, TrophyOutlined } from "@ant-design/icons";
import { FirebaseDB } from "../firebase";

const { TextArea } = Input;

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
        text: "Finance for Future",
        value: "Finance for Future",
      },
      {
        text: "Job Shadowing",
        value: "Job_shadowing",
      },
      {
        text: "Planning with Purpose",
        value: "Planning with Purpose",
      },
      {
        text: "Personal Spending 101",
        value: "Personal Spending 101",
      },
    ],
    onFilter: (value, record) => record.program.indexOf(value) === 0,
    sorter: (a, b) => a.progress - b.progress,
    sortDirections: ['descend'],
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
class ParticipantStudentTable extends React.Component {
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

  success = () => {
    message.success("Certificates uploaded to Google Drive!");
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
    this.setState({ selectedRowKeys });
  };

  componentDidMount() {
    let studentRef = FirebaseDB.collection("student");
    let students = [];
    studentRef
      .where("status", "==", "current")
      .get()
      .then((snapshot) => {
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
        )
          .then(
            Promise.all(
              students.map((student) => {
                const progRef = student.progRef;
                progRef.get().then((res) => {
                  const progData = res.data();
                  student["program"] = progData.name;
                });
              })
            )
          )
          .then(this.setState({ students }));
      });
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = () => {
    this.setState({
      confirmLoading: true,
    });
    const { selectedRowKeys, subject, body } = this.state;
    const requestBody = {
      emails: selectedRowKeys,
      subject: subject,
      message: body,
    };
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    };

    fetch("http://127.0.0.1:5000/send_message", requestOptions)
      .then((result) => {
        console.log("result");
        this.setState({
          visible: false,
          confirmLoading: false,
        });
      })
      .catch((error) => console.error(error));
  };

  handleCancel = () => {
    console.log("Clicked cancel button");
    this.setState({
      visible: false,
    });
  };

  generateCertificates = () => {
    let participants = [];
    this.state.selectedRowKeys.forEach((email) => {
      let selectedObj = this.state.students.filter((obj) => obj.key == email);
      participants.push(selectedObj[0].name);
    });
    const requestBody = {
      participants: participants,
    };
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    };
    fetch("http://127.0.0.1:5001/generate_certificate", requestOptions).then(
      (result) => {
        console.log("result");
        this.success();
      }
    ).then(
      res => {
        console.log("here"); 
        return fetch("http://127.0.0.1:5001/uploadgdrive")
      }
    )
    .then( 
      (res) => { 
        console.log(res)
      }
    )
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
              onClick={this.showModal}
            >
              Send Email
            </Button>
            <Modal
              title="Email Content"
              visible={visible}
              onOk={this.handleOk}
              confirmLoading={confirmLoading}
              onCancel={this.handleCancel}
            >
              <Input
                placeholder="Subject"
                value={this.state.subject}
                onChange={(e) => this.setState({ subject: e.target.value })}
                style={{ marginBottom: "5px" }}
              />
              <TextArea
                placeholder="Body"
                value={this.state.body}
                rows={15}
                onChange={(e) => this.setState({ body: e.target.value })}
              />
            </Modal>
            <Button
              type="primary"
              icon={<TrophyOutlined />}
              size="large"
              onClick={this.generateCertificates}
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
