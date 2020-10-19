import React from "react";
import {connect} from 'react-redux';
import NavMenu from "../components/NavMenu/NavMenu";
import {getAuth, getUserId} from "../redux/selectors/authSelectors";

function NavMenuContainer(props){
    return (
        <NavMenu auth={props.auth}
                 userId={props.userId}
        />
    );
}

let mapStateToProps = (state) => {
    return {
        auth: getAuth(state),
        userId: getUserId(state)
    }
}

export default connect(mapStateToProps)(NavMenuContainer);