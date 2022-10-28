import React from "react";

import { Col, Row, Image, Typography, Divider } from "antd";

const { Text, Title } = Typography;

interface SectionProps {
  img?: { img: string; left: boolean };
  title: string;
  icon?: React.ReactNode;
  content: string | React.ReactNode;
  navId?: string;
}

const Section = ({ img, title, content, icon, navId }: SectionProps) => {
  return (
    <Row
      id={navId}
      className={`section-row`}
      style={{ flexDirection: img?.left ? "row" : "row-reverse" }}
    >
      {img && (
        <Col span={12}>
          <Image src={img?.img} preview={false} />
        </Col>
      )}
      <Col span={img ? 12 : 24}>
        <Title level={4}>
          {icon}
          {title}
        </Title>
        <Divider />
        <Text>{content}</Text>
      </Col>
    </Row>
  );
};

export default Section;
