import React from "react";

import Section from "../Section";

interface ContactProps {
  img?: { img: string; left: boolean };
  title?: string;
  icon?: React.ReactNode;
  message?: string;
  navId?: string;
  fields: string[];
}

const Contact = ({ img, title, icon, message, fields }: ContactProps) => {
  return (
    <Section
      icon={icon}
      navId="contact"
      title={title}
      content={<ContactForm fields={fields} />}
      message={message}
      img={{ img: img?.img, left: img?.left }}
    />
  );
};

export default Contact;

interface FormProps {
  fields: string[];
}
const ContactForm = ({ fields }: FormProps) => {
  return <>CONTACT FORM</>;
};
