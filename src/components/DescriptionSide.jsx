import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    height: "100vh",
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(4),
    backgroundImage: `url('path_to_your_image.jpg')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "#fff",
  },
  description: {
    marginTop: theme.spacing(2),
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,
  },
}));

const DescriptionSide = () => {
  const classes = useStyles();

  return (
    <Grid item xs={false} sm={4} md={7} className={classes.root}>
      <Paper className={classes.paper} elevation={6} square>
        <Typography component="h1" variant="h5">
          Welcome to Our Platform
        </Typography>
        <Typography className={classes.description} variant="body1">
          Discover amazing features and connect with a vibrant community. Join us now to start your journey!
        </Typography>
      </Paper>
    </Grid>
  );
};

export default DescriptionSide;
