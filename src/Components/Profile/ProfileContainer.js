import React from 'react';
import {withRouter} from 'react-router-dom';
import {addPostActionCreator} from "../../data/postsReducer";
import Profile from "./Profile";

function ProfileContainer(props){
    let data = {};
    if (!props.location.state){
        data.userData = props.userData;
        data.userPosts = props.userPosts;
    } else {
        data.userData = props.location.state.userData;
        data.userPosts = props.location.state.postsData;
    }
    let addPost = (profile, text, postCreator = props.userData.name) => {
        props.dispatch(addPostActionCreator(profile, text, postCreator));
    }

    return (
        <Profile
            data={data}
            addPost={addPost}
        />
    );
}

export default withRouter(ProfileContainer);