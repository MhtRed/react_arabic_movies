import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const MovieDetails = () => {
  const [details, setDetails] = useState({});
  const id = useParams().id;
  //Get The Movie Details Page Based On The Movie Id
  const getDetails = async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=e8f42870fffe08e7e7bbb870491ee1fe&language=ar`
    );
    setDetails(response.data);
    console.log(response.data);
  };
  useEffect(() => {
    getDetails();
  }, []);
  return (
    <div>
      <Row className="justify-content-center">
        <Col md="12" xs="12" sm="12" className="mt-4">
          <div className="card-details d-flex align-items-center">
            <img
              className="img-movie w-30"
              src={`https://image.tmdb.org/t/p/w500${details.poster_path}`}
              alt="poster"
            />
            <div className="justify-content-center text-center mx-auto">
              <p className="card-text-details border-bottom">
                اسم الفيلم: {details.title}
              </p>
              <p className="card-text-details border-bottom">
                تاريخ الفيلم: {details.release_date}
              </p>
              <p className="card-text-details border-bottom">
                عدد المقيمين: {details.vote_count}
              </p>
              <p className="card-text-details border-bottom">
                التقييم: {details.vote_average}
              </p>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="12" xs="12" sm="12" className="mt-1">
          <div className="card-story d-flex flex-column align-items-start">
            <div className="text-end p-4">
              <p className="card-text-title border-bottom">القصة</p>
            </div>
            <div className="text-end px-2">
              <p className="card-text-story">{details.overview}</p>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col
          md="10"
          xs="12"
          sm="12"
          className="mt-2 d-flex justify-content-center"
        >
          <Link to="/">
            <button
              style={{ backgroundColor: "#b45b35", border: "none" }}
              className="btn btn-primary mx-2"
            >
              عودة للرئيسية
            </button>
          </Link>

          <a href={details.homepage}>
            <button
              style={{ backgroundColor: "#b45b35", border: "none" }}
              className="btn btn-primary mx-2"
            >
              مشاهدة الفيلم
            </button>
          </a>
        </Col>
      </Row>
    </div>
  );
};

export default MovieDetails;
