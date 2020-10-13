import {connect} from 'react-redux';
import NavMenu from "./NavMenu";

let mapStateToProps = (state) => {
    return {
        authData: state.authData,
    }
}

const NavMenuContainer = connect(mapStateToProps)(NavMenu);

export default NavMenuContainer;