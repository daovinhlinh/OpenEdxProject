import React, { useState, useEffect } from 'react';
import { makeStyles } from '@mui/styles';
import {
  Button,
  Stack,
  Typography,
  Box,
  CardMedia,
  Tabs,
  Tab,
  Table,
  TableContainer,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  Avatar,
  IconButton,
  Toolbar,
  Tooltip,
  Fab,
  Divider,
  Dialog,
  DialogTitle,
  DialogContent,
} from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import FilterListIcon from '@mui/icons-material/FilterList';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ScrollTopButton from 'components/ScrollTopButton';
import { useAppSelector } from 'redux/hooks';
import { useParams } from 'react-router';
import { RootState } from 'redux/stores';
import { AddCourse } from 'screens/AddCourse';
import { getCourseDetail, getCourseProgress, getCourseUser, getUserDetail } from './actions';
import { useDispatch } from 'react-redux';
import { format } from 'date-fns/esm';
import { useLocation } from 'react-router-dom';
import { UserDetail } from 'screens/UserDetail';
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
    padding: 20,
    flexGrow: 1,
  },
  tableContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
  },
  status: {
    padding: 7,
    backgroundColor: '#D2EBD3',
    display: 'inline-block',
    borderRadius: 50,
    color: '#9BD39E',
    fontWeight: 'bold',
  },
  active: {
    padding: 7,
    backgroundColor: '#D2EBD3',
    display: 'inline-block',
    borderRadius: 50,
    color: '#9BD39E',
    fontWeight: 'bold',
  },
  inActive: {
    padding: 7,
    backgroundColor: '#DC0005',
    display: 'inline-block',
    borderRadius: 50,
    color: '#FF8B8E',
    fontWeight: 'bold',
  },
  toolbar: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  fab: {
    position: 'absolute',
    bottom: 16,
    right: 16,
    zIndex: 100,
  },
});

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

interface CourseDetailProps {}

