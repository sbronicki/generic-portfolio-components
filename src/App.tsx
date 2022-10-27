import React, { CSSProperties } from "react";

import Hero from "./Components/Hero";
import Nav from "./Components/Nav";

import { HomeOutlined } from "@ant-design/icons";

import { Layout } from "antd";
const { Header, Footer, Content } = Layout;
const heroImg = require("./Media/img/Hero.png");

interface config {
  // general: {
  //   theme: "";
  //   // order?
  // };
  nav: {
    label?: string;
    icon?: React.ReactNode;
    items: [{ name: string; to: string; icon?: React.ReactNode }];
    color: { background: string; text: string };
  };
  // section: {
  //   img: { img: "./media/titleImg"; left: boolean };
  //   items: [{ title: ""; icon: ""; content: "" }];
  // };
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
  // education: {
  //   img: { img: "./media/titleImg"; left: boolean };
  //   data: [
  //     {
  //       attended: { start: ""; end: "" };
  //       award: [{}];
  //       club: [{}];
  //       degree: [{ level: ""; field: "" }];
  //       gpa: "";
  //       school: "";
  //       team: [{}];
  //     }
  //   ];
  // };
  // footer: { text1: ""; text2: ""; links: []; icons: [] };
  hero: {
    img: string; // link | file path
    centerCenter?: React.ReactNode | string;
    rightBottom?: React.ReactNode | string;
    // grid etc takes in text, img or vid
  };
  // photos: [];
  // reels: [];
}

const appConfig: config = {
  nav: {
    items: [
      {
        name: "Home",
        to: "#home",
        icon: <HomeOutlined />,
      },
    ],
    color: { background: "ignored? set in css for now", text: "#fff" },
  },
  hero: {
    img: heroImg,
    rightBottom: <>right bottom</>,
  },
};

const App: React.FC = () => {
  return (
    <div className="App">
      <Layout>
        <Header className="nav-hero-container">
          <Nav color={appConfig.nav.color} items={appConfig.nav.items} />
          <Hero
            img={appConfig.hero.img}
            rightBottom={appConfig.hero.rightBottom}
          />
        </Header>
        {/* <Content></Content> */}
        {/* <Footer>Footer</Footer> */}
      </Layout>
    </div>
  );
};

export default App;
