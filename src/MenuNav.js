import logo from "./logo.svg";
import "antd/dist/antd.css";
import "./App.css";
import { Button } from "antd";
import { Layout, Menu } from "antd";
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UserOutlined,
  UploadOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Row, Col } from "antd";
import { Card } from "antd";
import { Typography } from "antd";
import { white } from "color-name";
import { Image } from "antd";
import { Link, Redirect } from "react-router-dom";

const { Header, Content, Footer, Sider } = Layout;
const { Title } = Typography;

function MenuNav() {
  return (
    <Layout>
      <Sider
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
        }}
      >
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["4"]}>
          <Menu.Item key="1" icon={<UserOutlined />}>
            <Link to="/">Hive Central</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            User Settings
          </Menu.Item>
          <Menu.Item key="3" icon={<UploadOutlined />}>
            Common Resources
          </Menu.Item>
          <Menu.Item key="4" icon={<BarChartOutlined />}>
            Public Video Chat
          </Menu.Item>
          <Menu.Item key="5" icon={<CloudOutlined />}>
            <Link to="/MainChatrooms"> Main Chatrooms </Link>
          </Menu.Item>
          <Menu.Item key="6" icon={<TeamOutlined />}>
            About Us
          </Menu.Item>
          <Menu.Item key="8" icon={<ShopOutlined />}>
            Friends
          </Menu.Item>
        </Menu>
      </Sider>
    </Layout>
  );
}

export default MenuNav;
