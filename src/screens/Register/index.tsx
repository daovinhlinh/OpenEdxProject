import { useRef } from 'react';
import { Box, Button, Paper, Theme, Typography } from '@mui/material/';
import { makeStyles } from '@mui/styles';
import * as yup from 'yup';
import { useAppDispatch } from 'redux/hooks';
import { CustomTextField } from 'components/CustomTextField';
import { Formik, FormikProps } from 'formik';
import { serialize } from 'object-to-formdata';

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

export const Register = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const form = useRef<FormikProps<LoginForm> | null>(null);
  const formData = useRef<LoginForm>({
    username: '',
    password: '',
  });

  const onSubmit = async (form: LoginForm) => {
    let formData = serialize({
      email: form.username,
      password: form.password,
    });
    console.log(formData);
  };

  return (
    <div className={classes.root}>
      <Paper elevation={1} className={classes.box}>
        <Typography variant='h5' component='h1' align='center' mb={2}>
          Đăng ký
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
                title='Email'
                hint='Nhập email'
                onBlur={handleBlur('email')}
                onTextChange={handleChange('email')}
                error={touched.password && errors.password !== undefined}
                value={values.password}
                errorText={errors.password}
              />
              <CustomTextField
                title='Password'
                hint='Nhập mật khẩu'
                onBlur={handleBlur('password')}
                onTextChange={handleChange('password')}
                error={touched.password && errors.password !== undefined}
                value={values.password}
                errorText={errors.password}
              />
              <CustomTextField
                title='Họ và tên'
                hint='Nhập họ và tên'
                onBlur={handleBlur('name')}
                onTextChange={handleChange('name')}
                error={touched.password && errors.password !== undefined}
                value={values.password}
                errorText={errors.password}
              />
              <CustomTextField
                title='Checkbox'
                hint='Nhập email'
                onBlur={handleBlur('email')}
                onTextChange={handleChange('email')}
                error={touched.password && errors.password !== undefined}
                value={values.password}
                errorText={errors.password}
              />
              <CustomTextField
                title='Email'
                hint='Nhập email'
                onBlur={handleBlur('email')}
                onTextChange={handleChange('email')}
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
      </Paper>
    </div>
  );
};
