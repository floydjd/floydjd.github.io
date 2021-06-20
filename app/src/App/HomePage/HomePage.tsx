import React from 'react';
import { Box, Typography } from '@material-ui/core';
import JumboText from './JumboText';

const HomePage: React.FC = () => (
  <Box display="flex" flexDirection="column" alignItems="center" lineHeight="4">
    <JumboText>
      Jordan Floyd
    </JumboText>
    <Typography variant="h5">
      Software Developer
    </Typography>
  </Box>
);

export default HomePage;
