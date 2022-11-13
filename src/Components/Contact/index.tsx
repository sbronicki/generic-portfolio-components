import { Button, Form, Input } from "antd";
import { FormInstance } from "antd/es/form/Form";
import TextArea from "antd/lib/input/TextArea";
import React, { useContext, useState } from "react";
import { Typography } from "antd";

import Section from "../Section";
import { MobileContext } from "../../Context/MobileContext";

const { Text } = Typography;
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
  const [finished, setFinished] = useState(false);
  const formRef = React.createRef<FormInstance>();
  const onClear = () => formRef.current!.resetFields();

  const encode = (data: any) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const onFinish = (values: object) => {
    const sendObj = {};
    let newKey = "";
    Object.keys(values).forEach((key, i) => {
      newKey = "contact_" + key;
      (sendObj as any)[newKey] = (values as any)[key];
    });

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...sendObj }),
    })
      .then((res) => {
        onClear();
        setFinished(true);
      })
      .catch((error) => {
        alert(error);
      });
  };

  const { isMobile } = useContext(MobileContext);

  return (
    <Form
      ref={formRef}
      wrapperCol={{ span: 16 }}
      labelCol={{ span: 3, offset: 0 }}
      onFinish={onFinish}
      name="contact"
    >
      {fields.map((field, i) => {
        return (
          <Form.Item
            rules={
              field.label === "Phone" ? [{ max: 18 }] : [{ required: true }]
            }
            name={[field.label]}
            label={field.label}
            key={field.label}
          >
            {field.inputType === "area" ? (
              <TextArea
                name={`contact_${field.label}`}
                rows={5}
                maxLength={300}
              />
            ) : (
              <Input name={`contact_${field.label}`} maxLength={50} />
            )}
          </Form.Item>
        );
      })}
      <Form.Item wrapperCol={isMobile ? {} : { offset: 8, span: 16 }}>
        <Button
          className="button"
          disabled={finished}
          type="primary"
          htmlType="submit"
        >
          Submit
        </Button>
        <Button className="button" htmlType="button" onClick={onClear}>
          Clear Form
        </Button>
      </Form.Item>
      {finished && (
        <Form.Item wrapperCol={isMobile ? {} : { offset: 8, span: 16 }}>
          {<Text>Thanks for reaching out!</Text>}
        </Form.Item>
      )}
    </Form>
  );
};
