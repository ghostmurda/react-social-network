import {connect} from "react-redux";
import UserList from "./UserList";

let mapStateToProps = (state) => {
    return {
        userListData: state.currentUserData.followingList,
        userSecondaryListData: state.popularUsersData,
    };
};

const UserListContainer = connect(mapStateToProps)(UserList);

export default UserListContainer;