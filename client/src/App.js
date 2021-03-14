import React from "react";
import { createGlobalStyle } from "styled-components";
import { Parallax } from "react-parallax";
// import { Parallax } from "./components/styled/styled";
import starsBG from "./img/background.jpg";
import Navbar from "../src/containers/navbar/navbar.js";
import AboutMe from "../src/containers/aboutMe/aboutMe";
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
    <Parallax className="Parallax" bgImage={starsBG}>
      <Navbar />
      <AboutMe />
      <Footer />
    </Parallax>
  </>
);

export default App;
