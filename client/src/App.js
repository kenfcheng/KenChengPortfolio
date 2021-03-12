import React from "react";
import { Parallax } from "react-parallax";
import starsBG from "./background.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Parallax bgImage={starsBG} bgImageAlt="starsBG" strength={-200}>
        {" "}
        <div style={{ position: "absolute", height: "500px" }} />
        <p>Hello World</p>
      </Parallax>
    </div>
  );
}

export default App;
