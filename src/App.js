import React from "react";
import "./App.css";
import Main from "./Components/Main/Main";
import HeaderContainer from "./Components/Header/HeaderContainer";

function App(props) {
    return (
        <div className="App">
            <HeaderContainer/>
            <Main/>
        </div>
    );
}

export default App;
