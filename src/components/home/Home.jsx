import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

export const EXAMPLE_QUERY = gql`
  query getExample($currency: String!) {
    rates(currency: $currency) {
      currency
      rate
    }
  }
`;

export const Home = () => {
  const { loading, error, data } = useQuery(EXAMPLE_QUERY, {  variables: { currency: 'USD' } });

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error :(</p>;
  }

  return data.rates.map(({ currency, rate }) => (
    <div key={currency}>
      <p>{currency}: {rate}</p>
    </div>
  ));
};
