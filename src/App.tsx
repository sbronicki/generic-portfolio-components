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
import Reels from "./Components/Reels";
import Photos from "./Components/Photos";

const { Header, Content, Footer } = Layout;
const { Text, Title } = Typography;

// site images
const AboutImg = require("./Media/img/About.jpg");
const ContactImg = require("./Media/img/Contact.jpg");

// photo images
const DefaultBatch0 = require("./Media/img/white-shirt-0.JPG");
const DefaultBatch1 = require("./Media/img/white-shirt-1.JPG");
const DefaultBatch2 = require("./Media/img/white-shirt-2.JPG");
const DefaultBatch3 = require("./Media/img/white-shirt-3.JPG");
const DefaultBatch4 = require("./Media/img/white-shirt-4.JPG");
const DefaultBatch6 = require("./Media/img/white-shirt-6.JPG");
const DefaultBatch7 = require("./Media/img/white-shirt-7.JPG");
const DefaultBatch8 = require("./Media/img/white-shirt-8.JPG");
const DefaultBatch9 = require("./Media/img/white-shirt-9.JPG");
const DefaultBatch10 = require("./Media/img/white-shirt-10.JPG");
const DefaultBatch11 = require("./Media/img/white-shirt-11.jpg");
const DefaultBatch12 = require("./Media/img/white-shirt-12.JPG");
const DefaultBatch13 = require("./Media/img/white-shirt-13.JPG");
const DefaultBatch14 = require("./Media/img/white-shirt-14.JPG");
const DefaultBatch15 = require("./Media/img/white-shirt-15.JPG");
const DefaultBatch16 = require("./Media/img/white-shirt-16.JPG");
const DefaultBatch17 = require("./Media/img/white-shirt-17.JPG");
const DefaultBatch18 = require("./Media/img/white-shirt-18.JPG");
const DefaultBatch19 = require("./Media/img/white-shirt-19.JPG");
const DefaultBatch20 = require("./Media/img/white-shirt-20.JPG");
const SecondPanel0 = require("./Media/img/classy-0.JPG");
const SecondPanel1 = require("./Media/img/classy-1.JPG");
const SecondPanel2 = require("./Media/img/classy-2.JPG");
const SecondPanel3 = require("./Media/img/classy-3.JPG");
const SecondPanel4 = require("./Media/img/classy-4.JPG");
const SecondPanel5 = require("./Media/img/classy-5.JPG");
const SecondPanel6 = require("./Media/img/classy-6.JPG");
const SecondPanel7 = require("./Media/img/classy-7.JPG");
const SecondPanel8 = require("./Media/img/classy-8.JPG");
const SecondPanel9 = require("./Media/img/classy-9.JPG");
const SecondPanel10 = require("./Media/img/classy-10.JPG");
const SecondPanel12 = require("./Media/img/classy-12.JPG");
const SecondPanel13 = require("./Media/img/classy-13.JPG");
const SecondPanel14 = require("./Media/img/classy-14.JPG");
const SecondPanel15 = require("./Media/img/classy-15.JPG");
const SecondPanel16 = require("./Media/img/classy-16.JPG");
const SecondPanel17 = require("./Media/img/classy-17.JPG");
const SecondPanel18 = require("./Media/img/classy-18.jpg");
const SecondPanel19 = require("./Media/img/classy-19.JPG");
const SecondPanel20 = require("./Media/img/classy-20.JPG");
const SecondPanel21 = require("./Media/img/classy-21.JPG");
const SecondPanel22 = require("./Media/img/classy-22.JPG");
const SecondPanel25 = require("./Media/img/classy-25.JPG");
const SecondPanel26 = require("./Media/img/classy-26.JPG");
const Arbor0 = require("./Media/img/arbor-0.JPG");
const Arbor1 = require("./Media/img/arbor-1.JPG");
const Arbor2 = require("./Media/img/arbor-2.JPG");
const Arbor3 = require("./Media/img/arbor-3.JPG");
const Arbor4 = require("./Media/img/arbor-4.JPG");
const Arbor5 = require("./Media/img/arbor-5.JPG");
const Arbor6 = require("./Media/img/arbor-6.JPG");
const Arbor7 = require("./Media/img/arbor-7.JPG");
const Arbor8 = require("./Media/img/arbor-8.JPG");
const Arbor9 = require("./Media/img/arbor-9.JPG");
const Arbor10 = require("./Media/img/arbor-10.JPG");
const Blue0 = require("./Media/img/blue-0.JPG");
const Blue1 = require("./Media/img/blue-1.JPG");
const Blue2 = require("./Media/img/blue-2.JPG");
const Blue3 = require("./Media/img/blue-3.JPG");

// modeling after ajp site for development
// css exceptions so far: hero img, nav item bg color, nav label/icon color
// search("config") in css

// todo:
// Duplicated key 'undefined' used in Menu nav error
// image preview starts on img you clicked
// mobile styles
// reels smaller screen text overlap video
// contact smaller screen label overlap input
// move style colors from css to config
// section hide img on mobile option

