import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogOutButton = () => {
    const isSignUp = localStorage.getItem("isSignUp");
    if (!isSignUp) {
      console.log("hi");
      navigate("/signup");
    } else {
      const dataStorage = localStorage.getItem("userData");
      const userData = JSON.parse(dataStorage);
      const item1 = userData.email;
      console.log(item1);
      const item2 = userData.password;
      console.log(item2);

      if (email === item1 && password === item2) {
        navigate("/movies");
        localStorage.setItem("isLogIn", true);
      } else {
        console.log("hi");
        navigate("/signup");
      }
    }
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
    console.log(email);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    console.log(password);
  };
  return (
    <div>
      <h1>Login Page</h1>
      <form className="px-4 py-3">
        <div className="form-group">
          <label htmlFor="exampleDropdownFormEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleDropdownFormEmail1"
            placeholder="email@example.com"
            onChange={handleEmail}
            value={email}
            name="email"
          />
        </div>

        <div className="form-group">
          <label htmlFor="exampleDropdownFormPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleDropdownFormPassword1"
            placeholder="Password"
            value={password}
            onChange={handlePassword}
            name="password"
          />
        </div>

        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="dropdownCheck"
          />
          <label className="form-check-label" htmlFor="dropdownCheck">
            Remember me
          </label>
        </div>
      </form>
      <button
        type="submit"
        className="btn btn-primary"
        onClick={handleLogOutButton}
      >
        Log in
      </button>
    </div>
  );
}
