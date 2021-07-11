import logo from './logo.svg';
import 'antd/dist/antd.css';
import './App.css';
import {Button} from 'antd';
import { Layout, Menu } from 'antd';
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UserOutlined,
  UploadOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Row, Col } from 'antd';
import { Card } from 'antd';
import { Typography } from 'antd';
import { white } from 'color-name';


const { Header, Content, Footer, Sider } = Layout;
const { Title } = Typography;

function App() {
  return (
    <Layout>
    <Sider
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
      }}
    >
      
      
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
        <Menu.Item key="1" icon={<UserOutlined />}>
          Hive Central
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
          Main Chatrooms
        </Menu.Item>
        <Menu.Item key="6" icon={<TeamOutlined />}>
          About Us
        </Menu.Item>
        <Menu.Item key="8" icon={<ShopOutlined />}>
          Friends
        </Menu.Item>
      </Menu>
    </Sider>
    <Layout className="site-layout" style={{ marginLeft: 200 }}>

      <Header className="site-layout-background" style={{ padding: 0 }} >
        <Row gutter={[16,16]} justify="center" align="middle">
          <Col>
              <Title level={3}
            style={{
              // textAlign: 'center',
              paddingTop: '.5em',
              color: 'white'
            }} >Hive Central</Title>
          </Col>
        </Row>
        </Header>

      <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
        <div className="site-layout-background" style={{ padding: 24, textAlign: 'center' }}>
        <Row gutter={[48, 48]}>
        <Col span={12}>
        <Card title="Common Resources" bordered={false}>
          Here is where you might find links and resources to many free bootcamps and courses. Most of these are online, which makes it even more comfortable and accesible!
        </Card>
      </Col>
      <Col span={12}>
        <Card title="Public Video Chat" bordered={false}>
          This is where you might converse with your peers face-to-face, and experience more of a classroom setting. 
        </Card>
      </Col>

      <Col span={12}> 
      <Card title="Main Chatrooms" bordered={false}>
          Come join the diverse live chat where you might find others who think-alike, and get in touch real time. You can even express yourself through emojis, but do remember to respect everyone here. 
        </Card>
      </Col>
      <Col span={12}>
      <Card title="About Us" bordered={false}>
          We have a beautiful history, just as all humble things once begin. Our organziation is dedicated to educate everyone who is trying to get their feet wet in this competitive field of Computer Science.
        </Card>
      </Col>
        </Row>

        

        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Coder's Hive ©2021 Created by Team Alpha</Footer>
    </Layout>
  </Layout>
  );
}

export default App;
