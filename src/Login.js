import React from "react";
import ReactDOM from "react-dom";
import { Col, Typography, Row } from "antd";
import { AutoComplete } from 'antd';
import { Input, Space } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Tooltip } from 'antd';
import { InfoCircleOutlined, UserOutlined } from '@ant-design/icons';
import { Card } from 'antd';
import { Button } from 'antd';
import { Link, Redirect } from "react-router-dom";



import './Login.css';
import MenuNav from "./MenuNav";
import { white } from "jest-matcher-utils/node_modules/chalk";


const { Title } = Typography;


function Login(){
    return(
        <div className="InputContainer"> 
        <div className="header">
             <Title
             level={1}
             style={{
            //    textAlign: 'center',
            //    paddingTop: "3em",
                color: '#7A6263',
             }}
           >
               🙤 Welcome to Coder's Hive! 🙦
            </Title>
        </div>

        <Card style={{ width: 550 }}>
           
        
        
            <Title
            level={4}
            style={{
                // textAlign: 'left',
                // paddingTop: "3em",
                color: '#7A6263',
            }}
            >
                Email or Username
            </Title>
        
        <Input
            placeholder="Enter your Email or Username (ex. Jackson42)"
            prefix={<UserOutlined className="site-form-item-icon" />}
      suffix={
            <Tooltip title="Extra information">
            <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
            </Tooltip>
      }
    />
           
            
            <Title
            level={4}
            style={{
                // textAlign: 'left',
                paddingTop: "1.5em",
                color: '#7A6263',
            }}
            >
                Password
            </Title>
            <Space direction="vertical">
                <Input.Password
                placeholder="Enter a password (ex. I@amthebest20)"
                iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                />
            </Space>
        </Card>
        <Row type="flex" justify="center" align="middle">
            <Col span={10}>
            <Button
                style={{
                    // textAlign: "center",
                    marginTop: 30,
                }}
                > <Link to="/Home">Buzz In</Link> </Button>
            </Col>
        </Row>


       </div>
    );
}

export default Login;