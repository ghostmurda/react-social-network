import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import ProfilePageApi from "./ProfilePageApi";

let mapStateToProps = (state) => {
    return {

    };
}

let mapDispatchToProps = (dispatch) => {
    return {

    };
}

const ProfilePageContainer = connect(mapStateToProps, mapDispatchToProps)(ProfilePageApi);

export default withRouter(ProfilePageContainer);