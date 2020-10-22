import profileReducer from "../profileReducer";
import {getProfileCreator} from "../../actions/profileActions";

const state = {
    profileData: {},
    isFetching: false,
};

let newState = (state, action) => {
    return profileReducer(state, action);
}

it('profile data should be set', () => {
    const testedProfileData = {
        id: "1",
        name: "Daniel Simonov",
        posts: "0",
        followers: "0",
        following: "0",
        info: "Frontend developer, student",
        postsData: [
            {
                "id": 0,
                "name": "Daniel Simonov",
                "text": "Test post"
            },
            {
                "id": 1,
                "name": "Service",
                "text": "test"
            }
        ],
        followingList: []
    };
    const action = getProfileCreator(testedProfileData);
    expect(newState(state, action).profileData).toBe(testedProfileData);
})