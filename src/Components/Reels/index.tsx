import React from "react";
import Section from "../Section";
import ReactPlayer from "react-player";

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
        return <ReactPlayer url={reel.link} controls light pip />;
      })}
    </>
  );
};

interface Reel {
  title: string;
  description?: string | React.ReactNode;
  link: string;
}
