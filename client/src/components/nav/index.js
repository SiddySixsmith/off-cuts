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
} from "react-bootstrap";
import Auth from "../../utils/auth"





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

            {
              Auth.loggedIn() ? (
                <>

                  <LinkContainer to={"/profile"}>
                    <Nav.Link>
                      <p className="navText">Profile</p>
                    </Nav.Link>
                  </LinkContainer>
                  <LinkContainer to={"/"}>
                    <Nav.Link className="navText" onClick={Auth.logout}>
                      Logout
                    </Nav.Link>
                  </LinkContainer>
                </>
              ) : (
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
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
