import React, { useContext } from "react";

import { Layout, Row, Col } from "antd";
import { MobileContext } from "../../Context/MobileContext";
const { Content } = Layout;

interface HeroProps {
  centerCenter?: React.ReactNode | string;
  rightBottom?: React.ReactNode | string;
}

const Hero = ({ centerCenter, rightBottom }: HeroProps) => {
  const { isMobile } = useContext(MobileContext);
  return (
    <Layout id="home" className="hero">
      <Content>
        <Row style={{ height: "30vh" }}>
          <Col className="hero-col" span={isMobile ? 24 : 8}></Col>
          <Col className="hero-col" span={isMobile ? 24 : 8}></Col>
          <Col className="hero-col" span={isMobile ? 24 : 8}></Col>
        </Row>
        <Row style={{ height: "30vh" }}>
          <Col className="hero-col" span={isMobile ? 24 : 8}></Col>
          <Col className="hero-col" span={isMobile ? 24 : 8}>
            {centerCenter}
          </Col>
          <Col className="hero-col" span={isMobile ? 24 : 8}></Col>
        </Row>
        <Row style={{ height: "30vh" }}>
          <Col className="hero-col" span={isMobile ? 24 : 6}></Col>
          <Col className="hero-col" span={isMobile ? 24 : 6}></Col>
          <Col className="hero-col" span={isMobile ? 24 : 11}>
            {rightBottom}
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default Hero;
