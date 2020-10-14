import React from 'react';
import {render} from '@testing-library/react';
import App from './App';
import store from "./redux/reduxStore";
import {Provider} from "react-redux";

test('pass test', () => {
    const {getByText} = render(
        <Provider store={store}>
            <App/>
        </Provider>
    );
});
