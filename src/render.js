import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, sortPosts} from "./Data/State";

export let reRender = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App appState={state} addPost={addPost} sortPosts={sortPosts}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
