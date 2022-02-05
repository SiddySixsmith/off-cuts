/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../../styles/mainComponents/nav.css";
import { LinkContainer } from "react-router-bootstrap";
import {
  Navbar,
  Nav,
  Container,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import Auth from "../../utils/auth"

const HandleNavElementChange = () => {
  if (!Auth.loggedIn) {
    return (
      <>
        <LinkContainer to={"/profile"}>
          <Nav.Link>
            <p className="navText">Profile</p>
          </Nav.Link>
        </LinkContainer>
      </>
    )
  }
  else {
    return (

      <>
        <LinkContainer to={"/login"}>
          <Nav.Link>
            <p className="navText">Login</p>
          </Nav.Link>
        </LinkContainer>
        <LinkContainer to={"/signup"}>
          <Nav.Link>
            <p className="navText">Signup</p>
          </Nav.Link>
        </LinkContainer>
      </>

    )
  }
}

function Navigation() {
  return (
    <Navbar collapseOnSelect expand="lg" variant="light">
      <Container>
        <LinkContainer to={"/"}>
          <Navbar.Brand href="#home">
            <p className="navText">Home</p>
          </Navbar.Brand>
        </LinkContainer>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to={"/about"}>
              <Nav.Link>
                <p className="navText"> About Us</p>
              </Nav.Link>
            </LinkContainer>

            <LinkContainer to={"/contact"}>
              <Nav.Link>
                <p className="navText">Contact</p>
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to={"/cart"}>
              <Nav.Link>
                <p className="navText">Cart</p>
              </Nav.Link>
            </LinkContainer>

            {<HandleNavElementChange />}
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
