import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';


TwoColumnsFullWidth.defaultProps ={
  align = "left"
}

export default function TwoColumnsFullWidth({align, innerSecondary}:TwoColumnsFullWidthProps) {
  return (
    <Grid container component="main" className={classes.root}>
      <Grid item xs={false} sm={4} md={7}>
        {innerSecondary}
      </Grid>
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        hola
      </Grid>
    </Grid>
  )
}