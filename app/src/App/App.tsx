import React from 'react';
import {
  Box, ThemeProvider, CssBaseline,
} from '@material-ui/core';
import {
  BrowserRouter, Switch, Route,
} from 'react-router-dom';
import { theme } from './theme';
import NavBar from './NavBar';
import NavBarLink from './NavBarLink';

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <BrowserRouter>
      <NavBar>
        <NavBarLink to="/">
          Home
        </NavBarLink>
        <NavBarLink to="/resume">
          Resume
        </NavBarLink>
      </NavBar>
      <Switch>
        <Route path="/resume">
          Resume Page
        </Route>
        <Route path="/">
          <Box>
            Jordan Floyd
          </Box>
        </Route>
      </Switch>
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
