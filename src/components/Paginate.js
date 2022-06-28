import React from "react";
import ReactPaginate from "react-paginate";

import { Col, Row } from "react-bootstrap";

const Paginate = ({ getPages, totalPages }) => {
  const handlePageClick = (data) => {
    getPages(data.selected + 1);
  };
  return (
    <Row>
      <Col className="text-center">
        <ReactPaginate
          breakLabel="..."
          nextLabel="التالي >"
          onPageChange={handlePageClick}
          marginPagesDisplayed={2}
          pageRangeDisplayed={2}
          pageCount={totalPages}
          previousLabel="< السابق"
          containerClassName={"pagination justify-content-center p-3"}
          pageClassName={"page-item"}
          pageLinkClassName={"page-link"}
          previousClassName={"page-item"}
          nextClassName={"page-item"}
          breakClassName={"page-item"}
          breakLinkClassName={"page-link"}
          previousLinkClassName={"page-link"}
          nextLinkClassName={"page-link"}
          activeClassName={"active"}
        />
      </Col>
    </Row>
  );
};

export default Paginate;
