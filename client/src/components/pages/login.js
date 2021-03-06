import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../../utils/mutations";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import "../../styles/pages.css";


const Login = (props) => {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
      console.log(data.user._id)
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: "",
      password: "",
    });
  };

  return (
    <div className="LoginContainer">
      <div>
        {data ? (
          <p>
            Success! You may now head <Link to={`/profile/${data.login.user._id}`}>Your Profile</Link>
          </p>
        ) : (
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

              sm="true"
              id="loginSubmit"
              className="searchBtn"
              variant="primary"
              size="lg"
              type="submit"
            >
              Submit
            </Button>
          </Form>
        )}

        {error && (
          <div className="my-3 p-3 bg-danger text-white">{error.message}</div>
        )}
      </div>
    </div>
  );

};

export default Login;
