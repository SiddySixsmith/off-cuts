import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../../styles/pages.css";
function Contact() {
  return (
    <div className="contactContainer">
      <form className="row g-3">
        <div className="col-md-6">
          <label for="firstName" className="form-label">
            First Name
          </label>
          <input
            type="input"
            placeholder="John"
            className="form-control"
            id="firstName"
          />
        </div>
        <div className="col-md-6">
          <label for="secondName" className="form-label">
            Second Name
          </label>
          <input
            type="input"
            placeholder="Smith"
            className="form-control"
            id="secondName"
          />
        </div>

        <div className="col-md-6">
          <label for="inputState" className="form-label">
            Subject
          </label>
          <select id="inputState" className="form-select">
            <option selected>Choose...</option>
            <option>Product</option>
            <option>Stock</option>
            <option>Issue</option>
            <option>Ordering</option>
          </select>
        </div>
        <div className="col-6">
          <label for="inputEmail" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="inputEmail"
            placeholder="example@email.com"
          />
        </div>
        <div className="col-md-12">
          <label for="input" class="form-label">
            Notes
          </label>
          <textarea className="form-control" id="textArea" />
        </div>

        <div className="col-12">
          <button type="submit" className="btn btn-primary searchBtn">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
