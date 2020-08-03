import React from "react";
import Login from "./Login"
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));
// const history = useHistory();



const Header = () => {
  const history = useHistory();
  //metodo para entrar no Login.js, atraves de onClick=
  const entrarLogin = () => {
    history.replace("/Login");
  }
  const handlerLogin = () => {
    history.replace("/Login");
  }
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
            </Typography>
          <Button color="inherit" onClick={entrarLogin}>Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;