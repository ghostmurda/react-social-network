const GET_POPULAR_USERS = 'GET_POPULAR_USERS';

let initialState = [
    /*{name: "Pavel Durov", posts: "3", followers: "4", following: "20", info: "Creator of VK and Telegram"},
    {name: "Jon Snow", posts: "234", followers: "53", following: "5", info: "Son of Lyanna Stark and Rhaegar Targaryen"},
    {name: "Test User", posts: "0", followers: "0", following: "100", info: "Test info"},
    {name: "Dana West", posts: "427", followers: "568", following: "23", info: "I love myself"},
    {name: "Roland Worthington", posts: "15", followers: "99", following: "6", info: "Worthington is like Washington but worth"},*/
];//.sort((a, b) => b.followers - a.followers);

const popularUsersReducer = (state = initialState, action) => {
    switch (action.type){
        case GET_POPULAR_USERS:
            let userList = action.userList;
            let stateCopy = [...state];
            for (let item of userList){
                stateCopy.push(item);
            }
            return stateCopy;
        default:
            return state;
    }
}

export const getPopularUsersCreator = function(popularList){
    return{
        type: GET_POPULAR_USERS,
        userList: popularList,
    };
};

export default  popularUsersReducer;