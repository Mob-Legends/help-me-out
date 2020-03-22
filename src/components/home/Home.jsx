import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

export const EXAMPLE_QUERY = gql`
  {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`;

export const Home = () => {
  const { loading, error, data } = useQuery(EXAMPLE_QUERY, {  variables: {} });

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
