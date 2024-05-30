import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    dateOfBirth: "",
    hobbies: [],
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const handleInputs = (e) => {
    const name = e.target.name;
    let value = e.target.value;
    if (e.target.type === "checkbox") {
      if (e.target.checked) {
        value = [...user.hobbies, value];
      } else {
        value = user.hobbies.filter((hobby) => hobby !== value);
      }
    } else if (e.target.type === "radio") {
      value = e.target.value;
    }
    setUser((prevUser) => ({ ...prevUser, [name]: value, isSignUp: true }));
    console.log("User data stored in localStorage:", user);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      user.firstName === "" ||
      user.lastName === "" ||
      user.email === "" ||
      user.password === "" ||
      user.dateOfBirth === "" ||
      user.hobbies.length === 0
    ) {
      setError(true);
    } else {
      setSubmitted(true);
      localStorage.setItem("isSignUp", true);
      localStorage.setItem("userData", JSON.stringify(user));
      navigate("/login");
    }
  };
  return (
    <div>
      <div className="form">
        <h1>User Registration</h1>
      </div>

      <form>
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text">First and last name</span>
          </div>
          <input
            type="text"
            aria-label="First name"
            className="form-control"
            onChange={handleInputs}
            value={user.firstName}
            name="firstName"
          />
          <input
            type="text"
            aria-label="Last name"
            className="form-control"
            onChange={handleInputs}
            value={user.lastName}
            name="lastName"
          />
        </div>

        <div>
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            onChange={handleInputs}
            value={user.email}
            name="email"
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            onChange={handleInputs}
            value={user.password}
            name="password"
          />
        </div>

        <div>
          <label>Date Of Birth</label>
          <input
            onChange={handleInputs}
            value={user.dateOfBirth}
            type="date"
            name="dateOfBirth"
          />
        </div>
        <hr />

        <label>Please Select Gender</label>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            id="flexRadioDefault1"
            value="Male"
            onChange={handleInputs}
            name="Gender"
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            Male
          </label>
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="Gender"
            id="flexRadioDefault2"
            value="Female"
            onChange={handleInputs}
          />
          <label className="form-check-label" htmlFor="flexRadioDefault2">
            Female
          </label>
        </div>
        <hr />

        <label>Hobbies</label>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value="Reading Books"
            id="flexCheckDefault1"
            onChange={handleInputs}
            name="hobbies"
          />
          <label className="form-check-label" htmlFor="flexCheckDefault1">
            Reading Books
          </label>
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value="Watching movies"
            id="flexCheckDefault2"
            onChange={handleInputs}
            name="hobbies"
          />
          <label className="form-check-label" htmlFor="flexCheckDefault2">
            Watching movies
          </label>
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value="Travelling"
            id="flexCheckDefault3"
            onChange={handleInputs}
            name="hobbies"
          />
          <label className="form-check-label" htmlFor="flexCheckDefault3">
            Travelling
          </label>
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Submit
        </button>
        {error && <div>error: Please fill in all the details</div>}
        {submitted && <div>User Registration Succesfull</div>}
      </form>
    </div>
  );
}
