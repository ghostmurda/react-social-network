import {connect} from 'react-redux';
import LoginPage from "./LoginPage";
import {getUserId, setAuth} from "../../redux/authReducer";

let mapStateToProps = (state) => {
    return {
        authData: state.authData,
    };
}

let mapDispatchToProps = (dispatch) => {
    return {
        getId: (userId) => {
            dispatch(getUserId(userId));
        },
        setAuth: () => {
            dispatch(setAuth());
        }
    };
};

const LoginPageContainer = connect(mapStateToProps, mapDispatchToProps)(LoginPage);

export default LoginPageContainer;