import 'jest-dom/extend-expect';
import 'react-testing-library/cleanup-after-each';
import React from 'react';
import App from './App';
import { render } from 'react-testing-library'

test('image have alt attribute', () => {
  const { getByAltText } = render(<App />)

  // should we do this?
  expect(getByAltText(/logo/).hasAttribute('alt')).toBe(true)

  // or should we get img tag instead and check if that has `alt` attribute, 
  // cuz right now, if something _other_ 
  // than image have `alt=logo` it'll still pass 🤔
});
