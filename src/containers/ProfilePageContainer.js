import React from "react";
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import ProfilePageApi from "../components/ProfilePage/ProfilePageApi";
import {onChangeProfileInfoThunk, onGetProfileThunk, onProfileAddPostThunk} from "../redux/actions/profileActions";
import {getUserId, getUserName} from "../redux/selectors/authSelectors";
import {getFetchingProfile, getProfileData} from "../redux/selectors/profileSelectors";

function ProfilePageContainer(props){
    return (
        <ProfilePageApi data={props.data}
                        isFetchingProfile={props.isFetchingProfile}
                        userId={props.userId}
                        authUserId={props.authUserId}
                        onGetProfile={props.onGetProfile}
                        userName={props.userName}
                        onProfileAddPost={props.onProfileAddPost}
                        onChangeProfileInfo={props.onChangeProfileInfo}
        />
    );
}

let mapStateToProps = (state, ownProps) => {
    return {
        data: getProfileData(state),
        isFetchingProfile: getFetchingProfile(state),
        userId: ownProps.match.params.userId,
        authUserId: getUserId(state),
        userName: getUserName(state)
    };
}

let mapDispatchToProps = (dispatch) => {
    return {
        onGetProfile: (userId) => {
            dispatch(onGetProfileThunk(userId));
        },
        onProfileAddPost: (userId, userName, postText) => {
            dispatch(onProfileAddPostThunk(userId, userName, postText))
        },
        onChangeProfileInfo: (userId, info) => {
            dispatch(onChangeProfileInfoThunk(userId, info));
        }
    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProfilePageContainer));
