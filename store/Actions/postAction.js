import axios from "../../utils/axiosInstance";
import {
  GET_ALLPOST_FAIL,
  GET_ALLPOST_REQUREST,
  GET_ALLPOST_SUCCESS,
  GET_MYPOST_REQUEST,
  GET_MYPOST_SUCCESS,
  NEW_POST_FAIL,
  NEW_POST_REQUEST,
  NEW_POST_SUCCESS,
} from "../constents/postConstent";

const AllPost = () => async (dispatch) => {
  dispatch({ type: GET_ALLPOST_REQUREST });
  await axios
    .get("/post", {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      dispatch({ type: GET_ALLPOST_SUCCESS, payload: response.data.allPosts });
    })
    .catch((err) => {
      dispatch({ type: GET_ALLPOST_FAIL, payload: err.response.data.message });
    });
};
const NewPost = (data) => async (dispatch) => {
  dispatch({ type: NEW_POST_REQUEST });
  await axios
    .post("/post/new", data, {
      headers: { "Content-Type": "multipart/form-data" },
    })
    .then((response) => {
      dispatch({ type: NEW_POST_SUCCESS, payload: response.data.message });
    })
    .catch((err) => {
      dispatch({ type: NEW_POST_FAIL, payload: err.response.data.message });
    });
};
const MyPost = () => async (dispatch) => {
  dispatch({ type: GET_MYPOST_REQUEST });
  await axios
    .get("/post/me", {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) =>
      dispatch({ type: GET_MYPOST_SUCCESS, payload: response.data.myPost })
    )
    .catch((err) => {
      console.log(err.response.data);
      console.log(err.response.data.message);
    });
};
export { NewPost, MyPost, AllPost };
