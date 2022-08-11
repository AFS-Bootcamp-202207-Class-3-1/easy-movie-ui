import {
  UserOutlined,
  DownOutlined,
  SnippetsOutlined,
  LogoutOutlined
} from "@ant-design/icons";
import {
  Avatar,
  Dropdown,
  Menu, message,
  Modal,
} from "antd";
import {useDispatch, useSelector} from "react-redux";

import "./UserAvatar.css";
import {useState} from "react";
import {deleteUserData} from "../userSlice";
import {useNavigate} from "react-router-dom";


const UserAvatar = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.userInfo);

  const showModal = () => {
    setIsModalVisible(true);
  };
  const HandleOk = () => {
    dispatch(deleteUserData())
    setIsModalVisible(false)
    localStorage.removeItem("user");
    message.success("logout successfully!");
    navigate(`/`);
  };
  const HandleCancel = () => {
    setIsModalVisible(false);
  };

  const menu = (
    <Menu
      items={[
        {
          key: "0",
          label: (
            <span className="user-avatar-dropdown-item info">
              <strong>{user.username}</strong>
            </span>
          ),
        },
        {
          key: "1",
          label: (
            <a target="" href="/personal" className="user-avatar-dropdown-item">
              <UserOutlined/>
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
              <SnippetsOutlined/>
              My Order
            </a>
          ),
        },
        {
          key: "3",
          label: (
            <div
              className="user-avatar-dropdown-item"
              onClick={showModal}
            ><LogoutOutlined/>
              Logout
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
          onClick={(e) => e.preventDefault()}
        >
            <Avatar
              className="avatar"
              size={35}
              icon={<UserOutlined/>}
              src={user.avatar}
            />
            <DownOutlined/>
        </span>
      </Dropdown>
      <Modal
        className="user-avatar-modal"
        visible={isModalVisible}
        onOk={HandleOk}
        onCancel={HandleCancel}
        okText="Confirm"
      >
        <p style={{marginTop: "20px"}}>Are you sure logout of the current account?</p>
      </Modal>
    </div>
  );
};

export default UserAvatar;
