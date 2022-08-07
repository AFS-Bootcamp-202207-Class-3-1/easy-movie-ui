import {
  HomeOutlined,
  VideoCameraOutlined,
  ShopOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import { Menu } from "antd";

const items = [
  {
    label: "HOME",
    key: "index",
    icon: <HomeOutlined />,
  },
  {
    label: "MOVIE",
    key: "movie",
    icon: <VideoCameraOutlined />,
  },
  {
    label: "THEATER",
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
      style={{
        width: "100%",
      }}
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  );
};

export default Navbar;
