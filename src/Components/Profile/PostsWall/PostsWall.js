import React from "react";
import Post from "../Post/Post";

function PostsWall(props){
    return (
        <div className="PostsWall">
            <Post
                name={'Simonov Daniil'}
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, vel debitis
                    voluptate fugit nemo id totam cum facere ad et eos nam ab quia sint accusamus cupiditate, voluptatum fugiat ea! Ullam
                    et perspiciatis alias voluptates, minima cumque hic corrupti optio"
            />
            <Post
                name={'Simonov Daniil'}
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, vel debitis
                    voluptate fugit nemo id totam cum facere ad et eos nam ab quia sint accusamus cupiditate, voluptatum fugiat ea! Ullam
                    et perspiciatis alias voluptates, minima cumque hic corrupti optio"
            />
            <Post
                name={'Simonov Daniil'}
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, vel debitis
                    voluptate fugit nemo id totam cum facere ad et eos nam ab quia sint accusamus cupiditate, voluptatum fugiat ea! Ullam
                    et perspiciatis alias voluptates, minima cumque hic corrupti optio"
            />
        </div>
    );
}

export default PostsWall;