interface config {
  // general: {
  //   theme: "";
  //   // order?
  // };
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
    // grid etc takes in text, img or vid
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
      <Title
        level={3}
        style={{
          color: "#fff",
        }}
      >
        <span style={{ textAlign: "center" }}>
          Contact Email: <br /> potterjanthony@gmail.com
        </span>
      </Title>
    ),
  },
  section: [
    {
      navId: "about",
      icon: <VideoCameraOutlined style={{ paddingRight: "7px" }} />,
      title: "Actor, Writer, Producer",
      content:
        "Ive spent the last seven years cultivating my craft and made important strides to be a consistent, reliable, interesting , courageous, and fun actor to work with. A resume with a lot of theater I’ve recently moved to Los Angeles to break into the film buisness. I’ve gotten training from Stella Adler, learned Stanislavsky, and got a Bachelors in Acting and Playwriting from Marymount Manhattan college. I've learned from teachers from Yale, Royal Shakespear company, and Yat malgrem Technique (Drama center London). In LA I’m apart of Antaeus Theater, worked with several coaches and now have a studio I work with. Acting is in my blood, it feels like lava from a volcano filled with passion and excitement creating new land to explore. To be an actor allows me the freedom in an ironic way to find myself, Fight for myself and become a better version of myself. “The present is not potential past. Its the moment of choice and action” James Baldwin",
      img: { img: AboutImg, left: false },
    },
  ],
  photos: {
    title: "Photos",
    photos: [
      {
        panelHeader: "Photo Shoot Arbor",
        default: true,
        photos: [
          { img: Arbor0 },
          { img: Arbor10 },
          { img: Arbor3 },
          { img: Arbor4 },
          { img: Arbor5 },
          { img: Arbor6 },
          { img: Arbor7 },
          { img: Arbor8 },
          { img: Arbor9 },
          { img: Arbor2 },
        ],
      },
      {
        panelHeader: "Photo Shoot Alpha",
        photos: [
          { img: DefaultBatch0 },
          { img: DefaultBatch1 },
          { img: DefaultBatch2 },
          { img: DefaultBatch3 },
          { img: DefaultBatch4 },
          { img: DefaultBatch6 },
          { img: DefaultBatch7 },
          { img: DefaultBatch8 },
          { img: DefaultBatch9 },
          { img: DefaultBatch10 },
          { img: DefaultBatch11 },
          { img: DefaultBatch12 },
          { img: DefaultBatch13 },
          { img: DefaultBatch14 },
          { img: DefaultBatch15 },
          { img: DefaultBatch16 },
          { img: DefaultBatch17 },
          { img: DefaultBatch18 },
          { img: DefaultBatch19 },
          { img: DefaultBatch20 },
        ],
      },
      {
        panelHeader: "Photo Shoot Omega",
        photos: [
          { img: SecondPanel0 },
          { img: SecondPanel1 },
          { img: SecondPanel2 },
          { img: SecondPanel3 },
          { img: SecondPanel4 },
          { img: SecondPanel5 },
          { img: SecondPanel6 },
          { img: SecondPanel7 },
          { img: SecondPanel8 },
          { img: SecondPanel9 },
          { img: SecondPanel10 },
          { img: SecondPanel12 },
          { img: SecondPanel13 },
          { img: SecondPanel14 },
          { img: SecondPanel15 },
          { img: SecondPanel16 },
          { img: SecondPanel17 },
          { img: SecondPanel18 },
          { img: SecondPanel19 },
          { img: SecondPanel20 },
          { img: SecondPanel21 },
          { img: SecondPanel22 },
          { img: SecondPanel25 },
          { img: SecondPanel26 },
        ],
      },
      {
        panelHeader: "Photo Shoot Neo",
        photos: [],
      },
      {
        panelHeader: "Photo Shoot Blue",
        photos: [
          { img: Blue0 },
          { img: Blue1 },
          { img: Blue2 },
          { img: Blue3 },
        ],
      },
    ],
  },
  reels: {
    title: "Reels",
    reels: [
      {
        title: "Sergeant Danny Thomas from 'Left Behind",
        link: "https://www.youtube.com/watch?v=3GeAa100ZX4",
        description:
          "Directed by Rolando Hernandez and produced in part by Anthony Jan Potter",
      },
      {
        title: "Kirk from 'Venom Coast'",
        link: "https://www.youtube.com/watch?v=QS1vf7bK__8",
        description: "Directed by Michael Fredianelli",
      },
      {
        title: "Captain Awesome from 'How to be a Superhero'",
        link: "https://www.youtube.com/watch?v=aYucD-Lcvm4",
        description: "Written and directed by Brendan Calton",
      },
      {
        title: "Pryor Tulip from 'Golden State'",
        link: "https://www.youtube.com/watch?v=NH6_wWrTlnQ",
        description: "Written and directed by Marco Andreini",
      },
      {
        title: `"The Man" from 'Silent Hellp'`,
        link: "https://www.youtube.com/watch?v=I4PtsWSHFF4",
        description:
          "Written, directed, produced and starred by Anthony Jan Potter",
      },
    ],
  },
  contact: {
    img: {
      img: ContactImg,
      left: true,
    },
    title: "Contact",
    // message: "Fill out this form to get in touch!",
    fields: [
      { label: "Name" },
      { label: "Email" },
      { label: "Phone" },
      { label: "Message", inputType: "area" },
    ],
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
            appConfig.section.map((sect, i) => (
              <Section
                img={sect.img}
                title={sect.title}
                content={sect.content}
                icon={sect.icon}
                message={sect.message}
                navId={sect.navId}
                key={`section-${i}`}
              />
            ))}
          {appConfig.photos && (
            <Photos
              title={appConfig.photos.title}
              description={appConfig.photos.description}
              photos={appConfig.photos.photos}
            />
          )}
          {appConfig.reels && (
            <Reels
              title={appConfig.reels.title}
              reels={appConfig.reels.reels}
            />
          )}
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
