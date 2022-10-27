import React from "react";

import { Image, Layout, Row, Col } from "antd";
const { Content } = Layout;

interface HeroProps {
  img: string;
  centerCenter?: React.ReactNode | string;
  rightBottom?: React.ReactNode | string;
}

const Hero = ({ img, centerCenter, rightBottom }: HeroProps) => {
  return (
    <Layout className="hero">
      <Content>
        <Row style={{ zIndex: 10, height: "50vh" }}>
          <Col span={8}>COL!</Col>
          <Col span={8}>COL!</Col>
          <Col span={8}>COL!</Col>
        </Row>
        <Row style={{ zIndex: 10, height: "50vh" }}>
          <Col span={8}>COL!</Col>
          <Col span={8}>COL!</Col>
          <Col span={8}>COL!</Col>
        </Row>
        <Row style={{ zIndex: 10, height: "50vh" }}>
          <Col span={8}>COL!</Col>
          <Col span={8}>COL!</Col>
          <Col span={8}>COL!</Col>
        </Row>
        <Row style={{ zIndex: 10, height: "50vh" }}>
          <Col span={8}>COL!</Col>
          <Col span={8}>COL!</Col>
          <Col span={8}>COL!</Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default Hero;
