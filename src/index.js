import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from "./data/state";

let reRender = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App appState={store.getState()}
                 dispatch={store.dispatch.bind(store)}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}
reRender();
store.subscribe(reRender);

serviceWorker.unregister();
