import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Movies from "./MovieProject/Movies";
import MovieHome from "./MovieProject/MovieHome";
import SingleMovie from "./MovieProject/SingleMovie";
import Login from "./MovieProject/Login";
import Signup from "./MovieProject/Signup";
import "./index.css";
import AuthRoute from "./utils/AuthRoute";
import SignUpNew from "./MovieProject/signupNew";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MovieHome />}></Route>

            <Route exact path="/movies" element={<AuthRoute />}>
              <Route exact path="/movies" element={<Movies />} />
            </Route>

            <Route exact path="/movies/:id" element={<AuthRoute />}>
              <Route exact path="/movies/:id" element={<SingleMovie />} />
            </Route>

            <Route path="/login" element={<Login />}></Route>

            <Route path="/signup" element={<Signup />} />
            <Route path="/signupnew" element={<SignUpNew />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
