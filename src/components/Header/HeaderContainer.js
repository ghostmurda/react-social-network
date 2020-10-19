import {connect} from "react-redux";
import Header from "./Header";
import {getUserName} from "../../redux/selectors/authSelectors";

let mapStateToProps = (state) => {
    return {
        name: getUserName(state),
    };
};

const HeaderContainer = connect(mapStateToProps)(Header);

export default HeaderContainer;