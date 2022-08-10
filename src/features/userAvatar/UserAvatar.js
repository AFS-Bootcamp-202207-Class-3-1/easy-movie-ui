import {UserOutlined, DownOutlined, SnippetsOutlined, LoginOutlined, LockOutlined} from "@ant-design/icons";
import {Avatar, Button, Dropdown, Form, Input, Menu, Modal} from "antd";
import {useSelector} from 'react-redux'

import "./UserAvatar.css";
import {useState} from "react";

const UserAvatar = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };
    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };
  const menu = (
    <Menu
      items={[
        {
          key: '0',
          label: (
            <span className="user-avatar-dropdown-item info">
             <strong>{useSelector(state=>state.userInfo.username)}</strong>
            </span>
          ),
        },
        {
          key: '1',
          label: (
            <a target="" href="/personal" className="user-avatar-dropdown-item">
              <UserOutlined />Personal Information
            </a>
          ),
        },
        {
          key: '2',
          label: (
            <a target="" href="/orderHistory" className="user-avatar-dropdown-item">
              <SnippetsOutlined />My Order
            </a>
          ),
        },
          {
              key: '3',
              label: (
                  <span onClick={showModal} className="user-avatar-dropdown-item">
                      <LoginOutlined />Login
                  </span>
              ),
          }
      ]}
    />
  );

  return (
    <div className="user-avatar">
      <Dropdown overlay={menu} placement="bottomRight">
      <span className="user-avatar-a" href="" onClick={e => e.preventDefault()}>
        <Avatar className="avatar" size={35} icon={<UserOutlined />} src={<img alt="avatar" src={useSelector(state=>state?.userInfo?.avatar)}></img>}/> <DownOutlined/>
      </span>
      </Dropdown>
        <Modal className="user-avatar-modal" visible={isModalVisible} onCancel={handleCancel} footer={null}>
            <div className="login">
                <div className="user-avatar-modal-box">
                    <img className="user-avatar-modal-box-logo" src="/EasyMovie.png" alt="logo"/>
                    <h3 style={{fontWeight:"bold"}}>欢迎登录</h3>
                    <p>欢迎使用EasyMovie在线订票平台</p>
                </div>
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Username!',
                            },
                        ]}
                    >
                        <Input size="large" prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Password!',
                            },
                        ]}
                    >
                        <Input
                            size="large"
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Password"
                        />
                    </Form.Item>
                    <Form.Item>
                        <a className="login-form-register" href="">
                            No Account？
                        </a>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Log in
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </Modal>
    </div>

  );
};

export default UserAvatar;
