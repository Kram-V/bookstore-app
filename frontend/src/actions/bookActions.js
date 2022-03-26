import axios from "axios";

export const bookList =
  (pageNumber = "") =>
  async (dispatch) => {
    try {
      dispatch({ type: "BOOK_LIST_REQUEST" });

      const { data } = await axios.get(
        `http://localhost:4000/api/books?pageNumber=${pageNumber}`
      );

      dispatch({ type: "BOOK_LIST_SUCCESS", payload: data });
    } catch (error) {}
  };

export const getBookDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: "BOOK_GET_REQUEST" });

    const { data } = await axios.get(`http://localhost:4000/api/books/${id}`);

    dispatch({ type: "BOOK_GET_SUCCESS", payload: data });
  } catch (error) {}
};

export const createBook = (input) => async (dispatch, getState) => {
  try {
    dispatch({ type: "BOOK_CREATE_REQUEST" });

    const { userDetails } = getState().loggedInUser;

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userDetails.token}`,
      },
    };

    const { data } = await axios.post(
      "http://localhost:4000/api/books",
      input,
      config
    );

    dispatch({ type: "BOOK_CREATE_SUCCESS", payload: data });
  } catch (error) {}
};

export const updateBook = (id, input) => async (dispatch, getState) => {
  try {
    dispatch({ type: "BOOK_UPDATE_REQUEST" });

    const { userDetails } = getState().loggedInUser;

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userDetails.token}`,
      },
    };

    const { data } = await axios.put(
      `http://localhost:4000/api/books/${id}`,
      input,
      config
    );

    dispatch({ type: "BOOK_UPDATE_SUCCESS", payload: data });
  } catch (error) {}
};

export const deleteBook = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: "BOOK_DELETE_REQUEST" });

    const { userDetails } = getState().loggedInUser;

    const config = {
      headers: {
        Authorization: `Bearer ${userDetails.token}`,
      },
    };

    const { data } = await axios.delete(
      `http://localhost:4000/api/books/${id}`,
      config
    );

    dispatch({ type: "BOOK_DELETE_SUCCESS", payload: data });
  } catch (error) {}
};
