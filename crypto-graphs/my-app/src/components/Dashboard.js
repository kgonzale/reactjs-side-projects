import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import classNames from "classnames";
import "../loading.css";

const styles = theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 1400,
    justifyContent: "center"
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  button: {
    margin: theme.spacing.unit,
    justifyContent: "center"
  }
});

const Dashboard = props => {
  const { classes } = props;

  const TokenGrid = ({ token }) => (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={1}>
          <Paper className={classes.paper}>{token.name}</Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper}>{token.price}</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>{token.oneHr}</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>{token.twentyFourHr}</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>{token.sevenDays}</Paper>
        </Grid>
      </Grid>
    </div>
  );

  return (
    <div className={classes.root}>
      <div>
        <Button
          id="center"
          variant="contained"
          className={classNames(classes.button)}
          onClick={() => props.button(1)}
          color="primary"
        >
          Decreasing Order
        </Button>
        <Button
          id="center"
          variant="contained"
          onClick={() => props.button(-1)}
          color="primary"
          className={classNames(classes.button)}
        >
          Increasing Order
        </Button>
      </div>
      <Grid container spacing={24} justify="center">
        <Grid item xs={1}>
          <Paper className={classes.paper}>Crypto</Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper}>Price</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>Percent Change: 1hr</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>Percent Change: 24hr</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>Percent Change: 7d</Paper>
        </Grid>
      </Grid>
      {props.refinedResponse &&
        props.refinedResponse.map((item, index) => {
          return <TokenGrid token={item} key={index} />;
        })}
    </div>
  );
};

export default withStyles(styles)(Dashboard);
