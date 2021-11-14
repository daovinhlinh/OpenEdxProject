import { Box, Button, Paper, Theme, Typography } from '@mui/material/';
import { makeStyles } from '@mui/styles';
import { useAppDispatch } from 'app/hooks';
import { authActions } from '../authSlice';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
  },

  box: {
    padding: 30,
  }
}));

const LoginPage = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();

  const handleLoginClick = () => {
    dispatch(
      authActions.login({
        username: '',
        password: '',
      })
    )
  }

  return (
    <div className={classes.root}>
      <Paper elevation={1} className={classes.box}>
        <Typography variant='h5' component='h1'>
          Stident management
        </Typography>
        <Box mt={4}>
          <Button fullWidth variant='contained' color='primary' onClick={handleLoginClick}>
            Login
          </Button>
        </Box>
      </Paper>
    </div>
  );
};

export default LoginPage;
