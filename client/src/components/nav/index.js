/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../../styles/mainComponents/nav.css";

function Navigation({ currentPage, handlePageChange }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a
          href="#home"
          onClick={() => handlePageChange("Home")}
          className={currentPage === "Home" ? "nav-link active" : "nav-link"}
        >
          <h6>Home</h6>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                href="#AboutUs"
                onClick={() => handlePageChange("AboutUs")}
                className={
                  currentPage === "AboutUs" ? "nav-link active" : "nav-link"
                }
              >
                <h6>About Us</h6>
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#Contact"
                onClick={() => handlePageChange("Contact")}
                className={
                  currentPage === "Contact" ? "nav-link active" : "nav-link"
                }
              >
                <h6>Contact Us</h6>
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#Cart"
                onClick={() => handlePageChange("Cart")}
                className={
                  currentPage === "Cart" ? "nav-link active" : "nav-link"
                }
              >
                <h6>Cart</h6>
              </a>
            </li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
