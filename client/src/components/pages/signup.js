import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import "../../styles/pages.css";
import "bootstrap/dist/css/bootstrap.css";

function Signup() {
  return (
    <div className="LoginContainer">
      <div>
        {/* {data ? (
          <p>
            Success! You may now head <Link to="/">back to the homepage.</Link>
          </p>
        ) : ( */}
        <Form onSubmit={handleFormSubmit} className="row g-3 form">
          <div className="col-md-3 inputFormLogin">
            <label className="form-label">Email</label>
            <input
              id="Email"
              className="form-control"
              placeholder="Your email"
              name="email"
              type="email"
              value={formState.email}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-3 inputFormLogin">
            <label className="form-label">Password</label>
            <input
              id="password"
              className="form-control "
              placeholder="******"
              name="password"
              type="password"
              value={formState.password}
              onChange={handleChange}
            />
          </div>
          <Button
            href="#login"
            sm="true"
            id="loginSubmit"
            className="searchBtn"
            variant="primary"
            size="lg"
          >
            Submit
          </Button>
        </Form>
        {/* )} */}

        {/* {error && (
          <div className="my-3 p-3 bg-danger text-white">{error.message}</div>
        )} */}
      </div>
    </div>
  );
}

export default Signup;
