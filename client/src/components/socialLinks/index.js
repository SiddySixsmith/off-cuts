import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../../styles/mainComponents/header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Social() {
  return (
    <div className="container">
      <div className="socialLink">
        <i class="fab fa-facebook-f"></i>
      </div>
      <div className="login"></div>
    </div>
  );
}

export default Social;
