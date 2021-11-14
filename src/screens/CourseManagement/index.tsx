import { DrawerMenu } from 'components/DrawerMenu';
import CourseContainer from 'components/CourseContainer';
import { makeStyles } from '@mui/styles';
import { Typography } from '@mui/material';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%'
  },
  courses: {
    display: 'inline-flex',
    flexWrap: 'wrap',
    width: '100%',
    margin: 'auto'
  }
})

export const CourseManagement = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <DrawerMenu type={2} />
      <Typography variant="h6" component="div" ml={2} mt={1}>
        Tổng số khóa học: 6
      </Typography>
      <div className={classes.courses}>
        <CourseContainer />
        <CourseContainer />
        <CourseContainer />
        <CourseContainer />
        <CourseContainer />
        <CourseContainer />
      </div>
    </div>
  )
}
