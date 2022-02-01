import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../../styles/mainComponents/header.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

const facebook = <FontAwesomeIcon icon={faFacebook} />;
const instagram = <FontAwesomeIcon icon={faInstagram} />;

function Social() {
  return (
    <div className="container">
      <a
        className="fab fa-facebook"
        href="https://www.facebook.com/charactercabinets/"
        target="_blank"
        rel="noreferrer"
      >
        {facebook}
      </a>
      <a
        className="fab fa-instagram"
        href="https://www.instagram.com/character_cabinets/"
        target="_blank"
        rel="noreferrer"
      >
        {instagram}
      </a>
    </div>
  );
}

export default Social;
