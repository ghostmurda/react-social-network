import {combineReducers, createStore, applyMiddleware} from "redux";
import thunk from 'redux-thunk';
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

let store = createStore(reducers, applyMiddleware(thunk));

export default store;