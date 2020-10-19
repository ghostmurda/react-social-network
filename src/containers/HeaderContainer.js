import {connect} from "react-redux";
import Header from "../components/Header/Header";
import {getUserName} from "../redux/selectors/authSelectors";
import React from "react";

function HeaderContainer(props){
    return (
        <Header name={props.name}/>
    );
}

let mapStateToProps = (state) => {
    return {
        name: getUserName(state),
    };
};

export default connect(mapStateToProps)(HeaderContainer);
