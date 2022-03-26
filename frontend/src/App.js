import React from "react";
import BookList from "./components/BookList";
import Header from "./components/Header";
import CreateBook from "./components/CreateBook";
import UpdateBook from "./components/UpdateBook";
import BookDetails from "./components/BookDetails";
import Login from "./components/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";

const App = () => {
  return (
    <Router>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<BookList />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create" element={<CreateBook />} />
          <Route path="/book/:id" element={<BookDetails />} />
          <Route path="/page/:pageNumber" element={<BookList />} />
          <Route path="/book/:id/edit" element={<UpdateBook />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
