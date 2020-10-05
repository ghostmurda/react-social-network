import {reRender} from "../render";

let state = {
    currentUserData: {
        followingList: [
            {name: "Pavel Durov", posts: "3", followers: "4", following: "20", info: "Creator of VK and Telegram"},
            {name: "Jon Snow", posts: "234", followers: "53", following: "5", info: "Son of Lyanna Stark and Rhaegar Targaryen"},
            {name: "Test User", posts: "0", followers: "0", following: "100", info: "Test info"},
            {name: "Dana West", posts: "427", followers: "568", following: "23", info: "I love myself"},
            {name: "Roland Worthington", posts: "15", followers: "99", following: "6", info: "Worthington is like Washington but worth"},
            {name: "Pavel Durov", posts: "3", followers: "4", following: "20", info: "Creator of VK and Telegram"},
            {name: "Jon Snow", posts: "234", followers: "53", following: "5", info: "Son of Lyanna Stark and Rhaegar Targaryen"},
            {name: "Test User", posts: "0", followers: "0", following: "100", info: "Test info"},
            {name: "Dana West", posts: "427", followers: "568", following: "23", info: "I love myself"},
            {name: "Roland Worthington", posts: "15", followers: "99", following: "6", info: "Worthington is like Washington but worth"},
        ],
        userInfo: {
            name: 'Daniel Simonov',
            followers: '0',
            following: '0',
            posts: '1',
            info: 'Beginner frontend developer, student',
        },
    },
    popularUsersData: [
        {name: "Pavel Durov", posts: "3", followers: "4", following: "20", info: "Creator of VK and Telegram"},
        {name: "Jon Snow", posts: "234", followers: "53", following: "5", info: "Son of Lyanna Stark and Rhaegar Targaryen"},
        {name: "Test User", posts: "0", followers: "0", following: "100", info: "Test info"},
        {name: "Dana West", posts: "427", followers: "568", following: "23", info: "I love myself"},
        {name: "Roland Worthington", posts: "15", followers: "99", following: "6", info: "Worthington is like Washington but worth"},
    ].sort((a, b) => b.followers - a.followers),
    profilePostsData: {
        "Daniel Simonov": [
            {id: 0, name: "Daniel Simonov", text: "Test post"},
            {id: 1, name: "Daniel Simonov", text: "Unt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
            {id: 2, name: "Daniel Simonov", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt "},
            ],
        "Pavel Durov": [
            {id: 0, name: "Daniel Simonov", text: "Test post"},
        ],
        "Jon Snow": [
            {id: 0, name: "Daniel Simonov", text: "Test post"},
        ],
        "Test User": [
            {id: 0, name: "Daniel Simonov", text: "Test post"},
        ],
        "Dana West": [
            {id: 0, name: "Daniel Simonov", text: "Test post"},
        ],
        "Roland Worthington": [
            {id: 0, name: "Daniel Simonov", text: "Test post"},
        ],
    },
};

export let addPost = (profile, postText) => {
    let newPost = {
        id: state.profilePostsData[profile].length,
        name: state.currentUserData.userInfo.name,
        text: postText,
    };
    state.profilePostsData[profile].push(newPost);
    reRender(state);
};

export default state;