import React from 'react';
import { render } from '@testing-library/react';
import { App } from '../../../components/app/App';

test('renders the header and footer', () => {
  const { getByTestId } = render(<App />);
  const header = getByTestId('header');
  const footer = getByTestId('footer');
  expect(header).toBeInTheDocument();
  expect(footer).toBeInTheDocument();
});
