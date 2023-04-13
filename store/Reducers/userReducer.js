import {
  CLEAR_ERRORS,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAIL,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAIL,
  FOLLOW_FOLLOWING_LIST_REQUEST,
  FOLLOW_FOLLOWING_LIST_SUCCESS,
  FOLLOW_FOLLOWING_LIST_FAIL,
  FOLLOWER_REMOVE_REQUEST,
  FOLLOWER_REMOVE_SUCCESS,
  FOLLOWER_REMOVE_FAIL,
  CLEAR_MESSAGES,
  UNFOLLOW_REQUEST,
  UNFOLLOW_SUCCESS,
  UNFOLLOW_FAIL,
  CLEAR_LIST,
  POINTER_CHANGE_SUCCESS,
} from "../constents/userConstent";
const userReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case SIGN_IN_REQUEST:
      return { loading: true, isAuthenticated: false };
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        user: action.payload,
      };
    case SIGN_IN_FAIL:
      return {
        ...state,
        user: null,
        loading: false,
        isAuthenticated: false,
        error: action.payload,
      };

    case LOGIN_REQUEST:
      return { loading: true, isAuthenticated: false };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        user: action.payload,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        user: null,
        loading: false,
        isAuthenticated: false,
        error: action.payload,
      };

    case LOAD_USER_REQUEST:
      return {
        loading: true,
        isAuthenticated: false,
      };
    case LOAD_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        user: action.payload,
      };
    case LOAD_USER_FAIL:
      return {
        ...state,
        user: null,
        loading: false,
        isAuthenticated: false,
      };
    case LOGOUT_REQUEST:
      return {
        loading: true,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        user: null,
      };
    case LOGOUT_FAIL:
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
const listsReducer = (
  state = {
    followers: [],
    following: [],
  },
  action
) => {
  switch (action.type) {
    case FOLLOW_FOLLOWING_LIST_REQUEST:
      return {
        loading: true,
      };
    case FOLLOW_FOLLOWING_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        followers: action.payload.allFollowers,
        following: action.payload.allFollowing,
      };
    case FOLLOW_FOLLOWING_LIST_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case FOLLOWER_REMOVE_REQUEST:
      return {
        loading: true,
      };
    case FOLLOWER_REMOVE_SUCCESS:
      return {
        loading: false,
        message: action.payload,
      };
    case FOLLOWER_REMOVE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case UNFOLLOW_REQUEST:
      return {
        loading: true,
      };
    case UNFOLLOW_SUCCESS:
      return {
        loading: false,
        message: action.payload,
      };
    case UNFOLLOW_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case CLEAR_LIST:
      return {
        ...state,
        followers: null,
        following: null,
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
const footerPointer = (state = { footerPointer: 1 }, action) => {
  switch (action.type) {
    case POINTER_CHANGE_SUCCESS:
      return {
        ...state,
        footerPointer: action.payload,
      };

    default:
      return state;
  }
};
export { userReducer, listsReducer, footerPointer };
