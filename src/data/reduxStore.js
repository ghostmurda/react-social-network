import {combineReducers, createStore} from "redux";
import chatReducer from "./chatReducer";
import postsReducer from "./postsReducer";
import currentUserReducer from "./currentUserReducer";
import popularUsersReducer from "./popularUsersReducer";
import profileReducer from "./profileReducer";
import authReducer from "./authReducer";

let reducers = combineReducers({
    currentUserData: currentUserReducer,
    popularUsersData: popularUsersReducer,
    chatsData: chatReducer,
    profilePostsData: postsReducer,
    profileUserData: profileReducer,
    authData: authReducer,
});

let store = createStore(reducers);

export default store;