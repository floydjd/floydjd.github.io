import { Box, createStyles, makeStyles, Theme } from "@material-ui/core";
import React from "react"

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
      React App
    </Box>
  );
}

export default App;
