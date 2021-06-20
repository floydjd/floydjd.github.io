import React from 'react';
import {
  ThemeProvider, CssBaseline,
} from '@material-ui/core';
import {
  BrowserRouter, Switch, Route,
} from 'react-router-dom';
import { theme } from './theme';
import HomePage from './HomePage';

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <BrowserRouter>
      <Switch>
        <Route path="/resume">
          Resume Page
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
