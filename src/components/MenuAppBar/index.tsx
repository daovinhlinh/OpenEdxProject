import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import PeopleIcon from '@mui/icons-material/People';
import AppsIcon from '@mui/icons-material/Apps';
import { useLocation } from 'react-router';
import { Drawer, Divider, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { NavLink } from 'react-router-dom';

interface PathList {
  [key: string]: string;
}

const titles: PathList = {
  '/': 'Homepage',
  '/course': 'Courses',
  '/admin': 'Admin',
  '/add': 'Add Course',
  '/user': 'User',
};

const list = [
  {
    title: 'Home',
    route: '/',
    icon: <HomeIcon />,
  },
  {
    title: 'Courses',
    route: '/course',
    icon: <MenuBookIcon />,
  },
  {
    title: 'Users',
    route: '/user',
    icon: <PeopleIcon />,
  },
];

const drawerWidth = 300;

const useStyles = makeStyles({
  root: {
    width: drawerWidth,
  },
  drawer: {
    paddingTop: 30,
    minHeight: '100vh',
    width: '20%',
  },
  box: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',

    height: '100%',
  },
  link: {
    textDecoration: 'none',
    color: '#626262',
    '&.active > div': {
      backgroundColor: '#E8E8E8',
    },
  },
});

export default function MenuAppBar() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const location = useLocation();
  const [title, setTitle] = useState(titles['/']);
  const [drawer, setDrawer] = useState(false);
  const classes = useStyles();

  const toggleDrawer = () => {
    setDrawer(!drawer);
  };

  useEffect(() => {
    setTitle(titles[location.pathname]);
  }, [location.pathname]);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  if (location.pathname === '/login' || location.pathname === '/register') {
    return null;
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static' id='appbar'>
        <Toolbar>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ mr: 2 }}
            onClick={toggleDrawer}
          >
            <MenuIcon />
            <Drawer
              variant={'temporary'}
              anchor='left'
              onClose={toggleDrawer}
              classes={{ paper: classes.drawer }}
              className={classes.root}
              open={drawer}
            >
              <Typography
                sx={{ fontSize: 20 }}
                color='text.primary'
                variant='h3'
                textAlign='center'
              >
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
                    <NavLink to={item.route} className={classes.link} key={item.title}>
                      <ListItem button>
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText primary={item.title} />
                      </ListItem>
                    </NavLink>
                  ))}
                </List>
                <div>
                  <Divider />
                  <ListItem button key={'Log out'}>
                    <ListItemIcon>
                      <LogoutIcon />
                    </ListItemIcon>
                    <ListItemText primary={'Log out'} />
                  </ListItem>
                </div>
              </Box>
            </Drawer>
          </IconButton>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            {title}
          </Typography>

          <div>
            <IconButton
              size='large'
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleMenu}
              color='inherit'
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Log out</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
