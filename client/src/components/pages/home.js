import React from "react";
import { Button, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
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
            Welcome
          </h1>
          <div className="searchBtnContainer">
            <h3 id="findHeader" className="mainTextH">
              Let us help you find what you need
            </h3>

            <LinkContainer to={"/brand-search"}>
              <Button
                sm="true"
                id="findBB"
                // eslint-disable-next-line react/jsx-no-duplicate-props
                className="searchBtn"
                size="lg"
              >
                Find By Brand
              </Button>
            </LinkContainer>

            <LinkContainer to={"/catergory-search"}>
              <Button
                sm="true"
                id="findBC"
                className="searchBtn"
                variant="primary"
                size="lg"
                use
              >
                Find By Catergory
              </Button>
            </LinkContainer>

            <LinkContainer to={"/color-search"}>
              <Button
                sm="true"
                id="findBColor"
                className="searchBtn"
                variant="primary"
                size="lg"
                use
              >
                Find By Colour
              </Button>
            </LinkContainer>

            <LinkContainer to={"/all-products"}>
              <Button
                sm="true"
                id="findAll"
                className="searchBtn"
                variant="primary"
                size="lg"
              >
                Find All
              </Button>
            </LinkContainer>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Home;
