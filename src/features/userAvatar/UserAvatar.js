import { UserOutlined, DownOutlined,SnippetsOutlined } from "@ant-design/icons";
import { Avatar,Dropdown, Menu } from "antd";
import {useSelector} from 'react-redux'

import "./UserAvatar.css";

const UserAvatar = () => {

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
    </div>
  );
};

export default UserAvatar;
