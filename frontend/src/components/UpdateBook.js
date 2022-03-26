import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReForm from "./ReForm";
import { useNavigate, useParams } from "react-router-dom";
import { getBookDetails, updateBook } from "../actions/bookActions";

const UpdateBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(0);

  const { bookDetails } = useSelector((state) => state.getBookDetails);
  const { updatedBookDetails, isSucess } = useSelector(
    (state) => state.updateBook
  );

  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!bookDetails || bookDetails._id !== params.id) {
      dispatch(getBookDetails(params.id));
    } else {
      setTitle(bookDetails.title);
      setAuthor(bookDetails.author);
      setPrice(bookDetails.price);
      setStock(bookDetails.stock);
    }
  }, [dispatch, params.id, bookDetails]);

  if (isSucess) {
    navigate("/");
  }

  const submitHandler = (e) => {
    e.preventDefault();
    const inputData = {
      title,
      author,
      price,
      stock,
    };

    dispatch(updateBook(params.id, inputData));
  };

  return (
    <>
      <h1 className="text-center mt-5">Update Book</h1>
      <ReForm
        submitHandler={submitHandler}
        title={title}
        author={author}
        price={price}
        stock={stock}
        setTitle={setTitle}
        setAuthor={setAuthor}
        setPrice={setPrice}
        setStock={setStock}
      />
    </>
  );
};

export default UpdateBook;
