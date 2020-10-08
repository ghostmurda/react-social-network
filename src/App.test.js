import React from 'react';
import {render} from '@testing-library/react';
import App from './App';
import store from "./data/store";
import {Provider} from "react-redux";

test('renders Home link', () => {
    const {getByText} = render(
        <Provider store={store}>
            <App appState={store.getState()}
                 dispatch={store.dispatch.bind(store)}
            />
        </Provider>
    );
    const linkElement = getByText("Home");
    expect(linkElement).toBeInTheDocument();
});
