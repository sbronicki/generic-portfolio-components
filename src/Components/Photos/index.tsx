import { Carousel, Collapse, Image, Row, Col } from "antd";
import React, { useState } from "react";
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
  index: number;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
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
          <Panel header={batch.panelHeader} key={`panel-${i}`}>
            <BatchContainer photos={batch.photos} key={`batch-${i}`} />
          </Panel>
        );
      })}
    </Collapse>
  );
};

const BatchContainer = ({ photos }: Batch) => {
  const [visible, setVisible] = useState(false);
  return (
    <Row className="batch-container">
      {photos.map((photo, i) => {
        return (
          <Col span={6}>
            <PhotoDiv index={i} src={photo.img} setVisible={setVisible} />
          </Col>
        );
      })}
      <Col style={{ display: "none" }}>
        <Image.PreviewGroup
          preview={{ visible, onVisibleChange: (vis) => setVisible(vis) }}
        >
          {photos.map((photo, i) => {
            return <Image src={photo.img} key={`batch-img-${i}`} />;
          })}
        </Image.PreviewGroup>
      </Col>
    </Row>
  );
};

const PhotoDiv = ({ index, src, setVisible }: PhotoDivProps) => {
  return (
    <div className="photo-div">
      <Image
        onClick={() => setVisible(true)}
        preview={{ visible: false }}
        className="photo-img"
        key={`photo-${index}`}
        src={src}
      />
    </div>
  );
};

export default Photos;
