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
  ListItemIcon,
  ListItemText,
  List,
  ListItemButton,
  Collapse,
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
import { ExpandLess, ExpandMore, StarBorder } from '@mui/icons-material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ScrollTopButton from 'components/ScrollTopButton';
import { useAppSelector } from 'redux/hooks';
import { useParams } from 'react-router';
import { RootState } from 'redux/stores';
import { AddCourse } from 'screens/AddCourse';
import { getCourseDetail } from './actions';
import { useDispatch } from 'react-redux';
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
    alignitems: 'center',
    width: '100%',
    padding: 10,
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

const createData = (
  avatar: String,
  name: String,
  date: String,
  email: String,
  userStatus: String
) => {
  return { avatar, name, date, email, userStatus };
};

const rows = [
  createData('1', 'Nguyễn Văn A', '01/01/2020', '10', 'Active'),
  createData('1', 'Nguyễn Văn A', '01/01/2020', '10', 'Active'),
  createData('1', 'Nguyễn Văn A', '01/01/2020', '10', 'Active'),
];

interface CourseDetailProps {}

export const CourseDetail = (props: CourseDetailProps) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [dialog, setDialog] = useState(false);
  const data = useAppSelector((state: RootState) => state.course.courseDetail);
  const [tab, setTab] = useState(0);
  const handleChangeTab = (event: React.SyntheticEvent, value: number) => {
    setTab(value);
  };
  const [open, setOpen] = useState(false);

  const closeDialog = () => {
    setDialog(false);
  };

  let { id } = useParams();
  useEffect(() => {
    dispatch(getCourseDetail(id));
  }, []);

  const openDialog = () => {
    setDialog(true);
  };

  const handleClick = () => {
    setOpen(!open);
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
    <React.Fragment>
      <Paper sx={{ display: 'flex', position: 'relative' }}>
        <Paper className={classes.container} component='main'>
          <Typography variant='h4' gutterBottom component='div'>
            {data?.name}
          </Typography>
          <Typography variant='subtitle1' gutterBottom component='div'>
            {data?.short_description}
          </Typography>
          <Box>
            <CardMedia
              component='img'
              image='http://www.learnod.com/img/courses/technical-analysis-online-course.jpg'
              alt='Paella dish'
            />

            <Box sx={{ mt: 2 }}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider', width: '100%' }}>
                <Tabs value={tab} onChange={handleChangeTab} aria-label='basic tabs example'>
                  <Tab label='Thông tin' />
                  <Tab label='Học viên' />
                  <Tab label='Hỏi đáp' />
                </Tabs>
              </Box>
              <TabPanel value={tab} index={0}>
                <Typography
                  dangerouslySetInnerHTML={{ __html: data?.overview != null ? data?.overview : '' }}
                ></Typography>
              </TabPanel>
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
                      <Typography
                        // sx={{ flex: '1 2 100%' }}
                        variant='h6'
                        id='tableTitle'
                        component='div'
                      >
                        Tổng số học viên: 10
                      </Typography>
                      <Stack
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
                      </Stack>
                    </Stack>
                  </Toolbar>
                  <TableContainer component={Paper} sx={{ mt: 2, maxHeight: 500 }}>
                    <Divider />
                    <Table stickyHeader aria-label='sticky table'>
                      <TableHead>
                        <TableRow>
                          <TableCell align='center'>Họ và tên</TableCell>
                          <TableCell align='center'>Ngày làm bài</TableCell>
                          <TableCell align='center'>Điểm</TableCell>
                          <TableCell align='center'>Status</TableCell>
                          <TableCell align='center'>Actions</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rows.map((row, index) => (
                          <TableRow hover key={index}>
                            <TableCell scope='row'>
                              <Stack
                                padding='0'
                                direction='row'
                                spacing={1}
                                alignItems='center'
                                justifyContent='center'
                              >
                                <Avatar
                                  alt='Remy Sharp'
                                  src='https://www.w3schools.com/howto/img_avatar.png'
                                />
                                <Typography>{row.name}</Typography>
                              </Stack>
                            </TableCell>
                            <TableCell align='center'>{row.date}</TableCell>
                            <TableCell align='center'>{row.email}</TableCell>
                            <TableCell align='center'>
                              <Box className={classes.status}>{row.userStatus}</Box>
                            </TableCell>
                            <TableCell align='center'>
                              <IconButton color='primary' aria-label='center' component='span'>
                                <InfoOutlinedIcon />
                              </IconButton>
                              <IconButton color='primary' aria-label='center' component='span'>
                                <EditOutlinedIcon />
                              </IconButton>
                              <IconButton color='primary' aria-label='center' component='span'>
                                <DeleteOutlineOutlinedIcon />
                              </IconButton>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Paper>
              </TabPanel>
              <TabPanel value={tab} index={2}>
                Tab 3
              </TabPanel>
            </Box>
          </Box>
        </Paper>
        <List
          sx={{
            width: '100%',
            maxWidth: 360,
            bgcolor: 'background.paper',
            position: 'relative',
            overflow: 'auto',
            height: 1,
            '& ul': { padding: 0 },
          }}
          subheader={<li />}
        >
          {[0, 1, 2, 3, 4].map((sectionId) => (
            <li key={`section-${sectionId}`}>
              <ul>
                <ListItemButton onClick={handleClick}>
                  <ListItemText primary={`Bài ${sectionId + 1}`} />
                  {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open} timeout='auto' unmountOnExit>
                  <List component='div' disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>
                      <ListItemIcon>
                        <StarBorder />
                      </ListItemIcon>
                      <ListItemText primary='Starred' />
                    </ListItemButton>
                  </List>
                </Collapse>
              </ul>
            </li>
          ))}
        </List>
      </Paper>
      <ScrollTopButton {...props}>
        <Fab color='primary' size='medium' aria-label='scroll back to top'>
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTopButton>
    </React.Fragment>
  );
};
