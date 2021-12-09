import { useState } from 'react';
import { makeStyles } from '@mui/styles';
import {
  Button,
  Stack,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  Table,
  TableContainer,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  Avatar,
  IconButton,
} from '@mui/material';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import SaveAltRoundedIcon from '@mui/icons-material/SaveAltRounded';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadRounded';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import FilterListRoundedIcon from '@mui/icons-material/FilterListRounded';
import { AddCourse } from 'screens/AddCourse';
import { Box } from '@mui/system';

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
  table: {
    minWidth: 650,
  },
  status: {
    padding: 7,
    backgroundColor: '#D2EBD3',
    display: 'inline-block',
    borderRadius: 50,
    color: '#9BD39E',
    fontWeight: 'bold',
  },
});

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
  createData('1', 'Nguyễn Văn A', '01/01/2020', 'a@gmail.com', 'Active'),
  createData('1', 'Nguyễn Văn A', '01/01/2020', 'a@gmail.com', 'Active'),
  createData('1', 'Nguyễn Văn A', '01/01/2020', 'a@gmail.com', 'Active'),
  createData('1', 'Nguyễn Văn A', '01/01/2020', 'a@gmail.com', 'Active'),
  createData('1', 'Nguyễn Văn A', '01/01/2020', 'a@gmail.com', 'Active'),
  createData('1', 'Nguyễn Văn A', '01/01/2020', 'a@gmail.com', 'Active'),
];

export const UserManagement = () => {
  const classes = useStyles();
  const [dialog, setDialog] = useState(false);

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
            Tổng số học viên: 6
          </Typography>
          <Button variant='contained' endIcon={<AddRoundedIcon />} onClick={openDialog}>
            Thêm học viên
          </Button>
          <AddCourseDialog />
          <Button variant='outlined' endIcon={<FileUploadOutlinedIcon />}>
            Nhập file csv
          </Button>
          <Button variant='outlined' endIcon={<SaveAltRoundedIcon />}>
            Xuất file csv
          </Button>
        </Stack>
        <Stack>
          <Button variant='contained' endIcon={<FilterListRoundedIcon />}>
            Lọc
          </Button>
        </Stack>
      </Stack>

      <TableContainer component={Paper} elevation={4} sx={{ mt: 2 }}>
        <Table className={classes.table} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>Học viên</TableCell>
              <TableCell align='left'>Ngày bắt đầu</TableCell>
              <TableCell align='left'>Email</TableCell>
              <TableCell align='left'>Status</TableCell>
              <TableCell align='center'>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={index}>
                <TableCell scope='row'>
                  <Stack direction='row' spacing={2} alignItems='center'>
                    <Avatar alt='Remy Sharp' src='https://www.w3schools.com/howto/img_avatar.png' />
                    <Typography>{row.name}</Typography>
                  </Stack>
                </TableCell>
                <TableCell align='left'>{row.date}</TableCell>
                <TableCell align='left'>{row.email}</TableCell>
                <TableCell align='left'>
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
    </div>
  );
};
