import React from "react";
import { Button } from "react-bootstrap";
import { Helmet } from "react-helmet";
import "../../styles/pagesCSS/pages.css";
import Container from "react-bootstrap/Container";

function Home({ currentPage, handlePageChange }) {
  return (
    <Container>
      <div>
        <Helmet>
          <title>Home</title>
        </Helmet>
      </div>
      <div className="homeContainer">
        <div>
          <h1 id="welcomeHeader">Welcome, UserName</h1>
          <div className="searchBtnContainer">
            <h3 id="findHeader">Let us help you find what you need</h3>
            <Button
              href="#brand"
              sm="true"
              id="findBB"
              // eslint-disable-next-line react/jsx-no-duplicate-props
              className="searchBtn"
              variant="primary"
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
              id="findA"
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
