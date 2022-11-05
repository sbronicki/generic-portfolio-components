import { Carousel, Collapse, Image } from "antd";
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
            <Carousel>
              {batch.photos.map((photo, j) => {
                return (
                  <div>
                    <Image preview={false} key={`photo-${j}`} src={photo.img} />
                  </div>
                );
              })}
            </Carousel>
          </Panel>
        );
      })}
    </Collapse>
  );
};

export default Photos;
