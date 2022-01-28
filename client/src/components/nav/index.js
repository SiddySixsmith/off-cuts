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
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand
          href="#home"
          onClick={() => handlePageChange("Home")}
          className={currentPage === "Home" ? "nav-link active" : "nav-link"}
        >
          <h6>Home</h6>
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
              About Us
            </Nav.Link>
            <Nav.Link
              href="#Contact"
              onClick={() => handlePageChange("Contact")}
              className={
                currentPage === "Contact" ? "nav-link active" : "nav-link"
              }
            >
              Contact
            </Nav.Link>
            <Nav.Link
              href="#Cart"
              onClick={() => handlePageChange("Cart")}
              className={
                currentPage === "Cart" ? "nav-link active" : "nav-link"
              }
            >
              Cart
            </Nav.Link>
            <Nav.Link
              href="#login"
              onClick={() => handlePageChange("Cart")}
              className={
                currentPage === "Login" ? "nav-link active" : "nav-link"
              }
            >
              Login
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
