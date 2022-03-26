import React from "react";
import { Spinner } from "react-bootstrap";

const Loader = () => {
  return (
    <Spinner
      animation="border"
      role="status"
      style={{
        width: "30px",
        height: "30px",
        margin: "auto",
        display: "block",
        marginTop: "100px",
      }}
    ></Spinner>
  );
};

export default Loader;
