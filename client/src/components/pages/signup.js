import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button } from "react-bootstrap";
import { useMutation } from '@apollo/client';
import { ADD_PROFILE } from '../../utils/mutations';
import Auth from '../../utils/auth';
import "bootstrap/dist/css/bootstrap.css";
import "../../styles/pages.css";


const Signup = () => {
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    password: '',
  });
  const [addProfile, { error, data }] = useMutation(ADD_PROFILE);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addProfile({
        variables: { ...formState },
      });

      Auth.login(data.addProfile.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="LoginContainer">
      <div>
        {data ? (
          <p>
            Success! You may now head
            <Link to="/">back to the homepage.</Link>
          </p>
        ) : (
          <Form onSubmit={handleFormSubmit} className="row g-3 form">
            <div className="col-md-3 inputFormLogin">
              <label className="form-label">First Name</label>
              <input
                id="firstName"
                className="form-control"
                placeholder="Your First Name"
                name="firstName"
                type="input"
                value={formState.firstName}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-3 inputFormLogin">
              <label className="form-label">Last Name</label>
              <input
                id="lastName"
                className="form-control"
                placeholder="Your Last Name"
                name="lastName"
                type="input"
                value={formState.lastName}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-3 inputFormLogin">
              <label className="form-label">Phone Number</label>
              <input
                id="phoneNumber"
                className="form-control"
                placeholder="Your Phone Number"
                name="phoneNumber"
                type="number"
                value={formState.phoneNumber}
                onChange={handleChange}
              />
            </div>
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
              id="signupSubmit"
              className="searchBtn"
              variant="primary"
              size="lg"
              type='submit'
            >
              Submit
            </Button>
          </Form>
        )}

        {error && (
          <div className="my-3 p-3 bg-danger text-white">
            {error.message}
          </div>
        )}
      </div>
    </div>
  );
};

export default Signup;
