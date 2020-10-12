import {combineReducers, createStore} from "redux";
import chatReducer from "./chatReducer";
import postsReducer from "./postsReducer";
import currentUserReducer from "./currentUserReducer";
import popularUsersReducer from "./popularUsersReducer";
import profileReducer from "./profileReducer";

let reducers = combineReducers({
    currentUserData: currentUserReducer,
    popularUsersData: popularUsersReducer,
    chatsData: chatReducer,
    profilePostsData: postsReducer,
    profileData: profileReducer,
});

let store = createStore(reducers);

export default store;