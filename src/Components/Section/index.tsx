import React, { useContext } from "react";

import { Col, Row, Image, Typography, Divider } from "antd";
import { MobileContext } from "../../Context/MobileContext";

const { Text, Title } = Typography;

interface SectionProps {
  img?: { img?: string; left?: boolean };
  title?: string;
  message?: string;
  icon?: React.ReactNode;
  content: string | React.ReactNode;
  navId?: string;
}

const Section = ({
  img,
  title,
  content,
  icon,
  navId,
  message,
}: SectionProps) => {
  const { isMobile } = useContext(MobileContext);

  return (
    <Row
      id={navId}
      className={`section-row`}
      style={{
        flexDirection: isMobile ? "column" : img?.left ? "row" : "row-reverse",
      }}
      align={navId === "contact" ? "top" : "middle"}
      justify="center"
    >
      {img && (
        <Col
          style={{ padding: "3em", display: "flex", justifyContent: "center" }}
          span={isMobile ? 24 : 12}
        >
          <Image
            style={{ maxHeight: "600px" }}
            src={img?.img}
            preview={false}
          />
        </Col>
      )}
      <Col
        style={{
          padding: isMobile
            ? "1em"
            : img
            ? img?.left
              ? "3.5em 5em 3.5em 1em"
              : "3.5em 1em 3.5em 5em"
            : "5em 11em",
          textAlign: isMobile ? "center" : "start",
        }}
        span={isMobile ? 24 : img ? 11 : 24}
        offset={img ? 1 : 0}
      >
        <Title
          style={{ textAlign: isMobile ? "center" : "start" }}
          level={navId === "contact" ? 2 : 1}
        >
          {icon} {title}
        </Title>
        <Text>{message}</Text>
        {(icon || title || message) && <Divider />}
        <Text>{content}</Text>
      </Col>
      <Divider />
    </Row>
  );
};

export default Section;
