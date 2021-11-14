import { Box, Button, Paper, Theme, Typography, TextField } from '@mui/material/';
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
    backgroundImage: `url(https://olc-wordpress-assets.s3.amazonaws.com/uploads/2019/10/E-Learning-with-blurred-city-abstract-lights-background.jpeg)`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
  box: {
    width: '30%',
    padding: 30,
    display: 'flex',
    flexDirection: 'column'
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
          Đăng nhập
        </Typography>
        <Box mt={2}>
          <TextField id="username" type="text" label="Tên đăng nhập" fullWidth required />
        </Box>
        <Box mt={2}>
          <TextField id="password" type="password" label="Mật khẩu" fullWidth required />
        </Box>
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
