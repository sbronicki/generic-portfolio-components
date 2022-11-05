import { Carousel, Collapse, Image, Row, Col } from "antd";
import React from "react";
import Section from "../Section";

const { Panel } = Collapse;

interface PhotoProps {
  title: string;
  description?: string;
  photos: Batch[];
}
interface Batch {
  photos: Photo[];
  panelHeader?: string;
  description?: string;
  default?: boolean;
}
interface Photo {
  img: string;
}
interface PhotoSectionProps {
  batches: Batch[];
}

interface PhotoDivProps {
  src: string;
  key: number;
}

const Photos = ({ title, description, photos }: PhotoProps) => {
  return (
    <Section
      navId="photos"
      title={title}
      message={description}
      content={<PhotoSection batches={photos} />}
    />
  );
};

const PhotoSection = ({ batches }: PhotoSectionProps) => {
  return (
    <Collapse accordion defaultActiveKey={["batch-0"]}>
      {batches.map((batch, i) => {
        return (
          <Panel header={batch.panelHeader} key={`batch-${i}`}>
            <BatchContainer photos={batch.photos} />
          </Panel>
        );
      })}
    </Collapse>
  );
};

const BatchContainer = ({ photos }: Batch) => {
  return (
    <Row className="batch-container">
      {photos.map((photo, i) => {
        return (
          <Col>
            <PhotoDiv key={i} src={photo.img} />
          </Col>
        );
      })}
    </Row>
  );
};

const PhotoDiv = ({ key, src }: PhotoDivProps) => {
  return (
    <Row className="photo-div">
      <Col>
        <Image
          className="photo-img"
          preview={false}
          key={`photo-${key}`}
          src={src}
        />
        <h2 style={{ marginBottom: "3em", color: "#fff" }}>this is an h2</h2>
      </Col>
    </Row>
  );
};

export default Photos;
