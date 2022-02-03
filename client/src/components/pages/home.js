import React from "react";
import { Container, Nav } from "react-bootstrap";
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

          <h3 id="findHeader" className="mainTextH">
            Let us help you find what you need
          </h3>
          <div className="searchBtnContainer">
            <LinkContainer to={"/brand-search"}>
              <Nav.Link
                sm="true"
                id="findBB"
                // eslint-disable-next-line react/jsx-no-duplicate-props
                className="searchBtn"
                size="lg"
              >
                Find By Brand
              </Nav.Link>
            </LinkContainer>

            <LinkContainer to={"/catergory-search"}>
              <Nav.Link
                sm="true"
                id="findBC"
                className="searchBtn"
                variant="primary"
                size="lg"
              >
                Find By Catergory
              </Nav.Link>
            </LinkContainer>

            <LinkContainer to={"/color-search"}>
              <Nav.Link
                sm="true"
                id="findBColor"
                className="searchBtn"
                variant="primary"
                size="lg"
              >
                Find By Colour
              </Nav.Link>
            </LinkContainer>

            <LinkContainer to={"/all-products"}>
              <Nav.Link
                sm="true"
                id="findAll"
                className="searchBtn"
                variant="primary"
                size="lg"
              >
                Find All
              </Nav.Link>
            </LinkContainer>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Home;
