import { styled, Box } from '@material-ui/core';

const JumboText = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  fontSize: theme.typography.h2.fontSize,
  letterSpacing: theme.spacing(1),
}));

export default JumboText;
