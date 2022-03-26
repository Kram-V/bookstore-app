export const bookListReducer = (state = { books: [] }, action) => {
  switch (action.type) {
    case "BOOK_LIST_REQUEST":
      return { isLoading: true };
    case "BOOK_LIST_SUCCESS":
      return {
        ...state,
        isLoading: false,
        books: action.payload.books,
        pages: action.payload.pages,
        page: action.payload.page,
      };
    case "BOOK_LIST_FAIL":
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
};

export const getBookDetailsReducer = (state = { bookDetails: {} }, action) => {
  switch (action.type) {
    case "BOOK_GET_REQUEST":
      return { isLoading: true };
    case "BOOK_GET_SUCCESS":
      return { ...state, isLoading: false, bookDetails: action.payload };
    case "BOOK_GET_FAIL":
      return { ...state, isLoading: false, error: action.payload };
    case "BOOK_GET_RESET":
      return { bookDetails: {} };
    default:
      return state;
  }
};

export const createBookReducer = (state = { book: {} }, action) => {
  switch (action.type) {
    case "BOOK_CREATE_REQUEST":
      return { isLoading: true };
    case "BOOK_CREATE_SUCCESS":
      return {
        ...state,
        isLoading: false,
        isSucess: true,
        book: action.payload,
      };
    case "BOOK_CREATE_FAIL":
      return { ...state, isLoading: false, error: action.payload };
    case "BOOK_CREATE_RESET":
      return { book: {} };
    default:
      return state;
  }
};

export const updateBookReducer = (
  state = { updatedBookDetails: {} },
  action
) => {
  switch (action.type) {
    case "BOOK_UPDATE_REQUEST":
      return { isLoading: true };
    case "BOOK_UPDATE_SUCCESS":
      return {
        ...state,
        isLoading: false,
        isSucess: true,
        updatedBookDetails: action.payload,
      };
    case "BOOK_UPDATE_FAIL":
      return { ...state, isLoading: false, error: action.payload };
    case "BOOK_UPDATE_RESET":
      return { updatedBookDetails: {} };
    default:
      return state;
  }
};

export const deleteBookReducer = (
  state = { deletedBookDetails: {} },
  action
) => {
  switch (action.type) {
    case "BOOK_DELETE_REQUEST":
      return { isLoading: true };
    case "BOOK_DELETE_SUCCESS":
      return {
        ...state,
        isLoading: false,
        deletedBookDetails: action.payload,
      };
    case "BOOK_DELETE_FAIL":
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
};
