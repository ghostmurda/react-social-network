import {combineReducers, createStore} from "redux";
import chatReducer from "./chatReducer";
import postsReducer from "./postsReducer";
import currentUserReducer from "./currentUserReducer";
import popularUsersReducer from "./popularUsersReducer";

let reducers = combineReducers({
    currentUserData: currentUserReducer,
    popularUsersData: popularUsersReducer,
    chatsData: chatReducer,
    profilePostsData: postsReducer,
});

let store = createStore(reducers);

export default store;