import {connect} from "react-redux";
import UserList from "./UserList";
import {getUsersCreator} from "../../data/currentUserReducer";
import {getPopularUsersCreator} from "../../data/popularUsersReducer";

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
        getPopularUsers: (popularList) => {
            dispatch(getPopularUsersCreator(popularList));
        },
    };
}

const UserListContainer = connect(mapStateToProps, mapDispatchToProps)(UserList);

export default UserListContainer;