import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../../styles/pages/contact.css";
function Contact() {
  return (
    <>
      <div className="contactContainer">
        <form class="row g-3">
          <div class="col-md-6">
            <label for="firstName" class="form-label">
              First Name
            </label>
            <input type="input" class="form-control" id="firstName" />
          </div>
          <div class="col-md-6">
            <label for="secondName" class="form-label">
              Second Name
            </label>
            <input type="input" class="form-control" id="secondName" />
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
          <div class="col-md-4">
    <label for="inputState" class="form-label">State</label>
    <select id="inputState" class="form-select">
      <option selected>Choose...</option>
      <option>...</option>
    </select>
  </div>
          <div class="col-md-6">
            <label for="inputCity" class="form-label">
              City
            </label>
            <input type="text" class="form-control" id="inputCity" />
          </div>
          <div class="col-md-4">
            <label for="inputState" class="form-label">
              State
            </label>
            <select id="inputState" class="form-select">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>
          <div class="col-md-2">
            <label for="inputZip" class="form-label">
              Zip
            </label>
            <input type="text" class="form-control" id="inputZip" />
          </div>
          <div class="col-12">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="gridCheck" />
              <label class="form-check-label" for="gridCheck">
                Check me out
              </label>
            </div>
          </div>
          <div class="col-12">
            <button type="submit" class="btn btn-primary">
              Sign in
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Contact;
