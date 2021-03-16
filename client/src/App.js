import React from "react";
// GlobalStyle holds the background photo in place while moving all the other objects when scrolling.
import { createGlobalStyle } from "styled-components";
import { Parallax } from "react-parallax";
// import { Parallax } from "../src/components/styled/styled/styled";
// import starsBG from "./img/background.jpg";
import Navbar from "../src/containers/navbar/navbar.js";
import Header from "../src/containers/header/header";
import AboutMe from "../src/containers/aboutMe/aboutMe";
import Description from "../src/containers/description/description";
import Footer from "../src/containers/footer/footer";

import "./App.css";

const GlobalStyle = createGlobalStyle`
  html, body {
    padding: 0;
    margin: 0;
  }
  * {
    box-sizing: border-box;
  }
`;

const App = () => (
  <>
    <GlobalStyle />

    <Parallax className="container" fluid>
      <Navbar />
      <br></br>
      <Header />
      <br></br>
      <AboutMe />
      <br></br>
      <Description />
      <br></br>
      <br></br>
      <Footer />
    </Parallax>
  </>
);

export default App;
