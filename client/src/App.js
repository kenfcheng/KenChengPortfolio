import React from "react";
import { Parallax } from "react-parallax";
import { ParallaxProvider } from "react-scroll-parallax";
import starsBG from "./background.jpg";
import Navbar from "../src/containers/navbar/navbar.js";
import AboutMe from "../src/containers/aboutMe/aboutMe";
import Footer from "../src/containers/footer/footer";

function App() {
  return (
    <div className="App">
      <ParallaxProvider>
        <Parallax
          bgImage={starsBG}
          bgImageAlt="starsBG"
          strength={-200}
          style={{ height: "700px" }}
        >
          {" "}
          <Navbar />
          <AboutMe />
          <Footer />
        </Parallax>
      </ParallaxProvider>
    </div>
  );
}

export default App;
