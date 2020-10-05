import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import state, {addPost, sortPosts} from "./Data/State";

test('renders Home link', () => {
  const { getByText } = render(<App appState={state} addPost={addPost} sortPosts={sortPosts}/>);
  const linkElement = getByText("Home");
  expect(linkElement).toBeInTheDocument();
});
