import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";

const UserAvatar = () => {
  return (
    <div className="user-avatar">
      <Avatar className="avatar" size={35} icon={<UserOutlined />} />
    </div>
  );
};

export default UserAvatar;