import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import ProfilePageApi from "./ProfilePageApi";
import {onGetProfileThunk} from "../../redux/reducers/profileReducer";

let mapStateToProps = (state, ownProps) => {
    return {
        data: state.profileUserData.profileData,
        isFetchingProfile: state.profileUserData.isFetching,
        userId: ownProps.match.params.userId,
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