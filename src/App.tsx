import React, { CSSProperties, ReactNode } from "react";

import Hero from "./Components/Hero";
import Nav from "./Components/Nav";

import {
  BookOutlined,
  HomeOutlined,
  UserOutlined,
  VideoCameraAddOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";

import { Layout, Typography } from "antd";
import Section from "./Components/Section";

const { Header, Footer, Content } = Layout;
const { Text, Title } = Typography;

const TempAbout = require("./Media/img/TempAbout.jpg");
const TempActor = require("./Media/img/TempActor.jpg");
const TempAuthor = require("./Media/img/TempAuthor.jpg");

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
  section?: SectionInterface[];
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
      icon: <UserOutlined style={{ paddingRight: "7px" }} />,
      title: "About Me",
      content:
        "A love of storytelling is my life. It personifies the darkest of nights, a place of unimaginable hell, and then rising from a place of infinite unknowns the glorious dawn, the warming sun guiding me towards hope. Even though it may seem like a fantasy: Movies, theater and myth have always been my indestructible spirit. My parents met while acting together in a show, and before they were married I arrived on the scene. The Stage came naturally to me, I played harmonica on top of table dancing when I was three, by the time I was 6 I had a video camera and was writing stories with pictures. Though things began to turn for the worst, my father was a drug addict and my mom was always working, I became less focused and only watched movies and played video games. As times got worse my mom had enough and she divorced my dad when I was 9. I was confused but loved to hang out with my dad, we would do all the things I like, go to the movies, tell jokes, he even started teaching me guitar. Two years later he was dead. I was lost and so young didn’t understand the impact it would have on me. It made me invest deeper into movies and stories, it made me feel like times would be better, if I stayed hopeful and became a hero I’d be okay. The crazy thing is, it worked. Learning from the works of history and present tales I was able to change and believe that I can be great. It’s my goal to Inspire others, become a leader in my industry, and heal the souls of the damned. Storytelling became a part of me, and I now will make it my professional obsession to becoming a successful actor, author, producer and entrepreneur. “The impediment to action advances action. What stands in the way becomes the way.” Marcus Aurelius",
      // img: { img: TempAbout, left: true },
      navId: "about",
    },
    {
      icon: <VideoCameraAddOutlined style={{ paddingRight: "7px" }} />,
      title: "Actor",
      content:
        "Ive spent the last seven years cultivating my craft and made important strides to be a consistent, reliable, interesting , courageous, and fun actor to work with. A resume with a lot of theater I’ve recently moved to Los Angeles to break into the film buisness. I’ve gotten training from Stella Adler, learned Stanislavsky, and got a Bachelors in Acting and Playwriting from Marymount Manhattan college. I've learned from teachers from Yale, Royal Shakespear company, and Yat malgrem Technique (Drama center London). In LA I’m apart of Antaeus Theater, worked with several coaches and now have a studio I work with. Acting is in my blood, it feels like lava from a volcano filled with passion and excitement creating new land to explore. To be an actor allows me the freedom in an ironic way to find myself, Fight for myself and become a better version of myself. “The present is not potential past. Its the moment of choice and action” James Baldwin",
      img: { img: TempActor, left: false },
    },
    {
      icon: <BookOutlined style={{ paddingRight: "7px" }} />,
      title: "Author",
      content:
        "Writing has always been pushed by my mom for me to pursue. She thought I would write children’s books, but instead I chose short stories and plays. For a long time I had not written anything because I was acting so much. Now growing as an artist I know I must adapt in synergy with my writing to explore my imagination in ways that challenges me. I've written over six different kind of plays. Two T.V. Pilots, a Feature screenplay, dozens of short films and a Novel. Writing is a way for me to explore my imagination and stretch my creative abilities. “If one advances confidently in the direction of his dreams and endures to live the life that he has imagined, he will meet with a success unexpected in common hours. “ Henry David Thoreau",
      img: { img: TempAuthor, left: true },
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
                navId={sect.navId}
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
interface SectionInterface {
  img?: { img: string; left: boolean };
  title: string;
  icon?: React.ReactNode;
  content: string | React.ReactNode;
  navId?: string;
}
