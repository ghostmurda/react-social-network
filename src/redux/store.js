import {combineReducers, createStore, applyMiddleware} from "redux";
import thunk from 'redux-thunk';
import chatReducer from "./reducers/chatReducer";
import usersReducer from "./reducers/usersReducer";
import profileReducer from "./reducers/profileReducer";
import authReducer from "./reducers/authReducer";

let reducers = combineReducers({
    usersData: usersReducer,
    chatsData: chatReducer,
    profileUserData: profileReducer,
    authData: authReducer,
});

let store = createStore(reducers, applyMiddleware(thunk));

export default store;