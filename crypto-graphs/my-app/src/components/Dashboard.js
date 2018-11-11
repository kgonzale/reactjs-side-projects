import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { loadCSS } from "fg-loadcss/src/loadCSS";
import Icon from "@material-ui/core/Icon";
import classNames from "classnames";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary
  }
});

function CenteredGrid(props) {
  const { classes } = props;

  //name, symbol
  //price
  //percent change 1h, 7d, 24hr

  loadCSS(
    "https://use.fontawesome.com/releases/v5.1.0/css/all.css",
    document.querySelector("#insertion-point-jss")
  );

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Icon className={classNames(classes.icon, "fab fa-bitcoin")} />
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            {" "}
            <Icon className={classNames(classes.icon, "fab fa-bitcoin")} />
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>Name</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>Price</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default withStyles(styles)(CenteredGrid);
