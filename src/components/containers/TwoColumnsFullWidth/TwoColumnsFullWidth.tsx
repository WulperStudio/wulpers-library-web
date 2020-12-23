import React, {ReactChild, ReactNode} from "react";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import {Container} from "@material-ui/core";
import useStyles from "./TwoColumnsFullWidth.styles";

export type TwoColumnsFullWidthProps = {
  align?: "left" | "right",
  innerSecondary?: ReactChild,
  children: ReactNode
}
TwoColumnsFullWidth.defaultProps = {
  align: "left"
}

export default function TwoColumnsFullWidth({align, innerSecondary, children}: TwoColumnsFullWidthProps) {
  const classes = useStyles();
  return (
    <Grid container component="main" className={classes.root}>
      {align === "right" && (
        <Grid item sm={false} md={6} container direction="row" justify="center" alignItems="center">
          {innerSecondary}
        </Grid>
      )}
      <Grid item sm={12} md={6} container direction="row" justify="center" alignItems="center">
        <Container component="main" maxWidth="sm">
          <Paper className={classes.paper}>{children}</Paper>
        </Container>
      </Grid>
      {align === "left" && (
        <Grid item sm={false} md={6} container direction="row" justify="center" alignItems="center">
          {innerSecondary}
        </Grid>
      )}
    </Grid>
  )
}