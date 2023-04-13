import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  allPostReducer,
  myPostReducer,
  newPostReducer,
} from "./Reducers/postReducer";
import {
  footerPointer,
  listsReducer,
  userReducer,
} from "./Reducers/userReducer";
const reducer = combineReducers({
  user: userReducer,
  lists: listsReducer,
  footerPointer: footerPointer,
  newPost: newPostReducer,
  myPost: myPostReducer,
  allPost: allPostReducer,
});
const store = configureStore({
  reducer,
});
export default store;
