import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bookList } from "../actions/bookActions";
import { Row, Col } from "react-bootstrap";
import BookItem from "./BookItem";
import { useParams } from "react-router-dom";
import Paginate from "./Paginate";
import Loader from "./Loader";

const BookList = () => {
  const { books, isLoading, page, pages } = useSelector(
    (state) => state.bookList
  );
  const { deletedBookDetails, deletedBookDetailsIsLoading } = useSelector(
    (state) => state.deleteBook
  );

  const params = useParams();
  const dispatch = useDispatch();

  const pageNumber = params.pageNumber || 1;

  useEffect(() => {
    dispatch(bookList(pageNumber));

    dispatch({ type: "BOOK_CREATE_RESET" });
    dispatch({ type: "BOOK_UPDATE_RESET" });
    dispatch({ type: "BOOK_GET_RESET" });
  }, [dispatch, deletedBookDetails, pageNumber]);

  if (isLoading || deletedBookDetailsIsLoading) {
    return <Loader />;
  }

  return (
    <>
      <h1 className="text-center mt-5">Book List</h1>
      {books.length === 0 && (
        <h5 className="text-center mt-5">"No Books Show"</h5>
      )}
      <Row>
        {books.map((book) => {
          return (
            <Col key={book._id} md={3} className="mb-5">
              <BookItem
                bookId={book._id}
                title={book.title}
                author={book.author}
                price={book.price}
                stock={book.stock}
              />
            </Col>
          );
        })}
      </Row>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Paginate pages={pages} currentPage={page} />
      </div>
    </>
  );
};

export default BookList;
