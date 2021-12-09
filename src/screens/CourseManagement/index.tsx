import { useState, useEffect } from 'react';
import CourseContainer from 'components/CourseContainer';
import { makeStyles } from '@mui/styles';
import {
  Button,
  Stack,
  Typography,
  Grid,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  Backdrop,
  CircularProgress,
} from '@mui/material';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import SaveAltRoundedIcon from '@mui/icons-material/SaveAltRounded';
import { AddCourse } from 'screens/AddCourse';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadRounded';
import FilterListRoundedIcon from '@mui/icons-material/FilterListRounded';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { courseAction } from 'features/course/courseSlice';
import { RootState } from 'app/store';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignitems: 'center',
    width: '100%',
  },
  courses: {
    display: 'inline-flex',
    flexWrap: 'wrap',
    width: '100%',
    margin: 'auto',
  },
  function: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    paddingLeft: 15,
    paddingRight: 15,
  },
});

export const CourseManagement = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const data = useAppSelector((state: RootState) => state.course);
  const [loading, setLoading] = useState(true);
  const [dialog, setDialog] = useState(false);

  useEffect(() => {
    dispatch(courseAction.getCourse());
  }, []);

  useEffect(() => {
    if (data.loading == false) {
      setLoading(false);
      console.log(data.loading);
      console.log(data.courseList[0]);
    }
  }, [data]);

  const closeDialog = () => {
    setDialog(false);
  };

  const openDialog = () => {
    setDialog(true);
  };

  const AddCourseDialog = () => (
    <Dialog open={dialog} onClose={closeDialog}>
      <DialogTitle sx={{ textAlign: 'center' }}>Thêm khóa học</DialogTitle>
      <DialogContent>
        <AddCourse onClose={closeDialog} />
      </DialogContent>
    </Dialog>
  );

  return (
    <div className={classes.container}>
      <Stack direction='row' flexWrap='wrap' className={classes.function}>
        <Stack direction='row' spacing={5} flexWrap='wrap'>
          <Typography variant='h6' component='div'>
            Tổng số khóa học: {data.courseList.length}
          </Typography>
          <Button variant='contained' endIcon={<AddRoundedIcon />} onClick={openDialog}>
            Thêm khóa học
          </Button>
          <AddCourseDialog />
          <Button
            variant='outlined'
            endIcon={<FileUploadOutlinedIcon />}
            onClick={() => console.log('123')}
          >
            Nhập file CSV
          </Button>
          <Button variant='outlined' endIcon={<SaveAltRoundedIcon />}>
            Xuất file CSV
          </Button>
        </Stack>
        <Stack>
          <Button variant='contained' endIcon={<FilterListRoundedIcon />}>
            Lọc
          </Button>
        </Stack>
      </Stack>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {loading ? (
            <Backdrop
              sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
              open={loading}
            >
              <CircularProgress color='inherit' />
            </Backdrop>
          ) : (
            data.courseList.map((item, index) => (
              <Grid item xs={2} sm={4} md={4}>
                <CourseContainer data={item} key={index} />
              </Grid>
            ))
          )}
        </Grid>
      </Box>
    </div>
  );
};
