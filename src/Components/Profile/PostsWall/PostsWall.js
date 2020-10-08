import React from "react";
import Post from "./Post/Post";

function PostsWall(props){
    let postElements = props.postsData[props.profileOwner].map((item, i) => {
        return <Post
            key={i}
            name={item.name}
            text={item.text}
        />;
    });
    return (
        <div className="PostsWall">
            {postElements}
        </div>
    );
}

export default PostsWall;