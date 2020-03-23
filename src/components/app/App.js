import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from "@apollo/react-hooks";
import {
  BrowserRouter as Router, Switch, Route
} from 'react-router-dom';
import { Header } from '../header/Header';
import { Footer } from '../footer/Footer';
import { Home } from '../home/Home';

// uri needs changing to the real thing when we're ready
const client = new ApolloClient({
  uri: 'https://48p1r2roz4.sse.codesandbox.io'
});

export const App = () => (
  <ApolloProvider client={client}>
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  </ApolloProvider>
);
