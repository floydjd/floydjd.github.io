import React from 'react';
import { styled } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

const NavBarLinkStyle = styled(NavLink)(({ theme }) => ({
  padding: theme.spacing(1),
  minHeight: 'inherit',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  cursor: 'pointer',
  textDecoration: 'none',
  color: theme.palette.getContrastText(theme.palette.background.default),
  '&:hover,&.selected': {
    backgroundColor: theme.palette.primary.dark,
    borderBottomWidth: '1px',
    borderBottomColor: theme.palette.primary.light,
    borderBottomStyle: 'solid',
  },
}));

export interface NavBarLinkProps {
  to: string;
}

const NavBarLink: React.FC<NavBarLinkProps> = ({ to, children }) => (
  <NavBarLinkStyle exact to={to} activeClassName="selected">
    {children}
  </NavBarLinkStyle>
);

export default NavBarLink;
