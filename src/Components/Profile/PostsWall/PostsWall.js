import React from "react";
import Post from "./Post/Post";
import {sortPostsActionCreator} from "../../../data/postsReducer";

function PostsWall(props){
    let postElements = props.postsData[props.profileOwner].map((item, i) => {
        return <Post
            key={i}
            name={item.name}
            text={item.text}
        />;
    });
    //props.dispatch(sortPostsActionCreator(props.profileOwner));
    return (
        <div className="PostsWall">
            {postElements}
        </div>
    );
}

export default PostsWall;