import {combineReducers, createStore, applyMiddleware, compose} from "redux";
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

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export default store;