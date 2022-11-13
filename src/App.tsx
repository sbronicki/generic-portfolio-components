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
const DefaultBatch0 = require("./Media/img/white-shirt-0.jpg");
const DefaultBatch1 = require("./Media/img/white-shirt-1.jpg");
const DefaultBatch2 = require("./Media/img/white-shirt-2.jpg");
const DefaultBatch3 = require("./Media/img/white-shirt-3.jpg");
const DefaultBatch4 = require("./Media/img/white-shirt-4.jpg");
const DefaultBatch6 = require("./Media/img/white-shirt-6.jpg");
const DefaultBatch7 = require("./Media/img/white-shirt-7.jpg");
const DefaultBatch8 = require("./Media/img/white-shirt-8.jpg");
const DefaultBatch9 = require("./Media/img/white-shirt-9.jpg");
const DefaultBatch10 = require("./Media/img/white-shirt-10.jpg");
const DefaultBatch11 = require("./Media/img/white-shirt-11.jpg");
const DefaultBatch12 = require("./Media/img/white-shirt-12.jpg");
const DefaultBatch13 = require("./Media/img/white-shirt-13.jpg");
const DefaultBatch14 = require("./Media/img/white-shirt-14.jpg");
const DefaultBatch15 = require("./Media/img/white-shirt-15.jpg");
const DefaultBatch16 = require("./Media/img/white-shirt-16.jpg");
const DefaultBatch17 = require("./Media/img/white-shirt-17.jpg");
const DefaultBatch18 = require("./Media/img/white-shirt-18.jpg");
const DefaultBatch19 = require("./Media/img/white-shirt-19.jpg");
const DefaultBatch20 = require("./Media/img/white-shirt-20.jpg");
const SecondPanel0 = require("./Media/img/classy-0.jpg");
const SecondPanel1 = require("./Media/img/classy-1.jpg");
const SecondPanel2 = require("./Media/img/classy-2.jpg");
const SecondPanel3 = require("./Media/img/classy-3.jpg");
const SecondPanel4 = require("./Media/img/classy-4.jpg");
const SecondPanel5 = require("./Media/img/classy-5.jpg");
const SecondPanel6 = require("./Media/img/classy-6.jpg");
const SecondPanel7 = require("./Media/img/classy-7.jpg");
const SecondPanel8 = require("./Media/img/classy-8.jpg");
const SecondPanel9 = require("./Media/img/classy-9.jpg");
const SecondPanel10 = require("./Media/img/classy-10.jpg");
const SecondPanel12 = require("./Media/img/classy-12.jpg");
const SecondPanel13 = require("./Media/img/classy-13.jpg");
const SecondPanel14 = require("./Media/img/classy-14.jpg");
const SecondPanel15 = require("./Media/img/classy-15.jpg");
const SecondPanel16 = require("./Media/img/classy-16.jpg");
const SecondPanel17 = require("./Media/img/classy-17.jpg");
const SecondPanel18 = require("./Media/img/classy-18.jpg");
const SecondPanel19 = require("./Media/img/classy-19.jpg");
const SecondPanel20 = require("./Media/img/classy-20.jpg");
const SecondPanel21 = require("./Media/img/classy-21.jpg");
const SecondPanel22 = require("./Media/img/classy-22.jpg");
const SecondPanel25 = require("./Media/img/classy-25.jpg");
const SecondPanel26 = require("./Media/img/classy-26.jpg");
const Arbor0 = require("./Media/img/arbor-0.jpg");
const Arbor1 = require("./Media/img/arbor-1.jpg");
const Arbor2 = require("./Media/img/arbor-2.jpg");
const Arbor3 = require("./Media/img/arbor-3.jpg");
const Arbor4 = require("./Media/img/arbor-4.jpg");
const Arbor5 = require("./Media/img/arbor-5.jpg");
const Arbor6 = require("./Media/img/arbor-6.jpg");
const Arbor7 = require("./Media/img/arbor-7.jpg");
const Arbor8 = require("./Media/img/arbor-8.jpg");
const Arbor9 = require("./Media/img/arbor-9.jpg");
const Arbor10 = require("./Media/img/arbor-10.jpg");
const Blue0 = require("./Media/img/blue-0.jpg");
const Blue1 = require("./Media/img/blue-1.jpg");
const Blue2 = require("./Media/img/blue-2.jpg");
const Blue3 = require("./Media/img/blue-3.jpg");
const Neo0 = require("./Media/img/neo-0.jpg");
const Neo1 = require("./Media/img/neo-1.jpg");
const Neo2 = require("./Media/img/neo-2.jpg");
const Neo3 = require("./Media/img/neo-3.jpg");
const Neo4 = require("./Media/img/neo-4.jpg");
const Neo5 = require("./Media/img/neo-5.jpg");
const Neo7 = require("./Media/img/neo-7.jpg");
const Neo8 = require("./Media/img/neo-8.jpg");
const Neo9 = require("./Media/img/neo-9.jpg");
const Neo10 = require("./Media/img/neo-10.jpg");
const Neo11 = require("./Media/img/neo-11.jpg");
const Neo13 = require("./Media/img/neo-13.jpg");
const Neo14 = require("./Media/img/neo-14.jpg");
const Neo15 = require("./Media/img/neo-15.jpg");
const Neo16 = require("./Media/img/neo-16.jpg");
const Neo17 = require("./Media/img/neo-17.jpg");
const Neo18 = require("./Media/img/neo-18.jpg");
const Neo19 = require("./Media/img/neo-19.jpg");
const Neo20 = require("./Media/img/neo-20.jpg");
const Neo21 = require("./Media/img/neo-21.jpg");

// modeling after ajp site for development
// css exceptions so far: hero img, nav item bg color, nav label/icon color
// search("config") in css

// todo:
// photo stretching on smaller screens
// reels smaller screen text overlap video
// contact smaller screen label overlap input
// add photo shoot neo pics

// Duplicated key 'undefined' used in Menu nav error
// image preview starts on img you clicked
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
          { img: Arbor1 },
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
        photos: [
          { img: Neo0 },
          { img: Neo1 },
          { img: Neo2 },
          { img: Neo3 },
          { img: Neo4 },
          { img: Neo5 },
          { img: Neo7 },
          { img: Neo8 },
          { img: Neo9 },
          { img: Neo10 },
          { img: Neo11 },
          { img: Neo13 },
          { img: Neo14 },
          { img: Neo15 },
          { img: Neo16 },
          { img: Neo17 },
          { img: Neo18 },
          { img: Neo19 },
          { img: Neo20 },
          { img: Neo21 },
        ],
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
