// adapted from: https://mui.com/components/drawers/#PersistentDrawerLeft.js
import React, { useState, useEffect } from 'react'
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { SidebarData } from './SidebarData';
import { Link, useLocation } from "react-router-dom";
import Dashboard from "../pages/Dashboard/Dashboard";
import Profile from "../pages/Profile/Profile";
import Messages from "../pages/Messages/Messages";
import Settings from "../pages/Settings/Settings";
import Diseases from "../pages/Diseases/Diseases";
import Appointments from "../pages/Appointments/Appointments";
import ChangePassword from "../pages/ChangePassword/ChangePassword";
import DioDocHome from "../pages/DioDocHome/DioDocHome";
import useStyles from "./styles";


// for the drawer
const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  backgroundColor: "rgba(0,183,255,1)",
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  // end of for the drawer

  // constants
  const location = useLocation();
  const classes = useStyles();

  const logout = () => {
    console.log("logged out");
  };

  return (

    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Link className={classes.text} to="/">
            <Typography className={classes.text} variant="h4">Dio-Doc</Typography>
          </Link>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        
        <List>
            {SidebarData.map((item) => (
              <div key={item.title}>
                  <ListItem button component={Link} to={item.path} >
                          {/* The icon for each item in side bar */}
                          <ListItemIcon>{item.icon}</ListItemIcon>
                          {/* The text for each item in side bar */}
                          <ListItemText primary={item.title} />
                  </ListItem>
                  <Divider />
                </div>
            ))}
        </List>
      </Drawer>

      <Main open={open}>
        <DrawerHeader />
        {location.pathname === "/" ? <DioDocHome /> :
        location.pathname === "/dashboard" ? <Dashboard /> : 
        location.pathname === "/profile" ? <Profile /> :
        location.pathname === "/appointments" ? <Appointments /> :
        location.pathname === "/messages" ? <Messages /> :
        location.pathname === "/passwordreset" ? <ChangePassword /> :
        location.pathname === "/settings" ? <Settings /> :
        location.pathname === "/diseases" ? <Diseases /> :
        location.pathname === "/logout" ? logout() : null}
      </Main>
    </Box>
  );
}