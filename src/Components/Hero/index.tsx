import React from "react";

import { Image, Layout, Row, Col } from "antd";
const { Content } = Layout;

interface HeroProps {
  centerCenter?: React.ReactNode | string;
  rightBottom?: React.ReactNode | string;
}

const Hero = ({ centerCenter, rightBottom }: HeroProps) => {
  return (
    <Layout className="hero">
      <Content>
        <Row style={{ height: "30vh" }}>
          <Col className="hero-col" span={8}></Col>
          <Col className="hero-col" span={8}></Col>
          <Col className="hero-col" span={8}></Col>
        </Row>
        <Row style={{ height: "30vh" }}>
          <Col className="hero-col" span={8}></Col>
          <Col className="hero-col" span={8}>
            {centerCenter && centerCenter}
          </Col>
          <Col className="hero-col" span={8}></Col>
        </Row>
        <Row style={{ height: "30vh" }}>
          <Col className="hero-col" span={8}></Col>
          <Col className="hero-col" span={8}></Col>
          <Col className="hero-col" span={8}>
            {rightBottom && rightBottom}
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default Hero;
