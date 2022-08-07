import {
  HomeOutlined,
  VideoCameraOutlined,
  ShopOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import { Menu } from "antd";

const items = [
  {
    label: "Home",
    key: "index",
    icon: <HomeOutlined />,
  },
  {
    label: "movie",
    key: "movie",
    icon: <VideoCameraOutlined />,
  },
  {
    label: "theater",
    key: "theater",
    icon: <ShopOutlined />,
  },
];

const Navbar = () => {
  const [current, setCurrent] = useState("index");

  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  );
};

export default Navbar;
