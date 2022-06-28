import React from "react";
import CardMovie from "./CardMovie";
import { Row } from "react-bootstrap";
import Paginate from "./Paginate";

const MoviesList = ({ pageNumber, getPages, totalPages, movies }) => {
  return (
    <Row>
      <h3 className="font text-center">الصفحة رقم: {pageNumber}</h3>
      {movies.length ? (
        movies.map((movie) => <CardMovie key={movie.id} movie={movie} />)
      ) : (
        <h3 className="text-center">لا يوجد أفلام للعرض حاليا</h3>
      )}
      {movies.length ? (
        <Paginate getPages={getPages} totalPages={totalPages} />
      ) : null}
    </Row>
  );
};

export default MoviesList;
