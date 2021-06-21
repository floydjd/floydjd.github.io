import React from 'react';
import { Box, Card } from '@material-ui/core';

const InfoCard: React.FC = ({ children }) => (
  <Card>
    <Box display="flex" flexDirection="column" alignItems="center" padding={1} maxWidth={200}>
      {children}
    </Box>
  </Card>
);

export default InfoCard;
