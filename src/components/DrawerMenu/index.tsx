import { useState } from 'react';
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Drawer,
  Typography,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
import { makeStyles } from '@mui/styles';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const drawerWidth = 300;

const useStyles = makeStyles({
  root: {
    width: drawerWidth,
  },
  drawer: {
    paddingTop: 30,
    paddingLeft: 10,
    paddingRight: 10,
    minHeight: '100vh',
  },
  box: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
  },
});

export const DrawerMenu = ({ type }: { type: number }) => {
  const classes = useStyles();
  const [drawer, setDrawer] = useState(false);

  const toggleDrawer = () => {
    setDrawer(!drawer);
  };
  const list = [
    {
      title: 'Home',
      icon: <HomeIcon />,
    },
    {
      title: 'Courses',
      icon: <HomeIcon />,
    },
    {
      title: 'Users',
      icon: <HomeIcon />,
    },
    {
      title: 'Grades',
      icon: <HomeIcon />,
    },
  ];

  return (
    <div>
      <Drawer
        variant={type === 1 ? 'permanent' : 'temporary'}
        anchor='left'
        onClose={toggleDrawer}
        classes={{ paper: classes.drawer }}
        className={classes.root}
      >
        <Typography sx={{ fontSize: 20 }} color='text.primary' variant='h3' textAlign='center'>
          LMS Course Management
        </Typography>
        <Box
          role='presentation'
          onClick={toggleDrawer}
          onKeyDown={toggleDrawer}
          className={classes.box}
        >
          <List>
            {list.map((item, index) => (
              <ListItem button key={item.title}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.title} />
              </ListItem>
            ))}
          </List>
          <div>
            <Divider />
            <ListItem button key={'Log out'} onClick={() => console.log('hello')}>
              <Link to='login'>
                <ListItemIcon>
                  <LogoutIcon onClick={() => console.log('hello')} />
                </ListItemIcon>
                <ListItemText primary={'Log out'} />
              </Link>
            </ListItem>
          </div>
        </Box>
      </Drawer>
    </div>
  );
};
