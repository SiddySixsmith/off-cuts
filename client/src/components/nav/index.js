/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../../styles/mainComponents/nav.css";
import {
  Navbar,
  Nav,
  Container,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

function Navigation({ currentPage, handlePageChange }) {
  return (
    <Navbar collapseOnSelect expand="lg" variant="light">
      <Container>
        <Navbar.Brand
          href="#home"
          onClick={() => handlePageChange("Home")}
          className={currentPage === "Home" ? "nav-link active" : "nav-link"}
        >
          <p className="navText">Home</p>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#AboutUs"
              onClick={() => handlePageChange("AboutUs")}
              className={
                currentPage === "AboutUs" ? "nav-link active" : "nav-link"
              }
            >
              <p className="navText"> About Us</p>
            </Nav.Link>
            <Nav.Link
              href="#Contact"
              onClick={() => handlePageChange("Contact")}
              className={
                currentPage === "Contact" ? "nav-link active" : "nav-link"
              }
            >
              <p className="navText">Contact</p>
            </Nav.Link>
            <Nav.Link
              href="#Cart"
              onClick={() => handlePageChange("Cart")}
              className={
                currentPage === "Cart" ? "nav-link active" : "nav-link"
              }
            >
              <p className="navText">Cart</p>
            </Nav.Link>
            <Nav.Link
              href="#Login"
              onClick={() => handlePageChange("Login")}
              className={
                currentPage === "Login" ? "nav-link active" : "nav-link"
              }
            >
              <p className="navText">Login</p>
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success" id="mainSeatchBtn">
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
