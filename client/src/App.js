import React from "react";
import { Parallax } from "react-parallax";
import starsBG from "./background.jpg";
import Navbar from "../src/containers/navbar/navbar.js";

function App() {
  return (
    <div className="App">
      <Parallax
        bgImage={starsBG}
        bgImageAlt="starsBG"
        strength={-200}
        style={{ height: "700px" }}
      >
        {" "}
        <Navbar />
      </Parallax>
    </div>
  );
}

export default App;
