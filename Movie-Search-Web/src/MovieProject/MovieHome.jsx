import React from "react";
import Header from "./Header";

export default function MovieHome() {
  return (
    <div className="HomePage">
      <div className="ButtonContainer">
        <Header />
      </div>
      <img
        className="BackgroundImage"
        src={process.env.PUBLIC_URL + "/Homepage.jpg"}
        alt="camera"
      ></img>
    </div>
  );
}
