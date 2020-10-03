import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";

function App() {
    let defaultUser = {
        name: 'Daniel Simonov',
        followers: '0',
        following: '0',
        posts: '1',
        info: 'Beginner frontend developer, student',
    };
    return (
        <div className="App">
            <Header obj={defaultUser}/>
            <Main obj={{defaultUser}}/>
        </div>
    );
}

export default App;
