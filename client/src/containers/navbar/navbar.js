import React from "react";
// Imports FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Imports Icons
// import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "./navbar.css";

function navbar() {
  return (
    <div>
      <nav className="navbar" role="navigation">
        <a href="https://github.com/kenfcheng">
          <FontAwesomeIcon style={{ width: "35px", height: "35px" }} />
          GitHub
        </a>
      </nav>
    </div>
  );
}

export default navbar;
