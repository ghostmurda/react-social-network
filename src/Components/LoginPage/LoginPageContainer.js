import {connect} from 'react-redux';
import LoginPage from "./LoginPage";
import {getUserIdCreator, getUserNameCreator, setAuthCreator} from "../../redux/authReducer";

let mapStateToProps = (state) => {
    return {
        authData: state.authData,
    };
}

let mapDispatchToProps = (dispatch) => {
    return {
        getId: (userId) => {
            dispatch(getUserIdCreator(userId));
        },
        getName: (userName) => {
            dispatch(getUserNameCreator(userName));
        },
        setAuth: () => {
            dispatch(setAuthCreator());
        }
    };
};

const LoginPageContainer = connect(mapStateToProps, mapDispatchToProps)(LoginPage);

export default LoginPageContainer;