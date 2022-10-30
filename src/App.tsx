import React, { CSSProperties, ReactNode } from "react";

import Hero from "./Components/Hero";
import Nav from "./Components/Nav";
import Section from "./Components/Section";
import FooterComponent from "./Components/Footer";

import {
  BookOutlined,
  ContactsOutlined,
  HomeOutlined,
  InstagramOutlined,
  UserOutlined,
  VideoCameraAddOutlined,
  VideoCameraOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faImdb,
  faYoutube,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import { Layout, Typography } from "antd";
import Contact from "./Components/Contact";

const { Header, Content, Footer } = Layout;
const { Text, Title } = Typography;

const TempAbout = require("./Media/img/TempAbout.jpg");
const TempActor = require("./Media/img/TempActor.jpg");
const TempAuthor = require("./Media/img/TempAuthor.jpg");
const TempContact = require("./Media/img/TempContact.jpg");

interface config {
  // general: {
  //   theme: "";
  //   // order?
  // };
  nav: {
    label?: string;
    icon?: React.ReactNode;
    items: NavItem[];
    color: { background: string; text: string };
  };
  hero: {
    centerCenter?: React.ReactNode | string;
    rightBottom?: React.ReactNode | string;
    // grid etc takes in text, img or vid
  };
  section?: SectionInterface[];
  // photos: [];
  // reels: [];
  contact: {
    img?: { img: string; left: boolean };
    title?: string;
    icon?: React.ReactNode;
    message?: string;
    fields: string[];
  };
  footer: {
    label?: string;
    items: FooterItem[];
    color: { background: string; text: string };
  };
}

// modeling after ajp site for development
// css exceptions so far: hero img, nav item bg color, nav label/icon color
// search("config") in css
// photos, <i class="fa-brands fa-imdb"></i>, reels
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
        name: "Photos",
        to: "#photos",
      },
      {
        name: "Reels",
        to: "#reels",
      },
      {
        name: "Contact",
        to: "#contact",
      },
    ],
    label: "Anthony Jan Potter",
    // icon: <VideoCameraAddOutlined />,
    color: { background: "ignored? set in css for now", text: "#fff" },
  },
  hero: {
    rightBottom: (
      <Title level={4} style={{ color: "#fff" }}>
        Contact Email: example@email.site
      </Title>
    ),
  },
  section: [
    {
      icon: <VideoCameraOutlined style={{ paddingRight: "7px" }} />,
      title: "Actor, Writer, Producer",
      content:
        "Ive spent the last seven years cultivating my craft and made important strides to be a consistent, reliable, interesting , courageous, and fun actor to work with. A resume with a lot of theater I’ve recently moved to Los Angeles to break into the film buisness. I’ve gotten training from Stella Adler, learned Stanislavsky, and got a Bachelors in Acting and Playwriting from Marymount Manhattan college. I've learned from teachers from Yale, Royal Shakespear company, and Yat malgrem Technique (Drama center London). In LA I’m apart of Antaeus Theater, worked with several coaches and now have a studio I work with. Acting is in my blood, it feels like lava from a volcano filled with passion and excitement creating new land to explore. To be an actor allows me the freedom in an ironic way to find myself, Fight for myself and become a better version of myself. “The present is not potential past. Its the moment of choice and action” James Baldwin",
      img: { img: TempActor, left: false },
    },
  ],
  contact: {
    img: {
      img: TempContact,
      left: true,
    },
    title: "Contact",
    // message: "Fill out this form to get in touch!",
    fields: ["Name", "Email", "Phone", "Message"],
    icon: <ContactsOutlined style={{ paddingRight: "7px" }} />,
  },
  footer: {
    label: "Copyright © 2022 AJP ENTERPRISES",
    color: {
      background: "#293477",
      text: "#fff",
    },
    items: [
      {
        to: "https://instagram.com/anthony.jan.potter",
        icon: (
          <FontAwesomeIcon style={{ fontSize: "32px" }} icon={faInstagram} />
        ),
      },
      {
        to: "https://www.imdb.com/name/nm6120771/",
        icon: <FontAwesomeIcon style={{ fontSize: "32px" }} icon={faImdb} />,
      },
      {
        to: "https://www.youtube.com/user/Pimpdaddypottz",
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
          {appConfig.section?.length &&
            appConfig.section.map((sect) => (
              <Section
                img={sect.img}
                title={sect.title}
                content={sect.content}
                icon={sect.icon}
                message={sect.message}
                navId={sect.navId}
              />
            ))}
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
