import { useEffect, useRef } from 'react';
import { Box, Button, Paper, Theme, Typography } from '@mui/material/';
import { makeStyles } from '@mui/styles';
import * as yup from 'yup';
import { CustomTextField } from 'components/CustomTextField';
import { Formik, FormikProps } from 'formik';
import { useNavigate } from 'react-router-dom';
import { login } from './actions';
import { useDispatch, useSelector } from 'react-redux';
import { useAppSelector } from 'redux/hooks';
import { RootState } from 'redux/stores';

export interface LoginForm {
  email: string;
  password: string;
}

const schema = yup.object().shape({
  email: yup.string().required('Vui lòng nhập email'),
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
  const dispatch = useDispatch();
  const loginData = useAppSelector((state: RootState) => state.app.loggedIn);
  const navigate = useNavigate();
  const form = useRef<FormikProps<LoginForm> | null>(null);
  const formData = useRef<LoginForm>({
    email: '',
    password: '',
  });

  const goToRegister = () => {
    navigate(`/register`);
  };

  const onSubmit = async (form: LoginForm) => {
    dispatch(login(form.email, form.password));
  };

  useEffect(() => {
    if (loginData) {
      console.log('logged in');

      navigate('/');
    }
  }, [loginData])

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
                onBlur={handleBlur('email')}
                onTextChange={handleChange('email')}
                error={touched.email && errors.email !== undefined}
                value={values.email}
                errorText={errors.email}
              />
              <CustomTextField
                title='Mật khẩu'
                hint='Nhập mật khẩu'
                onBlur={handleBlur('password')}
                onTextChange={handleChange('password')}
                error={touched.password && errors.password !== undefined}
                value={values.password}
                errorText={errors.password}
                isPassword={true}
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
