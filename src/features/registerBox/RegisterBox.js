import { UserOutlined, LockOutlined, PhoneOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Form, Input, message } from "antd";

import { registerReq } from "../../api/user";

const RegisterBox = (props) => {
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    try {
      if (values.register_password !== values.register_confirm_password) {
        return message.error("The password and confirm password are different");
      }
      // 调用注册接口
      const reqBody = {
        username: values.register_username,
        password: values.register_password,
        phoneNumber: values.register_phoneNum,
        email: values.register_email
      };
      const res = await registerReq(reqBody);
      form.resetFields();
      message.success(res.data);
      backToLogin();
    } catch (error) {
      message.error(error.errorMessage);
    }
  };

  const backToLogin = () => {
    // 调用
    props.onBackToLogin();
  };

  return (
    <div className="register">
      <div className="user-avatar-modal-box">
        <img
          className="user-avatar-modal-box-logo"
          src="/EasyMovie.png"
          alt="logo"
        />
        <h1 style={{ fontWeight: "bold" }}>Register</h1>
      </div>
      <Form
        form={form}
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
            type="tel"
          />
        </Form.Item>
        <Form.Item
          name="register_email"
          rules={[
            {
              required: true,
              message: "Please input your Telephone!",
            },
          ]}
        >
          <Input
            size="large"
            prefix={<MailOutlined className="site-form-item-icon" />}
            placeholder="E-mail"
            type="email"
          />
        </Form.Item>
        <Form.Item>
          <Button
            type="link"
            className="login-form-register"
            onClick={backToLogin}
          >
            Back To Login
          </Button>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Register
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default RegisterBox;
