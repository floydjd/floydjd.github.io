import React from "react";
import { Box, createStyles, makeStyles, Theme } from "@material-ui/core";
import { Intro } from "@app/content";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: "100%",
      backgroundColor: theme.palette.background.default,
    },
  }),
);

function App() {
  const classes = useStyles();
  return (
    <Box className={classes.root} fontFamily="Monospace" textAlign="center">
      <Intro/>
    </Box>
  );
}

export default App;
