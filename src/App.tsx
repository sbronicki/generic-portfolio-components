import React, { CSSProperties } from "react";
import Hero from "./Components/Hero";
import type { MenuTheme } from "antd";
import Icon, { HomeOutlined } from "@ant-design/icons";
import { Layout } from "antd";
import { Nav } from "./Components/Nav";
const { Header, Footer, Content } = Layout;

interface config {
  // general: {
  //   theme: "";
  //   // order?
  // };
  nav: {
    label?: string;
    icon?: React.ReactNode;
    items: [{ name: string; to: string; icon?: React.ReactNode }];
    theme?: MenuTheme;
    style?: CSSProperties;
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
  // hero: {
  //   img: "./media/hero";
  //   leftCenter: "";
  //   centerCenter: "";
  //   rightCenter: "";
  //   // grid etc takes in text, img or vid
  // };
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
    theme: "dark",
  },
};

const App: React.FC = () => {
  return (
    <div className="App">
      <Layout>
        <Header>
          <Nav theme={appConfig.nav.theme} items={appConfig.nav.items} />
        </Header>
        {/* <Content>
          <Hero />
        </Content>
        <Footer>Footer</Footer> */}
      </Layout>
    </div>
  );
};

export default App;
