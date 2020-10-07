import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import store from "./data/store";

test('renders Home link', () => {
  const { getByText } = render(<App appState={store.getState()}
                                    dispatch={store.dispatch.bind(store)}/>
                                    );
  const linkElement = getByText("Home");
  expect(linkElement).toBeInTheDocument();
});
