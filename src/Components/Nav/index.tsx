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

const Nav = ({ items, color, label, icon }: NavProps) => {
  const [top, setTop] = useState("top");

  useEffect(() => {
    const onScroll = () =>
      window.pageYOffset > 200 ? setTop("") : setTop("top");

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [top]);
  return (
    <Menu
      disabledOverflow={true}
      defaultSelectedKeys={[items[0].to]}
      className={`nav ${top}`}
      mode="horizontal"
      style={{
        width: "100%",
        backgroundColor: color.background + " !important", // this gets ignored for some reason
        color: color.text,
        display: "flex",
        justifyContent: label || icon ? "space-between" : "center",
      }}
    >
      {(label || icon) && (
        <span>
          <Menu.Item key="label" className="nav-item nav-label" icon={icon}>
            {label}
          </Menu.Item>
        </span>
      )}
      <span style={{ display: "flex" }}>
        {items.map((item) => (
          <Menu.Item className="nav-item" key={item.name} icon={item.icon}>
            <a href={item.to}>
              <span style={{ color: color.text }}>{item.name}</span>
            </a>
          </Menu.Item>
        ))}
      </span>
    </Menu>
  );
};

export default Nav;
