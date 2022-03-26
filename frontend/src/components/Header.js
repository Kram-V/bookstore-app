import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../actions/userActions";

const Header = () => {
  const { userDetails } = useSelector((state) => state.loggedInUser);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {
    dispatch(logout());

    navigate("/login");
  };
  return (
    <>
      <Navbar bg="dark" variant="dark" style={{ padding: "10px" }}>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>Bookstore App</Navbar.Brand>
          </LinkContainer>

          <Nav className="mr-auto">
            <LinkContainer to="/create">
              <Nav.Link>Create</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/">
              <Nav.Link>Books</Nav.Link>
            </LinkContainer>

            {!userDetails ? (
              <LinkContainer to="/login">
                <Nav.Link>Login</Nav.Link>
              </LinkContainer>
            ) : (
              <Nav.Link onClick={logoutHandler}>Logout</Nav.Link>
            )}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
