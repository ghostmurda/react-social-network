import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";

function App(props) {
    return (
        <div className="App">
            <Header userObj={props.appState.defaultUserData}/>
            <Main userObj={props.appState.defaultUserData}
                  popularUsersArr={props.appState.popularUsersData}
                  usersArr={props.appState.userListData}
                  profileData={props.appState.profilePostsData}
            />
        </div>
    );
}

export default App;
