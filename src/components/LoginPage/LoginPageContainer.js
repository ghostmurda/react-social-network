import {connect} from 'react-redux';
import LoginPage from "./LoginPage";
import {onLoginProcessThunk} from "../../redux/actions/authActions";

let mapStateToProps = (state) => {
    return {
        authData: state.authData,
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