import "antd/dist/antd.css";
import "./App.css";
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
            {/* <Collapse defaultActiveKey={["1"]}>
              <Panel
                theme="dark"
                mode="inline"
                header="Friends"
                key="1"
              ></Panel>
            </Collapse> */}
            Friends
          </Menu.Item>
        </Menu>
      </Sider>
    </Layout>
  );
}

export default MenuNav;
