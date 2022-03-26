import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createBook } from "../actions/bookActions";
import { useNavigate } from "react-router-dom";
import ReForm from "./ReForm";

const CreateBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(0);

  const { isSucess } = useSelector((state) => state.createBook);
  const { userDetails } = useSelector((state) => state.loggedInUser);

  const dispatch = useDispatch();
  const navigate = useNavigate();

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

    if (!userDetails) {
      navigate("/login");
    } else {
      dispatch(createBook(inputData));
    }
  };

  return (
    <>
      <h1 className="text-center mt-5">Create Book</h1>
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

export default CreateBook;
