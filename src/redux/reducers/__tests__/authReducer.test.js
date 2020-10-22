import {getUserIdCreator, getUserNameCreator} from "../../actions/authActions";
import authReducer from "../authReducer";

const state = {
    userId: null,
    userName: null,
    auth: false,
    isFetching: false,
};

let newState = (state, action) => {
    return authReducer(state, action);
}

it('user id should be set', () => {
    const testedUserId = '5';
    const action = getUserIdCreator(testedUserId);
    expect(newState(state, action).userId).toBe(testedUserId);
})

it('user name should be set ', () => {
    const testedUserName = 'Daniel Simonov';
    const action = getUserNameCreator(testedUserName);
    expect(newState(state, action).userName).toBe(testedUserName);
})