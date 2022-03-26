import React from "react";
import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteBook } from "../actions/bookActions";

const BookItem = ({ title, author, price, stock, bookId }) => {
  const { userDetails } = useSelector((state) => state.loggedInUser);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const updateHandler = () => {
    if (!userDetails) {
      navigate("/login");
    } else {
      navigate(`/book/${bookId}/edit`);
    }
  };

  const deleteHandler = () => {
    if (!userDetails) {
      navigate("/login");
    } else {
      dispatch(deleteBook(bookId));
    }
  };

  return (
    <div
      style={{
        border: "2px solid black",
        padding: "20px",
        fontSize: "20px",
        marginTop: "3rem",
      }}
    >
      <p>
        <span style={{ fontWeight: "bold" }}>Title:</span>{" "}
        <Link to={`/book/${bookId}`}>{title}</Link>
      </p>
      <p>
        <span style={{ fontWeight: "bold" }}>Author:</span> {author}
      </p>

      <div className="text-center mt-4">
        <Button
          onClick={updateHandler}
          style={{ marginRight: "10px" }}
          size="sm"
          variant="primary"
        >
          Update
        </Button>

        <Button size="sm" variant="danger" onClick={deleteHandler}>
          Delete
        </Button>
      </div>
    </div>
  );
};

export default BookItem;
