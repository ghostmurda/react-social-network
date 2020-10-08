import {addPostActionCreator} from "../../data/postsReducer";
import Profile from "./Profile";
import {connect} from "react-redux";
import {withRouter} from 'react-router-dom';

let mapStateToProps = (state, ownProps) => {
    let profileData = {
        userData: state.currentUserData.userInfo,
        userPosts: state.profilePostsData,
    };
    if (ownProps.location.state) {
        profileData.userData = ownProps.location.state.userData;
    }
    return {
        data: profileData,
        postCreator: state.currentUserData.userInfo.name,
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (profile, text, postCreator) => {
            dispatch(addPostActionCreator(profile, text, postCreator));
        }
    };
};

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile);

export default withRouter(ProfileContainer);