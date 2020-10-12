import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import ProfilePageApi from "./ProfilePageApi";
import {getProfileActionCreator, toggleLoaderProfile} from "../../data/profileReducer";

let mapStateToProps = (state, ownProps) => {
    return {
        data: state.profileUserData.profileData,
        isFetchingProfile: state.profileUserData.isFetching,
        userId: ownProps.match.params.userId,
    };
}

let mapDispatchToProps = (dispatch) => {
    return {
        getProfile: (profileData) => {
            dispatch(getProfileActionCreator(profileData));
        },
        toggleLoader: (isFetching) => {
            dispatch(toggleLoaderProfile(isFetching));
        }
    };
}

const ProfilePageContainer = connect(mapStateToProps, mapDispatchToProps)(ProfilePageApi);

export default withRouter(ProfilePageContainer);