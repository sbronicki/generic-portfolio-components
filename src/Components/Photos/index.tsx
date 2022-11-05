import React from "react";

interface PhotoProps {
  title: string;
  description?: string;
  photos: Batch[];
}

interface Batch {
  photos: Photo[];
  title?: string;
  description?: string;
  default?: boolean;
}

interface Photo {
  img: string;
}

const Photos = ({ title, description, photos }: PhotoProps) => {
  console.log({ title, description, photos });
  return <>PHOTOS</>;
};

export default Photos;
