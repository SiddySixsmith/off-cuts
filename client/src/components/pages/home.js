import React, { useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Button, Container } from "react-bootstrap";
import { Helmet } from "react-helmet";
import "../../styles/pages.css";

function Home() {
  return (
    <Container>
      <div>
        <Helmet>
          <title>Home</title>
        </Helmet>
      </div>
      <div className="homeContainer">
        <div>
          <h1 id="welcomeHeader" className="mainTextH">
            Welcome, UserName
          </h1>
          <div className="searchBtnContainer">
            <h3 id="findHeader" className="mainTextH">
              Let us help you find what you need
            </h3>
            <Button
              href="#brand"
              sm="true"
              id="findBB"
              // eslint-disable-next-line react/jsx-no-duplicate-props
              className="searchBtn"
              size="lg"
            >
              Find By Brand
            </Button>
            <Button
              sm="true"
              id="findBC"
              className="searchBtn"
              variant="primary"
              size="lg"
            >
              Find By Catergory
            </Button>
            <Button
              sm="true"
              id="findAll"
              className="searchBtn"
              variant="primary"
              size="lg"
            >
              Find All
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Home;
