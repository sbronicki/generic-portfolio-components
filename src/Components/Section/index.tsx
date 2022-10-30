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
      align="middle"
      justify="center"
    >
      {img && (
        <Col
          style={{ padding: "3em", display: "flex", justifyContent: "center" }}
          span={12}
        >
          <Image
            style={{ maxHeight: "750px" }}
            src={img?.img}
            preview={false}
          />
        </Col>
      )}
      <Col
        style={{
          padding: img
            ? img?.left
              ? "3.5em 5em 3.5em 1em"
              : "3.5em 1em 3.5em 5em"
            : "5em 11em",
        }}
        span={img ? 12 : 24}
      >
        <Title level={4}>
          {icon}
          {title}
        </Title>
        <Divider />
        <Text>{content}</Text>
      </Col>
      <Divider />
    </Row>
  );
};

export default Section;