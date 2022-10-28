import React, { CSSProperties, ReactNode } from "react";

import Hero from "./Components/Hero";
import Nav from "./Components/Nav";

import { HomeOutlined, VideoCameraOutlined } from "@ant-design/icons";

import { Layout, Typography } from "antd";
import Section from "./Components/Section";
const { Header, Footer, Content } = Layout;
const TempAbout = require("./Media/img/TempAbout.jpg");
const { Text, Title } = Typography;

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
  section?: Section[];
  // contact: {
  //   img: { img: "./media/titleImg"; left: boolean };
  //   text1: { size: ""; value: "" };
  //   text2: { size: ""; value: "" };
  //   text3: { size: ""; value: "" };
  //   name: { required: boolean; show: boolean };
  //   email: { required: boolean; show: boolean };
  //   phone: { required: boolean; show: boolean };
  //   message: { required: boolean; show: boolean };
  // };
  // footer: { text1: ""; text2: ""; links: []; icons: [] };
  hero: {
    centerCenter?: React.ReactNode | string;
    rightBottom?: React.ReactNode | string;
    // grid etc takes in text, img or vid
  };
  // photos: [];
  // reels: [];
}

// modeling after ajp site for development
// css exceptions so far: hero img, nav item bg color, nav label/icon color
// search("config") in css
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
    icon: <VideoCameraOutlined />,
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
      title: "About Me",
      content:
        "A love of storytelling is my life. It personifies the darkest of nights, a place of unimaginable hell, and then rising from a place of infinite unknowns the glorious dawn, the warming sun guiding me towards hope. Even though it may seem like a fantasy: Movies, theater and myth have always been my indestructible spirit. My parents met while acting together in a show, and before they were married I arrived on the scene. The Stage came naturally to me, I played harmonica on top of table dancing when I was three, by the time I was 6 I had a video camera and was writing stories with pictures. Though things began to turn for the worst, my father was a drug addict and my mom was always working, I became less focused and only watched movies and played video games. As times got worse my mom had enough and she divorced my dad when I was 9. I was confused but loved to hang out with my dad, we would do all the things I like, go to the movies, tell jokes, he even started teaching me guitar. Two years later he was dead. I was lost and so young didn’t understand the impact it would have on me. It made me invest deeper into movies and stories, it made me feel like times would be better, if I stayed hopeful and became a hero I’d be okay. The crazy thing is, it worked. Learning from the works of history and present tales I was able to change and believe that I can be great. It’s my goal to Inspire others, become a leader in my industry, and heal the souls of the damned. Storytelling became a part of me, and I now will make it my professional obsession to becoming a successful actor, author, producer and entrepreneur. “The impediment to action advances action. What stands in the way becomes the way.” Marcus Aurelius",
      img: { img: TempAbout, left: true },
    },
  ],
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
              />
            ))}
        </Content>
        {/* <Footer>Footer</Footer> */}
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
interface Section {
  img?: { img: string; left: boolean };
  title: string;
  icon?: React.ReactNode;
  content: string | React.ReactNode;
}
