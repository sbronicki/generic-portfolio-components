import React, { useContext } from "react";
import Section from "../Section";
import ReactPlayer from "react-player";
import { Col, Row, Typography } from "antd";
import { MobileContext } from "../../Context/MobileContext";

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
  const { isMobile } = useContext(MobileContext);
  return (
    <>
      {reels.map((reel: Reel, i) => {
        return (
          <Row
            style={{
              padding: isMobile ? ".25em" : "2.5em .5em",
              flexDirection: isMobile ? "column-reverse" : "row",
            }}
            key={`reel-${i}`}
          >
            <Col
              style={{ display: "flex", justifyContent: "center" }}
              span={isMobile ? "24" : "12"}
            >
              <ReactPlayer
                style={
                  isMobile
                    ? { maxHeight: "180px", maxWidth: "320px" }
                    : { maxHeight: "360px", maxWidth: "640px" }
                }
                width="100%"
                url={reel.link}
                controls
                light
                pip
              />
            </Col>
            <Col
              span={isMobile ? "24" : "12"}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                padding: isMobile ? "1.5em" : "2em 0em 2em 1em",
              }}
            >
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
