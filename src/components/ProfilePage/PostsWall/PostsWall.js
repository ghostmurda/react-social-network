import React from "react";
import Post from "./Post/Post";

function PostsWall(props){
    let postElements = [];
    if (props.postsData !== undefined){
        postElements = props.postsData.map((item, i) => <Post key={i} {...item}/>);
    }
    return (
        <div className="PostsWall">
            {postElements}
        </div>
    );
}

export default PostsWall;