import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";
import { Card } from "antd";
import { Button, Modal } from "antd";

export default function MovieCard(props) {
  const nav = useNavigate();
  const { Meta } = Card;
  const movie = props.movies;
  const imageBaseUrl = "https://image.tmdb.org/t/p/";
  const imageSize = "w200";
  const imageUrl = movie.poster_path
    ? `${imageBaseUrl}${imageSize}${movie.poster_path}`
    : "https://via.placeholder.com/200";
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(handleClick);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  function handleClick() {
    nav(`/movies/${movie.id}`);
  }
  return (
    <Card
      hoverable
      style={{
        width: 240,
      }}
      cover={<img src={imageUrl} className="card-img-top" alt="..."></img>}
    >
      <Meta
        title=<h5 className="card-title">{movie.title}</h5>
        description=<Button type="primary" onClick={showModal}>
          Click me!
        </Button>
      />
      <Modal
        title="Overview"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>{movie.overview}</p>
      </Modal>
    </Card>
    // <div className="card custom-card">
    //   <img src={imageUrl} className="card-img-top" alt="..."></img>
    //   <div className="card-body">
    //     <div>
    //       <h5 className="card-title">{movie.title}</h5>
    //       <button onClick={handleClick}>click here</button>
    //     </div>
    //   </div>
    // </div>
  );
}
