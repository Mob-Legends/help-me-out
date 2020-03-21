import React from 'react';
import { render } from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from "react-apollo";
import 'normalize.css';
import './styles/app.scss';
import * as Sentry from '@sentry/browser';
import { App } from './components/app/App';
import * as serviceWorker from './serviceWorker';

Sentry.init({
  dsn: process.env.REACT_APP_SENTRY,
});

// uri needs changing to the real thing when we're ready
const client = new ApolloClient({
  uri: 'https://48p1r2roz4.sse.codesandbox.io'
});

render(<ApolloProvider client={client}><App /></ApolloProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
