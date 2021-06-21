import React from 'react';
import {
  Box, styled, Typography,
} from '@material-ui/core';
import { Web, Storage } from '@material-ui/icons';
import JumboText from './JumboText';
import InfoCard from './InfoCard';
import InfoCardTitle from './InfoCardTitle';
import { ReactComponent as NodeJSIcon } from './node.svg';
import { ReactComponent as GqlIcon } from './graphql.svg';
import { ReactComponent as ReactIcon } from './react.svg';
import { ReactComponent as TsIcon } from './typescript.svg';
import { ReactComponent as AngularIcon } from './angular.svg';
import { ReactComponent as ScalaIcon } from './scala.svg';
import { ReactComponent as MaterialIcon } from './material.svg';
import { ReactComponent as GoIcon } from './go.svg';
import CypressIcon from './cypress.png';

const ColumnList = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  margin: theme.spacing(1),
}));

const IconPoint = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  margin: theme.spacing(1),
  '& svg,img': {
    width: '20px',
    height: 'auto',
    marginRight: theme.spacing(2),
  },
}));

const HomePage: React.FC = () => (
  <Box display="flex" flexDirection="column" alignItems="center">
    <JumboText>
      Jordan Floyd
    </JumboText>
    <Typography variant="h5">
      Software Developer
    </Typography>
    <Box display="flex" width="100%" flexDirection="row" justifyContent="space-around" paddingTop={6}>
      <InfoCard>
        <Web />
        <InfoCardTitle>
          Front End
        </InfoCardTitle>
        <ColumnList>
          <IconPoint>
            <TsIcon />
            TypeScript
          </IconPoint>
          <IconPoint>
            <ReactIcon />
            React
          </IconPoint>
          <IconPoint>
            <AngularIcon />
            Angular
          </IconPoint>
          <IconPoint>
            <MaterialIcon />
            Material UI
          </IconPoint>
          <IconPoint>
            <img src={CypressIcon} alt="Cypress Icon" />
            Cypress
          </IconPoint>
        </ColumnList>
      </InfoCard>
      <InfoCard>
        <Storage />
        <InfoCardTitle>
          Back End
        </InfoCardTitle>
        <ColumnList>
          <IconPoint>
            <TsIcon />
            TypeScript
          </IconPoint>
          <IconPoint>
            <NodeJSIcon />
            NodeJS
          </IconPoint>
          <IconPoint>
            <GqlIcon />
            GraphQL
          </IconPoint>
          <IconPoint>
            <ScalaIcon />
            Scala
          </IconPoint>
          <IconPoint>
            <GoIcon />
            Golang
          </IconPoint>
        </ColumnList>
      </InfoCard>
    </Box>
  </Box>
);

export default HomePage;
