import React from "react";
import Hero from "./Components/Hero";

import { Layout } from "antd";
import { Nav } from "./Components/Nav/Nav";
const { Header, Footer, Content } = Layout;

const App: React.FC = () => {
  const navItems = ["Home", "About", "Skills", "Education", "Contact"];
  return (
    <div className="App">
      <Layout>
        <Header>
          <Nav navItems={navItems} />
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
