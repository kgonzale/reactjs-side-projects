import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { loadCSS } from "fg-loadcss/src/loadCSS";
import Icon from "@material-ui/core/Icon";
import classNames from "classnames";

const styles = theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 1200,
    justify: "center"
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary
  }
});

const Dashboard = props => {
  const { classes } = props;

  //name, symbol
  //price
  //percent change 1h, 7d, 24hr

  loadCSS(
    "https://use.fontawesome.com/releases/v5.1.0/css/all.css",
    document.querySelector("#insertion-point-jss")
  );

  const TokenGrid = ({ token }) => (
    <Grid container spacing={24}>
      <Grid item xs={1}>
        <Paper className={classes.paper}>
          {/* <Icon className={classNames(classes.icon, "fab fa-bitcoin")} /> */}
          {token.name}
        </Paper>
      </Grid>
      <Grid item xs={2}>
        <Paper className={classes.paper}>{token.quote.USD.price}</Paper>
      </Grid>
      <Grid item xs={3}>
        <Paper className={classes.paper}>
          {token.quote.USD.percent_change_1h}
        </Paper>
      </Grid>
      <Grid item xs={3}>
        <Paper className={classes.paper}>
          {token.quote.USD.percent_change_24h}
        </Paper>
      </Grid>
      <Grid item xs={3}>
        <Paper className={classes.paper}>
          {token.quote.USD.percent_change_7d}
        </Paper>
      </Grid>
    </Grid>
  );

  return (
    <div className={classes.root}>
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
      {/* {props.bitcoin && <TokenGrid token={props.bitcoin} />}
      {props.eth && <TokenGrid token={props.eth} />}
      {props.ltc && <TokenGrid token={props.ltc} />} */}

      {props.refinedResponse &&
        props.refinedResponse.map(item => {
          return <TokenGrid token={item} />;
        })}
    </div>
  );
};

export default withStyles(styles)(Dashboard);
