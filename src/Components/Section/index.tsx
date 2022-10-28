import React from "react";

import { Col, Row, Image } from "antd";

interface SectionProps {
  img?: { img: string; left: boolean };
  title: string;
  icon?: React.ReactNode;
  content: string | React.ReactNode;
}

const Section = ({ img, title, content, icon }: SectionProps) => {
  return (
    <Row
      className={`section-row`}
      style={{ flexDirection: img?.left ? "row" : "row-reverse" }}
    >
      {img && (
        <Col span={12}>
          <Image src={img?.img} preview={false} />
        </Col>
      )}
      <Col span={img ? 12 : 24}></Col>
    </Row>
  );
};

export default Section;
