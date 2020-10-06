import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";

function App(props) {
    return (
        <div className="App">
            <Header name={props.appState.currentUserData.userInfo.name}/>
            <Main user={props.appState.currentUserData}
                  popularUsers={props.appState.popularUsersData}
                  profilePosts={props.appState.profilePostsData}
                  dispatch={props.dispatch}
            />
        </div>
    );
}

export default App;
