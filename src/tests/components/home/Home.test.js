import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { MockedProvider } from '@apollo/react-testing';
import { Home, EXAMPLE_QUERY } from '../../../components/home/Home';

describe('Home', () => {
  const mocks = [
    {
      request: {
        query: EXAMPLE_QUERY,
        variables: {
          currency: 'USD'
        }
      },
      result: {
        data: {
          rates: [
            {
              currency: 'AED',
              rate: '3.673'
            }
          ]
        }
      }
    }
  ];

  it('renders the loading state initially', () => {
    const { getByText } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Home />
      </MockedProvider>
    );
    expect(getByText('Loading...')).toBeInTheDocument();
  });

  it('should render the result', async () => {
    const { getByText } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Home />
      </MockedProvider>
    );

    await waitFor(() => expect(getByText('AED: 3.673')).toBeInTheDocument());
  });
});
