import {
    UserOutlined,
    LockOutlined
} from "@ant-design/icons";
import {
    Avatar,
    Button,
    Form,
    Input, message,
    Modal,
} from "antd";
import {useDispatch} from "react-redux";
import RegisterBox from "../../features/registerBox/RegisterBox";

import "./UserAvatar.css";
import { useState } from "react";
import {saveUserData} from "../userSlice";
import {getPurchasePointReq} from "../../api/purchasePoint";
import {savePurchasePoint} from "../purchasePointSlice";
import {login} from "../../api/user";

const LoginUserAvatar = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isLogin, setIsLogin] = useState(true);
    const dispatch = useDispatch();

    const showModal = () => {
        setIsModalVisible(true);
        setIsLogin(true)
    };
    const handleCancel = () => {
        setIsModalVisible(false);
        setIsLogin(true)
    };
    const onFinish = async (user) => {
        try {
            const res = await login(user);
            dispatch(saveUserData(res));
            localStorage.setItem("user",JSON.stringify(res))
            getPurchasePointReq(res.id).then(res => {
                dispatch(savePurchasePoint(res.balance))
            })
            message.success("login successfully!");
        }catch (error){
            message.error(error.errorMessage)
        }
    };

    const GoToRegister = () => {
        setIsLogin(false)
    };
    const backToLogin = () => {
        setIsLogin(true)
    };

    return (
        <div className="user-avatar">
            <div style={{cursor:"pointer"}} onClick={showModal}>
        <span
            className="user-avatar-a"
            onClick={(e) => e.preventDefault()}
        >
            <Avatar size={35} icon={<UserOutlined/>}/>
        </span>
            </div>
            <Modal
                className="user-avatar-modal"
                visible={isModalVisible}
                onCancel={handleCancel}
                footer={null}
            >
                <div className="login" style={{display: isLogin ? '' : 'none'}}>
                    <div className="user-avatar-modal-box">
                        <img
                            className="user-avatar-modal-box-logo"
                            src="/EasyMovie.png"
                            alt="logo"
                        />
                        <h3 style={{fontWeight: "bold"}}>Welcome / Login</h3>
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
                                prefix={<UserOutlined className="site-form-item-icon"/>}
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
                                prefix={<LockOutlined className="site-form-item-icon"/>}
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Button type="link" className="login-form-register" onClick={GoToRegister}>
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
                {
                    !isLogin ?  <RegisterBox
                        className="register"
                        onBackToLogin={backToLogin}
                    /> : <></>
                }

            </Modal>
        </div>
    );
};

export default LoginUserAvatar;
