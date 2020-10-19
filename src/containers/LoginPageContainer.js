import React from "react";
import {connect} from 'react-redux';
import LoginPage from "../components/LoginPage/LoginPage";
import {onLoginProcessThunk} from "../redux/actions/authActions";
import {getIsFetching, getUserId} from "../redux/selectors/authSelectors";

function LoginPageContainer(props){
    return (
        <LoginPage userId={props.userId}
                   isFetching={props.isFetching}
                   onLoginProcess={props.onLoginProcess}
        />
    );
}

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

export default connect(mapStateToProps, mapDispatchToProps)(LoginPageContainer);