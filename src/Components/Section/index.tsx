import React from "react";

interface SectionProps {
  img: { img: string; left: boolean };
  title: string;
  icon?: React.ReactNode;
  content: string | React.ReactNode;
}

const Section = ({ img, title, content, icon }: SectionProps) => {
  return <></>;
};

export default Section;
