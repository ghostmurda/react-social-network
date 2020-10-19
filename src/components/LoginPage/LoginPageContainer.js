import {connect} from 'react-redux';
import LoginPage from "./LoginPage";
import {onLoginProcessThunk} from "../../redux/actions/authActions";
import {getIsFetching, getUserId} from "../../redux/selectors/authSelectors";

let mapStateToProps = (state) => {
    return {
        userId: getUserId(state),
        isFetching: getIsFetching(state),
    };
}

let mapDispatchToProps = (dispatch) => {
    return {
        onLoginProcess: (userName, userPassword) => {
            dispatch(onLoginProcessThunk(userName, userPassword));
        }
    };
};

const LoginPageContainer = connect(mapStateToProps, mapDispatchToProps)(LoginPage);

export default LoginPageContainer;