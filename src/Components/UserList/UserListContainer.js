import {connect} from "react-redux";
import UserList from "./UserList";
import {getUsersCreator} from "../../data/currentUserReducer";

let mapStateToProps = (state) => {
    return {
        userListData: state.currentUserData.followingList,
        userSecondaryListData: state.popularUsersData,
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        getUsers: (followingList) => {
            dispatch(getUsersCreator(followingList));
        },
    };
}

const UserListContainer = connect(mapStateToProps, mapDispatchToProps)(UserList);

export default UserListContainer;