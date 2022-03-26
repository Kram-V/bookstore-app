import axios from "axios";

export const login = (input) => async (dispatch) => {
  try {
    dispatch({ type: "USER_LOGIN_REQUEST" });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      "http://localhost:4000/api/users",
      input,
      config
    );

    dispatch({ type: "USER_LOGIN_SUCCESS", payload: data });

    localStorage.setItem("userDetails", JSON.stringify(data));
  } catch (error) {}
};

export const logout = () => async (dispatch) => {
  localStorage.removeItem("userDetails");

  dispatch({ type: "USER_LOGOUT" });
};
