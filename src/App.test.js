import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import store from "./data/state";

test('renders Home link', () => {
  const { getByText } = render(<App appState={store.getState()}
                                    addPost={store.addPost.bind(store)}
                                    sortPosts={store.sortPosts.bind(store)}/>
                                    );
  const linkElement = getByText("Home");
  expect(linkElement).toBeInTheDocument();
});
