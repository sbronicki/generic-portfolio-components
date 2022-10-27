import React from "react";

import { Menu } from "antd";
import type { MenuTheme } from "antd";
interface NavProps {
  label?: string;
  icon?: React.ReactNode;
  items: [{ name: string; to: string; icon?: React.ReactNode }];
  theme?: MenuTheme;
}

export const Nav = ({ items, theme }: NavProps) => {
  return (
    <Menu theme={theme} mode="horizontal">
      {items.map((item) => (
        <Menu.Item key={item.to} icon={item.icon}>
          <a href={item.to}>{item.name}</a>
        </Menu.Item>
      ))}
    </Menu>
  );
};
