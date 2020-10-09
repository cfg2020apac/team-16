import React, { Children } from "react";
import { Link } from "react-router-dom";
import { Layout, Menu, Breadcrumb } from "antd";
import {
  UserOutlined,
  NotificationOutlined,
  ProjectOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

export const AppBar = ({ children, location }) => {
  const baseLength = process.env.PUBLIC_URL.length;
  const currentRoute = location.pathname.slice(baseLength);
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header className="header">
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
          <Menu.Item key="1">Dashboard</Menu.Item>
          <Menu.Item key="2">About</Menu.Item>
          <Menu.Item key="3">Help</Menu.Item>
        </Menu>
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            defaultSelectedKeys={[currentRoute]}
            selectedKeys={[currentRoute]}
            style={{ height: "100%", borderRight: 0 }}
          >
            <SubMenu key="sub1" icon={<ProjectOutlined />} title="Programs">
              <Menu.Item key="/calendar"><Link to="/calendar">Events</Link></Menu.Item>
              <Menu.Item key="/progress"><Link to="/progress">Progress</Link></Menu.Item>
              <Menu.Item key="/submissions">
                <Link to="/submissions">Submissions</Link>
              </Menu.Item>
            </SubMenu>
            <Menu.Item key="/students/participants" icon={<UserOutlined />}>
              <Link to="/students/participants">Students</Link>
            </Menu.Item>
            <SubMenu
              key="sub3"
              icon={<NotificationOutlined />}
              title="Volunteers"
            >
              <Menu.Item key="9">Applicants</Menu.Item>
              <Menu.Item key="10">Participants</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout style={{ padding: "0 24px 24px" }}>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};
