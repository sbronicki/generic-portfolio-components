import React from "react";
import Section from "../Section";
import ReactPlayer from "react-player";
import { Col, Row, Typography } from "antd";

const { Text, Title } = Typography;

interface ReelsProps {
  title?: string;
  reels: Reel[];
}

const Reels = ({ title, reels }: ReelsProps) => {
  return (
    <Section
      navId="reels"
      title={title}
      content={<VideoSection reels={reels} />}
    />
  );
};

export default Reels;

const VideoSection = ({ reels }: ReelsProps) => {
  return (
    <>
      {reels.map((reel: Reel, i) => {
        return (
          <Row style={{ padding: "2.5em" }}>
            <Col span={16}>
              <ReactPlayer url={reel.link} controls light pip />
            </Col>
            <Col style={{ paddingTop: "2em" }}>
              <Title level={3}>{reel.title}</Title>
              <Text>{reel.description}</Text>
            </Col>
          </Row>
        );
      })}
    </>
  );
};

interface Reel {
  title: string;
  description?: string | React.ReactNode;
  link: string;
}
