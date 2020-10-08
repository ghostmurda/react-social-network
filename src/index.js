import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from "./data/reduxStore";

let reRender = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App appState={state}
                 dispatch={store.dispatch.bind(store)}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}
reRender(store.getState());
store.subscribe(() => {
    let state = store.getState();
    reRender(state);
});

serviceWorker.unregister();
