import { useEffect, useRef } from 'react';
import { Box, Button, Paper, Theme, Typography } from '@mui/material/';
import { makeStyles } from '@mui/styles';
import * as yup from 'yup';
import { useAppDispatch } from 'app/hooks';
import { CustomTextField } from 'components/CustomTextField';
import { Formik, FormikProps } from 'formik';
import { authActions } from '../../features/auth/authSlice';
import { useNavigate } from 'react-router-dom';
import axiosClient from 'api/axiosClient';

export interface LoginForm {
  username: string;
  password: string;
}

const schema = yup.object().shape({
  username: yup.string().required('Vui lòng nhập tên đăng nhập'),
  password: yup.string().required('Vui lòng nhập mật khẩu'),
});

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
    // width: '30%',
    padding: 30,
    display: 'flex',
    flexDirection: 'column',
  },
}));

export const Login = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const form = useRef<FormikProps<LoginForm> | null>(null);
  const formData = useRef<LoginForm>({
    username: '',
    password: '',
  });

  const goToRegister = () => {
    navigate(`/register`);
  };

  const handleLoginClick = () => {
    dispatch(
      authActions.login({
        username: '',
        password: '',
      })
    );
  };

  const onSubmit = async (form: LoginForm) => {
    // const params = new URLSearchParams();
    // params.append('email', form.username);
    // params.append('password', form.password);

    var params = new URLSearchParams();
    params.append('email', 'linh@gmail.com');
    params.append('password', '123456');

    const res = await axiosClient.post('', params, {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'X-CSRFToken': 'Qel55jkbjdafz3y73N9IrKCuNhLO0VyHaSYFvU472ZSGQPtVakoSx3m7ZKPU5hwY',
        Cookies:
          'edx_session=1|ajcsdm05i8c5srqjetbhtzwtlz1gba48|aOo80P6xLUw6|IjAwNmUzMThmMTgwZjJiOWNiMGY5YmQ3MzZhYmRmNjczNzAzZTczMjQwOWNjYzRmMWYwMjk0NDBmMTc5M2UyMTMi:1myG6H:RP9tspzfqHGqhYUn49LX7JCwp78; csrftoken=Qel55jkbjdafz3y73N9IrKCuNhLO0VyHaSYFvU472ZSGQPtVakoSx3m7ZKPU5hwY',
      },
    });
    console.log(res.data);
  };

  return (
    <div className={classes.root}>
      <Paper elevation={1} className={classes.box}>
        <Typography variant='h5' component='h1' align='center' mb={2}>
          Đăng nhập 1
        </Typography>
        <Formik
          validationSchema={schema}
          initialValues={formData.current}
          onSubmit={onSubmit}
          innerRef={(instance) => (form.current = instance)}
          validateOnMount
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors, isValid, touched }) => (
            <Box component='form' autoComplete='off'>
              <CustomTextField
                title='Tên đăng nhập'
                hint='Nhập tên đăng nhập'
                onBlur={handleBlur('username')}
                onTextChange={handleChange('username')}
                error={touched.username && errors.username !== undefined}
                value={values.username}
                errorText={errors.username}
              />
              <CustomTextField
                title='Mật khẩu'
                hint='Nhập mật khẩu'
                onBlur={handleBlur('password')}
                onTextChange={handleChange('password')}
                error={touched.password && errors.password !== undefined}
                value={values.password}
                errorText={errors.password}
              />

              <Box mt={4}>
                <Button
                  disabled={!isValid}
                  fullWidth
                  variant='contained'
                  color={isValid ? 'primary' : 'secondary'}
                  onClick={() => handleSubmit()}
                >
                  Login
                </Button>
              </Box>
            </Box>
          )}
        </Formik>
        <Button onClick={goToRegister}>
          <Typography variant='body2' align='center' mt={5}>
            Chưa có tài khoản? Đăng ký ngay
          </Typography>
        </Button>
      </Paper>
    </div>
  );
};
