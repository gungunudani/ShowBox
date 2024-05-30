import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "../index.css";
export default function SingleMovie() {
  const { id } = useParams([]);
  console.log(id);
  const [detail, setDetail] = useState([]);
  const [cast, setCast] = useState([]);
  useEffect(() => {
    async function getMovieDetail() {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=b355e3c05fa17c27451da5c2b2b5be07`
        );
        setDetail(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    async function getMovieCast() {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}/credits?api_key=b355e3c05fa17c27451da5c2b2b5be07`
        );
        setCast(response.data.cast.slice(0, 4));
        console.log(response.data.cast);
      } catch (error) {
        console.log(error);
      }
    }
    if (id) {
      getMovieDetail();
      getMovieCast();
    }
  }, [id]);
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="d-flex align-items-center">
            {detail.poster_path && (
              <img
                src={`https://image.tmdb.org/t/p/w200/${detail.poster_path}`}
                //className="card-img-top movie-poster"
                alt="MovieImage"
              />
            )}
            <div className="ml-4">
              <h3 className="movie-title">{detail.title}</h3>
              <h4 className="movie-release-date">{detail.release_date}</h4>
              <h5 className="movie-tagline">{detail.tagline}</h5>
              <p className="movie-overview">{detail.overview}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h5 className="cast-heading">Star Cast</h5>
          <div className="cast-container">
            {cast.map((actor) => (
              <div key={actor.id} className="actor">
                <img
                  src={`https://image.tmdb.org/t/p/w200/${actor.profile_path}`}
                  alt={actor.name}
                  className="actor-image"
                />
                <p className="actor-name">{actor.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
