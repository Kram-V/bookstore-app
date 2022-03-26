import React from "react";
import { Form, Button } from "react-bootstrap";

const ReForm = ({
  submitHandler,
  title,
  author,
  price,
  stock,
  setTitle,
  setAuthor,
  setPrice,
  setStock,
}) => {
  return (
    <>
      <Form
        onSubmit={submitHandler}
        style={{
          width: "400px",
          margin: "3rem auto 0",
          border: "3px solid black",
          borderRadius: "5px",
          padding: "40px",
        }}
      >
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{ border: "1px solid gray" }}
            type="text"
            placeholder="Title"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Author</Form.Label>
          <Form.Control
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            style={{ border: "1px solid gray" }}
            type="text"
            placeholder="Author"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Price</Form.Label>
          <Form.Control
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            style={{ border: "1px solid gray" }}
            type="number"
            placeholder="Price"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Stock</Form.Label>
          <Form.Control
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            style={{ border: "1px solid gray" }}
            type="number"
            placeholder="Stock"
            required
          />
        </Form.Group>

        <Button type="submit" style={{ width: "100%" }} variant="dark">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default ReForm;
