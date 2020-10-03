import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import state from "./Data/State";

test('renders Home link', () => {
  const { getByText } = render(<App appState={state}/>);
  const linkElement = getByText("Home");
  expect(linkElement).toBeInTheDocument();
});
