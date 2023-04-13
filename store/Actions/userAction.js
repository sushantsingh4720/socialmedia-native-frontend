import axios from "../../utils/axiosInstance";
import {
  FOLLOWER_REMOVE_FAIL,
  FOLLOWER_REMOVE_REQUEST,
  FOLLOWER_REMOVE_SUCCESS,
  FOLLOW_FOLLOWING_LIST_FAIL,
  FOLLOW_FOLLOWING_LIST_REQUEST,
  FOLLOW_FOLLOWING_LIST_SUCCESS,
  LOAD_USER_FAIL,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_FAIL,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  SIGN_IN_FAIL,
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  UNFOLLOW_FAIL,
  UNFOLLOW_REQUEST,
  UNFOLLOW_SUCCESS,
} from "../constents/userConstent";
const Signin = (data) => async (dispatch) => {
  dispatch({ type: SIGN_IN_REQUEST });
  await axios
    .post("/auth/register", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((response) =>
      dispatch({ type: SIGN_IN_SUCCESS, payload: response.data.user })
    )
    .catch((err) =>
      dispatch({ type: SIGN_IN_FAIL, payload: err.response.data })
    );
};
const login = (data) => async (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
  await axios
    .post("/auth/login", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((response) => {
      dispatch({ type: LOGIN_SUCCESS, payload: response.data.user });
    })
    .catch((err) => {
      dispatch({ type: LOGIN_FAIL, payload: err.response.data });
    });
};

const Loading = () => async (dispatch) => {
  dispatch({ type: LOAD_USER_REQUEST });
  await axios
    .get("/user/me")
    .then((response) =>
      dispatch({ type: LOAD_USER_SUCCESS, payload: response.data.user })
    )
    .catch((err) =>
      dispatch({
        type: LOAD_USER_FAIL,
        payload: err.response.data,
      })
    );
};

const Logout = () => async (dispatch) => {
  dispatch({ type: LOGOUT_REQUEST });
  await axios
    .get("/user/logout")
    .then((response) => {
      dispatch({ type: LOGOUT_SUCCESS });
    })
    .catch((err) => {
      dispatch({
        type: LOGOUT_FAIL,
      });
    });
};

const Lists = () => async (dispatch) => {
  dispatch({ type: FOLLOW_FOLLOWING_LIST_REQUEST });
  await axios
    .get("/user/followfollowers")
    .then((response) => {
      dispatch({ type: FOLLOW_FOLLOWING_LIST_SUCCESS, payload: response.data });
    })
    .catch((err) => {
      dispatch({
        type: FOLLOW_FOLLOWING_LIST_FAIL,
        payload: err.response.data,
      });
    });
};
const RemoveFollower = (id) => async (dispatch) => {
  dispatch({ type: FOLLOWER_REMOVE_REQUEST });
  await axios
    .post(
      `/user/removefollower/${id}`,
      {},
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then((response) => {
      dispatch({
        type: FOLLOWER_REMOVE_SUCCESS,
        payload: response.data.message,
      });
    })
    .catch((err) => {
      dispatch({ type: FOLLOWER_REMOVE_FAIL, payload: err.response.data });
    });
};
const Unfollow = (id) => async (dispatch) => {
  console.log(id);
  dispatch({ type: UNFOLLOW_REQUEST });
  await axios
    .put(
      `/user/unfollow/${id}`,
      {},
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then((response) => {
      console.log(response.data);
      dispatch({ type: UNFOLLOW_SUCCESS, payload: response.data.message });
    })
    .catch((err) => {
      console.log(err.response.data);
      dispatch({ type: UNFOLLOW_FAIL, payload: err.response.data });
    });
};

export { Signin, login, Loading, Logout, Lists, RemoveFollower, Unfollow };
