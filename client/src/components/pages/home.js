import React from "react";
import { Container, Nav, DropdownButton, Dropdown, CardGroup, Card } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Helmet } from "react-helmet";
import "../../styles/pages.css";
import { useQuery } from "@apollo/client";
import { QUERY_BRANDS } from "../../utils/queries";
import { QUERY_CATEGORIES } from "../../utils/queries";

const FindBrand = () => {
  const { loading, data } = useQuery(QUERY_BRANDS);
  const brands = data?.brands || [];

  return (
    <div>
      {brands.map((brand) => (
        <LinkContainer key={brand._id} to={`/all-products/brand/${brand.name}`}>
          <Dropdown.Item >{brand.name}</Dropdown.Item>
        </LinkContainer>
      ))}
    </div>
  );
}

const FindCatergory = () => {
  const { loading, data } = useQuery(QUERY_CATEGORIES);
  const categories = data?.categories || [];

  return (
    <div>
      {categories.map((category) => (
        <LinkContainer key={category._id} to={`/all-products/category/${category.name}`}>
          <Dropdown.Item >{category.name}</Dropdown.Item>
        </LinkContainer>
      ))}
    </div>
  );

}

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


            <DropdownButton title="Find A Category"
              sm="true"
              className="homeDropdown"
              size="lg">
              <FindCatergory />
            </DropdownButton>

            <DropdownButton title="Find A Brand"
              sm="true"
              className="homeDropdown"
              size="lg"
              drop="down">
              <FindBrand />
            </DropdownButton>

            <DropdownButton title="Find A Colour"
              sm="true"
              className="homeDropdown"
              size="lg">
              <FindBrand />
            </DropdownButton>

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
