import usersReducer from "../usersReducer";
import {getAllUsersCreator} from "../../actions/usersActions";

const state = {
    usersList: [],
    followingList: [],
    isFetchingUsersList: false,
    isFetchingFollowingList: false,
};

let newState = (state, action) => usersReducer(state, action);

it('set all users', () => {
    const testedUsersList = [{userName: 'test1'}, {userName: 'test2'}];
    const action = getAllUsersCreator(testedUsersList);
    expect(newState(state, action).usersList.length).toBe(2);
})