import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { useNavigate } from "react-router-dom";

const MadeWithLove = () => (
  <Typography variant="body2" color="textSecondary" align="center">
    {/* {"Built with love by the "}
    <Link color="inherit" href="https://material-ui.com/">
      Material-UI
    </Link>
    {" team."} */}
  </Typography>
);

const useStyles = makeStyles(theme => ({
  root: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e2fff8", // Light background color for the page
  },
  paper: {
    padding: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)", // Subtle shadow for depth
    border: "1px solid #e0e0e0", // Light border for a clean look
    height: "100%", // Ensure the form takes the full height of the screen
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#209677",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    padding: theme.spacing(1.5),
    backgroundColor: "#209677",
    color: "#fff",
    '&:hover': {
      backgroundColor: "#176953",
    },
    width: "50%"
  },
  signInTitle: {
    marginBottom: theme.spacing(2),
    fontWeight: "bold",
    color: "#209677",
  },
  textField: {
    '& label.Mui-focused': {
      color: "#209677",
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: "#209677",
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: "#c4c4c4",
      },
      '&:hover fieldset': {
        borderColor: "#209677",
      },
      '&.Mui-focused fieldset': {
        borderColor: "#209677",
      },
    },
  },
  imageContainer: {
    height: "465px",
    width: "690px", // Reduce the size of the image
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderTopRightRadius: "10px",
    borderBottomRightRadius: "10px",
  },
}));

const SignInSide = () => {
  const classes = useStyles();
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSignIn = (e) => {
    e.preventDefault(); // Prevent default form submission
    // Your sign-in logic here
    // Assuming successful sign-in, navigate to "/home"
    navigate("/admin");
  };

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={12} sm={7} md={6} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <AccountBoxIcon />
          </Avatar>
          <Typography component="h1" variant="h5" className={classes.signInTitle}>
            Sign in
          </Typography>
          <form className={classes.form} noValidate onSubmit={handleSignIn}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username" // Change id from "email" to "username"
              label="Username" // Change label from "Email Address" to "Username"
              name="username" // Change name from "email" to "username"
              autoComplete="username" // Change autoComplete from "email" to "username"
              autoFocus
              className={classes.textField}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              className={classes.textField}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Link href="#" variant="body2">
              Forgot password?
            </Link>
            <Box mt={5}>
              <MadeWithLove />
            </Box>
          </form>
        </div>
      </Grid>
      <Grid item xs={false} sm={5} md={4} className={classes.imageContainer}>
        <img src="/myGirl.jpg" alt="login" className={classes.imageContainer} />
      </Grid>
    </Grid>
  );
};

export default SignInSide;
