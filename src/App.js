import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";

function App() {
    let defaultUserData = {
        name: 'Daniel Simonov',
        followers: '0',
        following: '0',
        posts: '1',
        info: 'Beginner frontend developer, student',
    };
    let popularUsersData = [
        {name: "Jon Snow", posts: "234", followers: "53", following: "5", info: "Son of Lyanna Stark and Rhaegar Targaryen"},
        {name: "Dana West", posts: "427", followers: "568", following: "23", info: "I love myself"},
        {name: "Roland Worthington", posts: "15", followers: "99", following: "6", info: "Worthington is like Washington but worth"},
    ].sort((a, b) => b.followers - a.followers);
    let userListData = [
        {name: "Pavel Durov", posts: "3", followers: "4", following: "20", info: "Creator of VK and Telegram"},
        {name: "Jon Snow", posts: "234", followers: "53", following: "5", info: "Son of Lyanna Stark and Rhaegar Targaryen"},
        {name: "Test User", posts: "0", followers: "0", following: "100", info: "Test info"},
        {name: "Dana West", posts: "427", followers: "568", following: "23", info: "I love myself"},
        {name: "Roland Worthington", posts: "15", followers: "99", following: "6", info: "Worthington is like Washington but worth"},
    ];
    return (
        <div className="App">
            <Header userObj={defaultUserData}/>
            <Main userObj={defaultUserData} popularUsersArr={popularUsersData} usersArr={userListData}/>
        </div>
    );
}

export default App;
