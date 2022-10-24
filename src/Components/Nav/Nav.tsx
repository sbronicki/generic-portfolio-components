import React from "react";
import { Menu } from "antd";

type NavProps = {
  navItems: string[];
};

export const Nav = ({ navItems }: NavProps) => {
  const items = makeItems(navItems);

  return (
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["Home"]}>
      {items.map((navItem) => (
        <Menu.Item key={navItem.key}>{navItem.label}</Menu.Item>
      ))}
    </Menu>
  );
};

const makeItems = (items: string[]) =>
  items.map((item, i) => {
    return {
      label: item,
      key: `${item.replace(" ", "-")}-${i}`,
    };
  });
