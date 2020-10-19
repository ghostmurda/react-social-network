import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import ProfilePageApi from "./ProfilePageApi";
import {onGetProfileThunk} from "../../redux/actions/profileActions";
import {getUserId} from "../../redux/selectors/authSelectors";
import {getFetchingProfile, getProfileData} from "../../redux/selectors/profileSelectors";

let mapStateToProps = (state, ownProps) => {
    return {
        data: getProfileData(state),
        isFetchingProfile: getFetchingProfile(state),
        userId: ownProps.match.params.userId,
        authUserId: getUserId(state),
    };
}

let mapDispatchToProps = (dispatch) => {
    return {
        onGetProfile: (userId) => {
            dispatch(onGetProfileThunk(userId));
        }
    };
}

const ProfilePageContainer = connect(mapStateToProps, mapDispatchToProps)(ProfilePageApi);

export default withRouter(ProfilePageContainer);