import {connect} from "react-redux";
import Header from "./Header";

let mapStateToProps = (state) => {
    return {
        name: state.currentUserData.userInfo.name,
    };
};

const HeaderContainer = connect(mapStateToProps)(Header);

export default HeaderContainer;