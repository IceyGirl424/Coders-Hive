import "antd/dist/antd.css";
import "./App.css";
import { Layout, Menu } from "antd";
import {
  AppstoreOutlined,
  CustomerServiceOutlined,
  CommentOutlined,
  TeamOutlined,
  FileTextOutlined,
  RadarChartOutlined,
  UploadOutlined,
  AliwangwangOutlined,
  ArrowLeftOutlined,
  HomeOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Typography } from "antd";
import { Link, Redirect } from "react-router-dom";
import { Collapse } from "antd";

const { Panel } = Collapse;
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
          <Menu.Item key="1" icon={<HomeOutlined />}>
            <Link to="/Home">Hive Central</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<SettingOutlined />}>
            User Settings
          </Menu.Item>
          <Menu.Item key="3" icon={<UploadOutlined />}>
            Common Resources
          </Menu.Item>
          <Menu.Item key="4" icon={<CustomerServiceOutlined />}>
            Public Video Chat
          </Menu.Item>
          <Menu.Item key="5" icon={<CommentOutlined />}>
            <Link to="/MainChatrooms"> Main Chatrooms </Link>
          </Menu.Item>
          <Menu.Item key="6" icon={<FileTextOutlined />}>
            About Us
          </Menu.Item>
          <Menu.Item key="7" icon={<TeamOutlined />}>
            Friends
          </Menu.Item>
          <Menu.Item key="8" icon={<ArrowLeftOutlined />}>
            <Link to="/">Logout</Link>
          </Menu.Item>
        </Menu>
      </Sider>
    </Layout>
  );
}

export default MenuNav;