export const CourseDetail = (props: CourseDetailProps) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [userDialog, setUserDialog] = useState(false);
  const data = useAppSelector((state: RootState) => state.course.courseDetail);
  const users = useAppSelector((state: RootState) => state.course.courseUsers);
  const progress = useAppSelector((state: RootState) => state.course.courseProgress);
  const [tab, setTab] = useState(0);
  const handleChangeTab = (event: React.SyntheticEvent, value: number) => {
    setTab(value);
  };
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState([]);
  const [currentUser, setCurrentUser] = useState();
  const location = useLocation();

  let { id } = useParams();

  useEffect(() => {
    dispatch(getCourseDetail(id));
    dispatch(getCourseUser(id));
    dispatch(getCourseProgress(id));
  }, []);

  useEffect(() => {
    if (progress && data && users) {
      const newData = users.map((user) => {
        const userProgress = progress.find((element) => progress.username === element.user);
        return {
          ...user,
          ...userProgress,
        };
      });

      console.log(data.overview);

      setUserData(newData);
      setLoading(false);
    }
  }, [progress, data, users]);

  const openDialog = async (data) => {
    dispatch(getUserDetail(data.user));
    // console.log(data);

    setCurrentUser(data);
    setUserDialog(true);
  };

  const closeDialog = () => {
    setUserDialog(false);
  };

  const handleClick = () => {
    setOpen(!open);
  };

  const UserDetailDialog = () => (
    <Dialog open={userDialog} onClose={closeDialog}>
      <DialogTitle sx={{ textAlign: 'center' }}>Thông tin người dùng</DialogTitle>
      <DialogContent>
        <UserDetail onClose={closeDialog} data={currentUser} />
      </DialogContent>
    </Dialog>
  );

  if (loading) {
    return <div>Loading</div>;
  }

  return (
    <React.Fragment>
      <Paper sx={{ display: 'flex', position: 'relative', px: 7, mt: 3 }}>
        <UserDetailDialog />
        <Paper className={classes.container} component='main'>
          <Typography variant='h1' gutterBottom component='div'>
            {location.state?.name}
          </Typography>
          <Typography variant='subtitle1' gutterBottom component='div'>
            {location.state?.short_description}
          </Typography>
          <CardMedia
            component='img'
            image={location.state && location.state.media.image.large}
            alt='Image'
            sx={{ width: '70%', objectFit: 'cover', my: 5, alignSelf: 'center' }}
          />
          <Box>
            <Box sx={{ mt: 2 }}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider', width: '100%' }}>
                <Tabs value={tab} onChange={handleChangeTab} aria-label='basic tabs example'>
                  <Tab label='Thông tin' />
                  <Tab label='Học viên' />
                </Tabs>
              </Box>
              <TabPanel value={tab} index={0}>
                <Typography
                  dangerouslySetInnerHTML={{
                    __html: data?.overview != null ? data?.overview : '',
                  }}
                ></Typography>
              </TabPanel>
              {users && (
                <TabPanel value={tab} index={1}>
                  <Paper sx={{ width: '100%' }}>
                    <Toolbar
                      sx={{
                        pl: { sm: 2 },
                        pr: { xs: 1, sm: 1 },
                      }}
                    >
                      <Stack
                        direction={{ xs: 'column', sm: 'row' }}
                        spacing={{ xs: 1, sm: 2, md: 4 }}
                        className={classes.toolbar}
                      >
                        <Typography variant='h6' id='tableTitle' component='div'>
                          Tổng số học viên:
                          {users.length}
                        </Typography>
                        {/* <Stack
                          direction={{ xs: 'column', sm: 'row' }}
                          justifyContent='space-between'
                          spacing={{ xs: 1, sm: 2, md: 2 }}
                          sx={{ minWidth: 'auto' }}
                        >
                          <Tooltip title='Filter list'>
                            <Button
                              variant='contained'
                              endIcon={<AddRoundedIcon />}
                              onClick={openDialog}
                            >
                              Thêm
                            </Button>
                          </Tooltip>
                          <Tooltip title='Filter list'>
                            <Button
                              variant='outlined'
                              endIcon={<AddRoundedIcon />}
                              onClick={openDialog}
                            >
                              Nhập
                            </Button>
                          </Tooltip>
                          <Tooltip title='Filter list'>
                            <Button
                              variant='outlined'
                              endIcon={<AddRoundedIcon />}
                              onClick={openDialog}
                            >
                              Xuất
                            </Button>
                          </Tooltip>
                          <Tooltip title='Filter list'>
                            <IconButton>
                              <FilterListIcon />
                            </IconButton>
                          </Tooltip>
                        </Stack> */}
                      </Stack>
                    </Toolbar>
                    <TableContainer component={Paper} sx={{ mt: 2, maxHeight: 500 }}>
                      <Divider />
                      <Table stickyHeader aria-label='sticky table'>
                        <TableHead>
                          <TableRow>
                            <TableCell align='center'>Họ và tên</TableCell>
                            <TableCell align='center'>Ngày tạo</TableCell>
                            <TableCell align='center'>Trạng thái</TableCell>
                            <TableCell align='center'>Tiến trình</TableCell>
                            {/* <TableCell align='center'>Actions</TableCell> */}
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {userData.map((user, index) => (
                            <TableRow hover key={index}>
                              <TableCell align='center'>
                                <Typography>{user.user}</Typography>
                              </TableCell>
                              <TableCell align='center'>
                                {format(new Date(user.created), 'dd/MM/yyyy')}
                              </TableCell>

                              <TableCell align='center'>
                                <Box className={user.is_active ? classes.active : classes.inActive}>
                                  {user.is_active ? 'Kích hoạt' : 'Không kích hoạt'}
                                </Box>
                              </TableCell>
                              <TableCell align='center'>{user.percent}%</TableCell>
                              {/* <TableCell align='center'>
                                <IconButton color='primary' aria-label='center' component='span'>
                                  <InfoOutlinedIcon onClick={() => openDialog(user)} />
                                </IconButton>
                                <IconButton color='primary' aria-label='center' component='span'>
                                  <EditOutlinedIcon />
                                </IconButton>
                                <IconButton color='primary' aria-label='center' component='span'>
                                  <DeleteOutlineOutlinedIcon />
                                </IconButton>
                              </TableCell> */}
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </Paper>
                </TabPanel>
              )}
              <TabPanel value={tab} index={2}>
                Tab 3
              </TabPanel>
            </Box>
          </Box>
        </Paper>
      </Paper>
      <ScrollTopButton {...props}>
        <Fab color='primary' size='medium' aria-label='scroll back to top'>
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTopButton>
    </React.Fragment>
  );
};
