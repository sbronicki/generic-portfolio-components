import React, { CSSProperties, ReactNode } from "react";

import Hero from "./Components/Hero";
import Nav from "./Components/Nav";
import Section from "./Components/Section";
import FooterComponent from "./Components/Footer";

import { ContactsOutlined } from "@ant-design/icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

import { Layout, Typography } from "antd";
import Contact from "./Components/Contact";
import Reels from "./Components/Reels";
import Photos from "./Components/Photos";

const { Header, Content, Footer } = Layout;
const { Text, Title } = Typography;

// site images
const ContactImg = require("./Media/img/Contact.jpg");

// css exceptions so far: hero img, nav item bg color, nav label/icon color
// search("config") in css

// todo:
// photo stretching on smaller screens
// contact smaller screen label overlap input
// add photo shoot neo pics

// Duplicated key 'undefined' used in Menu nav error
// image preview starts on img you clicked
// move style colors from css to config
// section hide img on mobile option
interface config {
  nav: {
    label?: string;
    icon?: React.ReactNode;
    items: NavItem[];
    color: {
      background: string;
      text: string;
    };
  };
  hero: {
    centerCenter?: React.ReactNode | string;
    rightBottom?: React.ReactNode | string;
  };
  section?: SectionInterface[];
  photos?: {
    title: string;
    description?: string;
    photos: Batch[];
  };
  reels?: {
    title: string;
    reels: Reel[];
  };
  contact: {
    img?: {
      img: string;
      left: boolean;
    };
    title?: string;
    icon?: React.ReactNode;
    message?: string;
    fields: Field[];
  };
  footer: {
    label?: string;
    items: FooterItem[];
    color: { background: string; text: string };
  };
}

const appConfig: config = {
  nav: {
    items: [
      {
        name: "Home",
        to: "#home",
      },
      {
        name: "About",
        to: "#about",
      },
      {
        name: "Skills",
        to: "#skills",
      },
      {
        name: "Education",
        to: "#education",
      },
      {
        name: "Contact",
        to: "#contact",
      },
    ],
    label: "Generic Portfolio",
    // icon: <VideoCameraAddOutlined />,
    color: { background: "", text: "#fff" },
  },
  hero: {
    rightBottom: (
      <Title
        level={3}
        style={{
          color: "#fff",
        }}
      >
        <span style={{ textAlign: "center" }}>
          Contact Email: <br /> example@email.com
        </span>
      </Title>
    ),
  },
  section: [],
  contact: {
    img: {
      img: ContactImg,
      left: true,
    },
    title: "Contact",
    // message: "Fill out this form to get in touch!",
    // changes here need to also be made in index.html for Netlify bots
    fields: [
      { label: "Name" },
      { label: "Email" },
      { label: "Phone" },
      { label: "Message", inputType: "area" },
    ],
    icon: <ContactsOutlined style={{ paddingRight: "7px" }} />,
  },
  footer: {
    label: "Copyright ©",
    color: {
      background: "#293477",
      text: "#fff",
    },
    items: [
      {
        to: "https://www.youtube.com",
        icon: <FontAwesomeIcon style={{ fontSize: "32px" }} icon={faYoutube} />,
      },
    ],
  },
};

const App: React.FC = () => {
  return (
    <div className="App">
      <Layout>
        <Header className="nav-hero-container">
          <Nav
            label={appConfig.nav.label}
            icon={appConfig.nav.icon}
            color={appConfig.nav.color}
            items={appConfig.nav.items}
          />
          <Hero rightBottom={appConfig.hero.rightBottom} />
        </Header>
        <Content>
          {appConfig.section?.length
            ? appConfig.section.map((sect, i) => (
                <Section
                  img={sect.img}
                  title={sect.title}
                  content={sect.content}
                  icon={sect.icon}
                  message={sect.message}
                  navId={sect.navId}
                  key={`section-${i}`}
                />
              ))
            : null}
          {appConfig.photos ? (
            <Photos
              title={appConfig.photos.title}
              description={appConfig.photos.description}
              photos={appConfig.photos.photos}
            />
          ) : null}
          {appConfig.reels ? (
            <Reels
              title={appConfig.reels.title}
              reels={appConfig.reels.reels}
            />
          ) : null}
          <Contact
            title={appConfig.contact.title}
            icon={appConfig.contact.icon}
            message={appConfig.contact.message}
            fields={appConfig.contact.fields}
            img={appConfig.contact.img}
          />
        </Content>
        <Footer className="footer-container">
          <FooterComponent
            items={appConfig.footer.items}
            label={appConfig.footer.label}
            color={appConfig.footer.color}
          />
        </Footer>
      </Layout>
    </div>
  );
};

export default App;

interface NavItem {
  name: string;
  to: string;
  icon?: React.ReactNode;
}
interface SectionInterface {
  img?: { img: string; left: boolean };
  title: string;
  icon?: React.ReactNode;
  content: string | React.ReactNode;
  navId?: string;
  message?: string;
}
interface FooterItem {
  to: string;
  icon: React.ReactNode;
}
interface Field {
  label: string;
  inputType?: string;
}
interface Reel {
  title: string;
  description?: string | React.ReactNode;
  link: string;
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
