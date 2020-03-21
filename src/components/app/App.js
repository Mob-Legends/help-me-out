import React from 'react';
import {
  BrowserRouter as Router, Switch, Route, Link,
} from 'react-router-dom';
import { Header } from '../header/Header';
import { Footer } from '../footer/Footer';
import { Home } from '../home/Home';

export const App = () => (
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
);
