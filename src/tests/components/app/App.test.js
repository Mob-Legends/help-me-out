import React from 'react';
import { render } from '@testing-library/react';
import { MockedProvider } from '@apollo/react-testing';
import { App } from '../../../components/app/App';

test('renders the header and footer', () => {
  const { getByTestId } = render(<MockedProvider><App /></MockedProvider>);
  const header = getByTestId('header');
  const footer = getByTestId('footer');
  expect(header).toBeInTheDocument();
  expect(footer).toBeInTheDocument();
});
