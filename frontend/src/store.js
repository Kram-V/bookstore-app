import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  bookListReducer,
  createBookReducer,
  getBookDetailsReducer,
  updateBookReducer,
  deleteBookReducer,
} from "./reducers/bookReducers";
import { loggedInUserReducer } from "./reducers/userReducers";

const reducer = combineReducers({
  loggedInUser: loggedInUserReducer,
  bookList: bookListReducer,
  createBook: createBookReducer,
  getBookDetails: getBookDetailsReducer,
  updateBook: updateBookReducer,
  deleteBook: deleteBookReducer,
});

const userDetailsFromStorage = localStorage.getItem("userDetails")
  ? JSON.parse(localStorage.getItem("userDetails"))
  : null;

const initialState = {
  loggedInUser: { userDetails: userDetailsFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
