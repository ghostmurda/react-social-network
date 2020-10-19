import {connect} from 'react-redux';
import NavMenu from "./NavMenu";
import {getAuth, getUserId} from "../../redux/selectors/authSelectors";

let mapStateToProps = (state) => {
    return {
        auth: getAuth(state),
        userId: getUserId(state)
    }
}

const NavMenuContainer = connect(mapStateToProps)(NavMenu);

export default NavMenuContainer;