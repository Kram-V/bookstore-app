import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBookDetails } from "../actions/bookActions";
import { useParams, Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import Loader from "./Loader";

const BookDetails = () => {
  const { bookDetails, isLoading } = useSelector(
    (state) => state.getBookDetails
  );

  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    dispatch(getBookDetails(params.id));
  }, [dispatch, params.id]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <h1 className="text-center mt-5">Book Details</h1>

      <div
        style={{
          border: "3px solid black",
          padding: "20px",
          fontSize: "20px",
          width: "300px",
          margin: "3rem auto",
        }}
      >
        <p>
          <span style={{ fontWeight: "bold" }}>Title:</span> {bookDetails.title}
        </p>
        <p>
          <span style={{ fontWeight: "bold" }}>Author:</span>{" "}
          {bookDetails.author}
        </p>
        <p>
          <span style={{ fontWeight: "bold" }}>Price:</span> Php{" "}
          {bookDetails.price}
        </p>
        <p>
          <span style={{ fontWeight: "bold" }}>Stock:</span> {bookDetails.stock}
        </p>

        <Link to="/">
          <Button type="submit" style={{ width: "100%" }} variant="dark">
            Go Back
          </Button>
        </Link>
      </div>
    </>
  );
};

export default BookDetails;
