import {
  HomeOutlined,
  VideoCameraOutlined,
  ShopOutlined,
} from "@ant-design/icons";
import { useEffect, useState } from "react";
import { Menu } from "antd";
import { useNavigate, useLocation } from "react-router-dom";

export const items = [
  {
    label: "HOME",
    key: "/",
    icon: <HomeOutlined />,
  },
  {
    label: "MOVIE",
    key: "/movie",
    icon: <VideoCameraOutlined />,
  },
  {
    label: "THEATER",
    key: "/theater",
    icon: <ShopOutlined />,
  },
];

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [current, setCurrent] = useState(location.pathname);

  const toSelectedPage = ({ key }) => {
    navigate(key);
  };

  useEffect(() => {
    setCurrent(location.pathname);
  }, [location.pathname]);
  
  return (
    <Menu
      style={{
        width: "100%",
      }}
      onClick={toSelectedPage}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  );
};

export default Navbar;
