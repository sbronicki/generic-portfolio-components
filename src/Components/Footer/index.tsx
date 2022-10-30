import React, { useEffect, useState } from "react";

import { Col, Menu, Row } from "antd";

interface FooterItem {
  to: string;
  icon?: React.ReactNode;
}
interface FooterProps {
  label?: string;
  items: FooterItem[];
  color: { background: string; text: string };
}

const Footer = ({ label, items, color }: FooterProps) => {
  return (
    <Row
      style={{ height: "100%", flexDirection: "column", flexFlow: "column" }}
    >
      <Col style={{ height: label ? "60%" : "100%" }}>
        <Menu
          disabledOverflow={true}
          className="footer"
          mode="horizontal"
          style={{
            backgroundColor: color.background + " !important", // this gets ignored for some reason
            color: color.text,
            display: "flex",
            justifyContent: "center",
            alignItems: label ? "flex-end" : "center",
          }}
        >
          {items.map((item, i) => {
            return (
              <Menu.Item className="footer-item" key={i}>
                <a href={item.to} target="_">
                  <span style={{ color: color.text }}>{item.icon}</span>
                </a>
              </Menu.Item>
            );
          })}
        </Menu>
      </Col>
      {label && (
        <Col
          className="footer-label"
          style={{
            display: "flex",
            background: color.background + " !important",
            color: color.text,
            alignItems: "flex-start",
            justifyContent: "center",
          }}
        >
          {label}
        </Col>
      )}
    </Row>
  );
};

export default Footer;
