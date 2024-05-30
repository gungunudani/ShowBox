import React from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <div className="flex-container">
            <div>
              <h1 className="heading">ShowBox</h1>
            </div>
            <div>
              <h2 className="HomePageTitle">Welcome To Home Page</h2>
            </div>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <button
                    title="Click here"
                    onClick={() => {
                      navigate("/Signup");
                    }}
                  >
                    Signup
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    title="Click here"
                    onClick={() => {
                      navigate("/login");
                    }}
                  >
                    Log In
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
