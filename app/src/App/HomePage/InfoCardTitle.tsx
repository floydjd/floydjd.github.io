import React from 'react';
import { Box } from '@material-ui/core';

const InfoCardTitle: React.FC = ({ children }) => (
  <Box fontWeight="fontWeightBold" margin="5px">
    {children}
    <hr />
  </Box>
);

export default InfoCardTitle;
