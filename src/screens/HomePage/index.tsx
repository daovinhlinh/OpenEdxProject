import React, { useEffect, useState } from 'react';
import { DrawerMenu } from 'components/DrawerMenu';
import { Box, Typography } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import { useDispatch } from 'react-redux';
import { getListCourse } from 'screens/CourseManagement/actions';
import { useAppSelector } from 'redux/hooks';
import { getListUser } from 'screens/UserManagement/actions';
import { RootState } from 'redux/stores';
import CustomCard from 'components/CustomCard/';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexFlow: 'row',
  },

  detailPage: {
    display: 'flex',
    flexFlow: 'row wrap',
    paddingLeft: 20,
    paddingTop: 30,
  },
  tableContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
  },
  table: {
    flex: 1,
    paddingLeft: 20,
  },
});

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

export const HomePage = () => {
  const [tab, setTab] = useState(0);
  // const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const handleChangeTab = (event: React.SyntheticEvent, value: number) => {
    setTab(value);
  };

  const classes = useStyles();

  const listUser = useAppSelector((state: RootState) => state.user.listUser);
  const listCourse = useAppSelector((state: RootState) => state.course.listCourse);

  useEffect(() => {
    if (listUser == null) {
      dispatch(getListUser());
    }

    if (listCourse == null) {
      dispatch(getListCourse());
    }
  }, []);

  useEffect(() => {
    document.cookie =
      'sessionid=1|2796avqznb6ew4w7bzzw9enq4h1ukpgb|C03MAJScMyj3|Ijk1YWM0YTRlNjM3MmI5MWYzYWMwM2E2ZTBjNjBiM2I2MzJiZTFkZjAzNmZhMjA2YTU1YTJiYzExYzQ1YTE4Y2Mi:1nStKx:a1NMyRtw8u_RJrbtX6fz1kPBvxg';
  }, []);

  return (
    <div>
      <div className={classes.root}>
        <DrawerMenu type={2} />
        <div className={classes.detailPage}>
          <CustomCard
            heading='Số khóa học'
            title={listCourse != null ? listCourse.length : 0}
            subtitle='khóa'
            buttonText='Xem chi tiết'
            page='course'
          />
          <CustomCard
            heading='Số học sinh'
            title={listUser != null ? listUser.length : 0}
            subtitle='người'
            buttonText='Xem chi tiết'
            page='user'
          />
        </div>
      </div>
    </div>
  );
};
