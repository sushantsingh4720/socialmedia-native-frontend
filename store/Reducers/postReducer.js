import {
  CLEAR_ERRORS,
  NEW_POST_FAIL,
  NEW_POST_REQUEST,
  NEW_POST_SUCCESS,
  CLEAR_MESSAGES,
  GET_MYPOST_REQUEST,
  GET_MYPOST_SUCCESS,
  GET_MYPOST_FAIL,
  GET_ALLPOST_REQUREST,
  GET_ALLPOST_SUCCESS,
  GET_ALLPOST_FAIL,
} from "../constents/postConstent";
const allPostReducer = (state = { allPost: [] }, action) => {
  switch (action.type) {
    case GET_ALLPOST_REQUREST:
      return {
        loading: true,
      };
    case GET_ALLPOST_SUCCESS:
      return {
        ...state,
        loading: false,
        allPost: action.payload,
      };
    case GET_ALLPOST_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case CLEAR_MESSAGES:
      return {
        ...state,
        message: null,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};
const newPostReducer = (state = {}, action) => {
  switch (action.type) {
    case NEW_POST_REQUEST:
      return {
        loading: true,
      };
    case NEW_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        message: action.payload,
      };
    case NEW_POST_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case CLEAR_MESSAGES:
      return {
        ...state,
        message: null,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};

const myPostReducer = (state = { myPost: [] }, action) => {
  switch (action.type) {
    case GET_MYPOST_REQUEST:
      return {
        loading: true,
      };
    case GET_MYPOST_SUCCESS:
      return {
        ...state,
        loading: false,
        myPost: action.payload,
      };
    case GET_MYPOST_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};

export { newPostReducer, myPostReducer, allPostReducer };
