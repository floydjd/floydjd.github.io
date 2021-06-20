import React from 'react';
import { AppBar, Box, Toolbar } from '@material-ui/core';

const NavBar: React.FC = ({ children }) => (
  <AppBar position="static">
    <Toolbar>
      <Box display="flex" flex="1" flexDirection="row" justifyContent="center" minHeight="inherit">
        {children}
      </Box>
    </Toolbar>
  </AppBar>
);

export default NavBar;
