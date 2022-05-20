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
  data: any;
}

const useStyles = makeStyles({
  row: {
    display: 'flex',
    justifyContent: 'space-around',
  },
});

const Input = styled('input')({
  display: 'none',
});

export const UserDetail = (props: AddCourseProps) => {
  const classes = useStyles();
  const { data } = props;
  const form = useRef<FormikProps<CourseForm> | null>(null);
  const formData = useRef<CourseForm>({});

  const handleSubmit = (value) => {
    props.onSubmit(value);
  };

  console.log(data);

  return (
    <Box component='form' autoComplete='off'>
      <div>
        <Typography variant='h4' sx={{ fontSize: 20 }}>
          Họ và tên: 123
        </Typography>
        <Typography variant='h4' sx={{ fontSize: 20 }}>
          Họ và tên: 123
        </Typography>{' '}
        <Typography variant='h4' sx={{ fontSize: 20 }}>
          Họ và tên: 123
        </Typography>{' '}
        <Typography variant='h4' sx={{ fontSize: 20 }}>
          Họ và tên: 123
        </Typography>{' '}
        <Typography variant='h4' sx={{ fontSize: 20 }}>
          Họ và tên: 123
        </Typography>
      </div>

      <Stack spacing={10} direction='row' sx={{ justifyContent: 'center', mt: 5 }}>
        <Button onClick={props.onClose}>Hủy bỏ</Button>
        <Button
          onClick={handleSubmit as unknown as MouseEventHandler<HTMLButtonElement>}
          variant='contained'
        >
          Xác nhận
        </Button>
      </Stack>
    </Box>
  );
};
