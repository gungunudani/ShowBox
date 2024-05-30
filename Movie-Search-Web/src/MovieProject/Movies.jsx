import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { SearchOutlined } from "@ant-design/icons";
import { Button } from "antd";

export default function Movies() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();
  useEffect(() => {
    async function getMovieData() {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/discover/movie?api_key={yourkey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${currentPage}&query=${searchQuery}`
        );
        setMovies(res.data.results);
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    getMovieData();
  }, [currentPage]);
  function handleTheClick() {
    setCurrentPage(currentPage + 1);
  }
  function handleLogout() {
    navigate("/");
    localStorage.clear();
  }

  function handleSearchQueryChange(event) {
    setSearchQuery(event.target.value);
  }
  async function handleSearch() {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=b355e3c05fa17c27451da5c2b2b5be07&language=en-US&query=${searchQuery}&page=${currentPage}&include_adult=false`
      );
      setMovies(res.data.results);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="movie-container">
      <h1 className="movieName">Welcome To Movies </h1>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search movies..."
          value={searchQuery}
          onChange={handleSearchQueryChange}
        ></input>
        <Button type="primary" icon={<SearchOutlined />} onClick={handleSearch}>
          Search
        </Button>
      </div>

      <h5>
        <button onClick={handleTheClick} className="">
          Next
        </button>
        <button onClick={handleLogout} className="">
          log out
        </button>
      </h5>
      <div className="card-deck">
        <div className="row">
          {movies.length > 0 &&
            movies.map((movie) => (
              <div className="col-lg-3  mb-4">
                <div>
                  <MovieCard movies={movie} key={movie.id} />
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
