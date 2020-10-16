import {connect} from "react-redux";
import Header from "./Header";

let mapStateToProps = (state) => {
    return {
        name: state.authData.userName,
    };
};

const HeaderContainer = connect(mapStateToProps)(Header);

export default HeaderContainer;