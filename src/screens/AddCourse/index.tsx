import { makeStyles } from '@mui/styles';
import { Button, Box, styled, Typography, Stack } from '@mui/material';
import { Formik, FormikProps } from 'formik';
import * as yup from 'yup';
import { MouseEventHandler, useRef } from 'react';
import { CustomTextField } from 'components/CustomTextField';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import MovieCreationIcon from '@mui/icons-material/MovieCreation';

export interface CourseForm {
  courseName?: string;
  courseNumber?: string;
  description?: string;
  videoUrl?: string;
  thumbnail?: string;
  tag?: string;
}

export interface AddCourseProps {
  onClose?: () => void;
  onSubmit?: (value: CourseForm) => void;
}

const schema = yup.object().shape({
  courseName: yup.string().required('Vui lòng nhập tên khóa học'),
  courseNumber: yup.string().required('Vui lòng nhập mã khóa học'),
  description: yup.string().required('Vui lòng nhập mô tả'),
  videoUrl: yup
    .string()
    .matches(
      /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
      'Vui lòng nhập đúng định dạng '
    ),
  thumbnail: yup
    .string()
    .matches(
      /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
      'Vui lòng nhập đúng định dạng '
    ),
});

const useStyles = makeStyles({
  row: {
    display: 'flex',
    justifyContent: 'space-around',
  },
});

const Input = styled('input')({
  display: 'none',
});

export const AddCourse = (props: AddCourseProps) => {
  const classes = useStyles();

  const form = useRef<FormikProps<CourseForm> | null>(null);
  const formData = useRef<CourseForm>({});

  const handleSubmit = (value) => {
    props.onSubmit(value);
  };

  return (
    <Formik
      validationSchema={schema}
      initialValues={formData.current}
      onSubmit={handleSubmit}
      innerRef={(instance) => (form.current = instance)}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors, isValid, touched }) => (
        <Box component='form' autoComplete='off'>
          <CustomTextField
            title='Mã khóa học*'
            hint='Nhập mã khóa học'
            onBlur={handleBlur('courseNumber')}
            onTextChange={handleChange('courseNumber')}
            error={touched.courseNumber && errors.courseNumber !== undefined}
            value={values.courseNumber}
            errorText={errors.courseNumber as string}
          />
          <CustomTextField
            title='Tên khóa học*'
            hint='Nhập tên khóa học'
            onBlur={handleBlur('courseName')}
            onTextChange={handleChange('courseName')}
            error={touched.courseName && errors.courseName !== undefined}
            value={values.courseName}
            errorText={errors.courseName as string}
          />
          <CustomTextField
            title='Mô tả*'
            hint='Nhập mô tả khóa học'
            onBlur={handleBlur('description')}
            onTextChange={handleChange('description')}
            value={values.description}
            error={touched.description && errors.description !== undefined}
            errorText={errors.description as string}
          />
          <CustomTextField
            title='Tag'
            hint='Enter tag'
            onBlur={handleBlur('tag')}
            onTextChange={handleChange('tag')}
            value={values.tag}
            error={touched.tag && errors.tag !== undefined}
            errorText={errors.tag as string}
          />
          <div className={classes.row}>
            <Box>
              <Typography variant='subtitle2' color='text.secondary' textAlign='center'>
                Ảnh bìa
              </Typography>
              <label htmlFor='thumbnail'>
                <Input accept='image/*' id='thumbnail' type='file' />
                <Button variant='contained' component='span' startIcon={<PhotoCameraIcon />}>
                  Thêm ảnh
                </Button>
              </label>
            </Box>
            <Box>
              <Typography variant='subtitle2' color='text.secondary' textAlign='center'>
                Video giới thiệu
              </Typography>
              <label htmlFor='video'>
                <Input accept='video/*' id='video' type='file' />
                <Button variant='contained' component='span' startIcon={<MovieCreationIcon />}>
                  Thêm video
                </Button>
              </label>
            </Box>
          </div>
          <Stack spacing={10} direction='row' sx={{ justifyContent: 'center', mt: 5 }}>
            <Button onClick={props.onClose}>Hủy bỏ</Button>
            <Button
              onClick={
                handleSubmit as unknown as MouseEventHandler<HTMLButtonElement>
                // () => console.log('123')
              }
              variant='contained'
            >
              Xác nhận
            </Button>
          </Stack>
        </Box>
      )}
    </Formik>
  );
};
