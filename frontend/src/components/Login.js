import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../actions/userActions";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { success } = useSelector((state) => state.loggedInUser);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();

    const input = {
      email,
      password,
    };

    dispatch(login(input));
  };

  if (success) {
    navigate("/");
  }

  return (
    <>
      <h1 className="text-center mt-5">Login</h1>
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
          <Form.Label>Email</Form.Label>
          <Form.Control
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ border: "1px solid gray" }}
            type="email"
            placeholder="Email"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ border: "1px solid gray" }}
            type="password"
            placeholder="Password"
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

export default Login;
