import React, { useEffect, useState } from "react";

import { Menu } from "antd";

interface NavItem {
  name: string;
  to: string;
  icon?: React.ReactNode;
}
interface NavProps {
  label?: string;
  icon?: React.ReactNode;
  items: NavItem[];
  color: { background: string; text: string };
}

const Nav = ({ items, color }: NavProps) => {
  const [top, setTop] = useState("top");

  useEffect(() => {
    const onScroll = () =>
      window.pageYOffset > 200 ? setTop("") : setTop("top");

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [top]);
  return (
    <Menu
      defaultSelectedKeys={[items[0].to]}
      className={`nav ${top}`}
      mode="horizontal"
      style={{
        backgroundColor: color.background + " !important", // this gets ignored for some reason
        color: color.text,
      }}
    >
      {items.map((item) => (
        <Menu.Item className="nav-item" key={item.to} icon={item.icon}>
          <a href={item.to}>
            <span style={{ color: color.text }}>{item.name}</span>
          </a>
        </Menu.Item>
      ))}
    </Menu>
  );
};

export default Nav;
