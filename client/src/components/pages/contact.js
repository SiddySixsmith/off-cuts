import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../../styles/pagesCSS/pages.css";
function Contact() {
  return (
    <>
      <div className="contactContainer">
        <form class="row g-3">
          <div class="col-md-6">
            <label for="firstName" class="form-label">
              First Name
            </label>
            <input
              type="input"
              placeholder="John"
              class="form-control"
              id="firstName"
            />
          </div>
          <div class="col-md-6">
            <label for="secondName" class="form-label">
              Second Name
            </label>
            <input
              type="input"
              placeholder="Smith"
              class="form-control"
              id="secondName"
            />
          </div>

          <div class="col-md-6">
            <label for="inputState" class="form-label">
              Prefered Method of Contact
            </label>
            <select id="inputState" class="form-select">
              <option selected>Choose...</option>
              <option>Mobile</option>
              <option>Email</option>
            </select>
          </div>
          <div class="col-md-6">
            <label for="inputState" class="form-label">
              Subject
            </label>
            <select id="inputState" class="form-select">
              <option selected>Choose...</option>
              <option>Product</option>
              <option>Stock</option>
              <option>Issue</option>
              <option>Ordering</option>
            </select>
          </div>
          <div class="col-6">
            <label for="inputEmail" class="form-label">
              Email
            </label>
            <input
              type="email"
              class="form-control"
              id="inputEmail"
              placeholder="example@email.com"
            />
          </div>
          <div class="col-md-6">
            <label for="inputZip" class="form-label">
              Mobile
            </label>
            <input
              type="number"
              placeholder="0412312312"
              class="form-control"
              id="inputZip"
            />
          </div>

          <div class="col-12">
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Contact;
