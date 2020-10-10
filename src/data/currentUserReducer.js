const GET_USERS = 'GET_USERS';

let initialState = {
    followingList: [
        {name: "Pavel Durov", posts: "3", followers: "4", following: "20", info: "Creator of VK and Telegram"},
        {name: "Jon Snow", posts: "234", followers: "53", following: "5", info: "Son of Lyanna Stark and Rhaegar Targaryen"},
        {name: "Test User", posts: "0", followers: "0", following: "100", info: "Test info"},
        {name: "Dana West", posts: "427", followers: "568", following: "23", info: "I love myself"},
        {name: "Roland Worthington", posts: "15", followers: "99", following: "6", info: "Worthington is like Washington but worth"},
        {name: "Kelsi Clarkson", posts: "3", followers: "4", following: "20", info: "Test"},
        {name: "Taiba Moran", posts: "234", followers: "53", following: "5", info: "Test"},
        {name: "Kason Parry", posts: "0", followers: "0", following: "100", info: "Test"},
        {name: "Manha Hayden", posts: "427", followers: "568", following: "23", info: "Test"},
        {name: "Cydney Power", posts: "15", followers: "99", following: "6", info: "Test"},
    ],
    userInfo: {
        name: 'Daniel Simonov',
        followers: '0',
        following: '0',
        posts: '1',
        info: 'Beginner frontend developer, student',
    },
};

const currentUserReducer = (state = initialState, action) => {
    switch (action.type){
        case GET_USERS:
            let userList = action.userList;
            let stateCopy = {...state};
            stateCopy.followingList = [...state.followingList];
            stateCopy.followingList = userList;
            return stateCopy;
        default:
            return state;
    }
}

export const getUsersCreator = function(followingList){
    return{
        type: GET_USERS,
        userList: followingList,
    };
};

export default currentUserReducer;