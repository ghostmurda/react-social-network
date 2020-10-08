import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from "./data/reduxStore";
import {Provider} from "react-redux";

let reRender = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <Provider store={store}>
                <App appState={state}
                     dispatch={store.dispatch.bind(store)}
                />
            </Provider>
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
