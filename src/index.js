import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from "./data/reduxStore";
import {Provider} from "react-redux";

let reRender = () => {
    ReactDOM.render(
        <React.StrictMode>
            <Provider store={store}>
                <App/>
            </Provider>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
reRender();
store.subscribe(() => {
    reRender();
});

serviceWorker.unregister();
