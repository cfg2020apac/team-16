import React from "react";
import { Table } from "antd";
import { FirebaseDB } from "../firebase";

const columns = [
  {
    title: "Full Name",
    width: 100,
    dataIndex: "name",
    key: "name",
    fixed: "left",
  },
  {
    title: "Email",
    width: 200,
    dataIndex: "email",
    key: "email",
    fixed: "left",
  },
  { title: "Applied On", dataIndex: "date", key: "7" , sorter: true},
  { title: "Expertise", dataIndex: "expertise", key: "1" },
  { title: "Gender", dataIndex: "gender", key: "2" },
  { title: "Interest", dataIndex: "interest", key: "3" },
  { title: "Language", dataIndex: "language", key: "4" },
  { title: "Preference", dataIndex: "preference", key: "5", sorter: true },
  { title: "Workshop Day", dataIndex: "workshop_day", key: "6" },
  {
    title: "Action",
    key: "operation",
    fixed: "right",
    width: 100,
    render: () => <a>Approve </a>,
  },
];

export default class VolunteerApplications extends React.Component {
  state = {
    volunteers: [],
  };
  componentDidMount() {
    let volunteerRef = FirebaseDB.collection("volunteer_applications");
    let volunteers = [];
    volunteerRef.get().then((snapshot) => {
      snapshot.docs.map((doc) => {
        const id = doc.id;
        const data = doc.data();
        volunteers.push(data);
      });
      this.setState({ volunteers });
    });
  }
  render() {
    return (
      <Table
        columns={columns}
        dataSource={this.state.volunteers}
        scroll={{ x: 1300 }}
      />
    );
  }
}
