import {combineReducers, createStore} from "redux";
import chatReducer from "./chatReducer";
import usersReducer from "./usersReducer";
import profileReducer from "./profileReducer";
import authReducer from "./authReducer";

let reducers = combineReducers({
    usersData: usersReducer,
    chatsData: chatReducer,
    profileUserData: profileReducer,
    authData: authReducer,
});

let store = createStore(reducers);

export default store;