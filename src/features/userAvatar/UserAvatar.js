import {
  UserOutlined,
  DownOutlined,
  SnippetsOutlined,
  LoginOutlined,
  LockOutlined,
  PhoneOutlined
} from "@ant-design/icons";
import {
  Avatar,
  Button,
  Dropdown,
  Form,
  Input,
  Menu,
  Modal,
} from "antd";
import { useSelector } from "react-redux";

import "./UserAvatar.css";
import { useState } from "react";

const UserAvatar = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  const GoToRegister = () => {
    setIsLogin(false)
  };
  const backToLogin = () => {
    setIsLogin(true)};

  const menu = (
    <Menu
      items={[
        {
          key: "0",
          label: (
            <span className="user-avatar-dropdown-item info">
              <strong>{useSelector((state) => state.userInfo.username)}</strong>
            </span>
          ),
        },
        {
          key: "1",
          label: (
            <a target="" href="/personal" className="user-avatar-dropdown-item">
              <UserOutlined />
              Personal Information
            </a>
          ),
        },
        {
          key: "2",
          label: (
            <a
              target=""
              href="/orderHistory"
              className="user-avatar-dropdown-item"
            >
              <SnippetsOutlined />
              My Order
            </a>
          ),
        },
        {
          key: "3",
          label: (
            <div onClick={showModal} className="user-avatar-dropdown-item">
              <LoginOutlined />
              Login
            </div>
          ),
        },
      ]}
    />
  );

  return (
    <div className="user-avatar">
      <Dropdown overlay={menu} placement="bottomRight">
        <span
          className="user-avatar-a"
          href=""
          onClick={(e) => e.preventDefault()}
        >
          <Avatar
            className="avatar"
            size={35}
            icon={<UserOutlined />}
            src={
              <img
                alt="avatar"
                src={useSelector((state) => state?.userInfo?.avatar)}
              ></img>
            }
          />{" "}
          <DownOutlined />
        </span>
      </Dropdown>
      <Modal
        className="user-avatar-modal"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <div className="login" style={{ display: isLogin?'':'none' }} >
          <div className="user-avatar-modal-box">
            <img
              className="user-avatar-modal-box-logo"
              src="/EasyMovie.png"
              alt="logo"
            />
            <h3 style={{ fontWeight: "bold" }}>Welcome / Login</h3>
            <p>Welcome to EasyMovie online booking platform</p>
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
                  message: "Please input your Username!",
                },
              ]}
            >
              <Input
                size="large"
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your Password!",
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
              <Button type="link" className="login-form-register"onClick={GoToRegister}>
                No Account?
              </Button>
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Log in
              </Button>
            </Form.Item>
          </Form>
        </div>
        <div className="register" style={{ display: isLogin?'none':'' }}>
          <div className="user-avatar-modal-box">
            <img
              className="user-avatar-modal-box-logo"
              src="/EasyMovie.png"
              alt="logo"
            />
            <h3 style={{ fontWeight: "bold" }}>Register</h3>
            <p>Welcome to EasyMovie online booking platform</p>
          </div>
          <Form
            name="normal_register"
            className="login-form"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
          >
            <Form.Item
              name="register_username"
              rules={[
                {
                  required: true,
                  message: "Please input your Username!",
                },
              ]}
            >
              <Input
                size="large"
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username"
              />
            </Form.Item>
            <Form.Item
              name="register_password"
              rules={[
                {
                  required: true,
                  message: "Please input your Password!",
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
            <Form.Item
              name="register_confirm_password"
              rules={[
                {
                  required: true,
                  message: "Please input your Password!",
                },
              ]}
            >
              <Input
                size="large"
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Confirm Password"
              />
            </Form.Item>
            <Form.Item
              name="register_phoneNum"
              rules={[
                {
                  required: true,
                  message: "Please input your Telephone!",
                },
              ]}
            >
              <Input
                size="large"
                prefix={<PhoneOutlined className="site-form-item-icon" />}
                placeholder="Telephone"
              />
            </Form.Item>
            <Form.Item
            >
              <Button type="link" className="login-form-register" onClick={backToLogin}>
                Back To Login
              </Button>
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
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
