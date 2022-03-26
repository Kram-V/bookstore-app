import React from "react";
import { Pagination } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Paginate = ({ pages, currentPage }) => {
  return (
    pages > 1 && (
      <Pagination>
        {[...Array(pages).keys()].map((page) => {
          return (
            <LinkContainer key={page + 1} to={`/page/${page + 1}`}>
              <Pagination.Item active={page + 1 === currentPage}>
                {page + 1}
              </Pagination.Item>
            </LinkContainer>
          );
        })}
      </Pagination>
    )
  );
};

export default Paginate;
