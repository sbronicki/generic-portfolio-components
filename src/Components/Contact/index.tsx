import { Form, Input } from "antd";
import TextArea from "antd/lib/input/TextArea";
import React from "react";

import Section from "../Section";

interface ContactProps {
  img?: { img: string; left: boolean };
  title?: string;
  icon?: React.ReactNode;
  message?: string;
  navId?: string;
  fields: Field[];
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

interface Field {
  label: string;
  inputType?: string;
}
interface FormProps {
  fields: Field[];
}
const ContactForm = ({ fields }: FormProps) => {
  return (
    <Form wrapperCol={{ span: 16 }} labelCol={{ span: 3, offset: 0 }}>
      {fields.map((field, i) => {
        return (
          <Form.Item
            name={["contact", field.label]}
            label={field.label}
            key={field.label}
          >
            {field.inputType === "area" ? <TextArea rows={4} /> : <Input />}
          </Form.Item>
        );
      })}
    </Form>
  );
};
