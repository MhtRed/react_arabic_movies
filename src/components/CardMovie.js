import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
const CardMovie = ({ movie }) => {
  return (
    <Col xs="12" sm="6" md="4" lg="3" className="my-1">
      <Link to={`/movie/${movie.id}`}>
        <div className="card">
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
            className="card-image"
            alt="movie"
          />
          <div className="card-overlay">
            <p>إسم الفيلم: {movie.title}</p>
            <p>تاريخ الاصدار : {movie.release_date}</p>
            <p>عدد المقيمين : {movie.vote_count}</p>
            <p>معدل التقييم : {movie.vote_average}</p>
          </div>
        </div>
      </Link>
    </Col>
  );
};

export default CardMovie;
