import {
  UserOutlined,
  DownOutlined,
  SnippetsOutlined,
  LoginOutlined,
  LockOutlined,
  PhoneOutlined, LogoutOutlined
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
import {useDispatch, useSelector} from "react-redux";

import "./UserAvatar.css";
import { useState } from "react";
import {findUserById, findUserByUsername} from "../../api/user";
import {saveUserData} from "../userSlice";
import {getPurchasePointReq} from "../../api/purchasePoint";
import {savePurchasePoint} from "../purchasePointSlice";

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
    // const dispatch = useDispatch();
    // findUserByUsername(1).then(res=>{
    //   dispatch(saveUserData(res));
    //   getPurchasePointReq(1).then(res=>{
    //     dispatch(savePurchasePoint(res.data.balance))
    //   })
    // })
    sessionStorage.setItem("user",JSON.stringify(values));
    // console.log("Received values of form: ", values);
    console.log(JSON.parse(sessionStorage.getItem("user")));
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
    </div>
  );
};

export default UserAvatar;
