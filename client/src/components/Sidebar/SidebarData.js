import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import SettingsIcon from '@mui/icons-material/Settings';
import BookIcon from '@mui/icons-material/Book';
import EventNoteIcon from '@mui/icons-material/EventNote';
import LockIcon from '@mui/icons-material/Lock';

export const SidebarData = [
    {
      title: "Dashboard",
      path: "/dashboard",
      icon: <HomeIcon />,
      className: "nav-text"   
    },
    {
      title: "Profile",
      path: "/profile",
      icon: <PersonIcon />,
      className: "nav-text"   
    },
    {
      title: "Appointments",
      path: "/appointments",
      icon: <EventNoteIcon />,
      className: "nav-text"   
    },
    {
      title: "Messages",
      path: "/messages",
      icon: <EmailIcon />,
      className: "nav-text"   
    },
    {
      title: "Diseases",
      path: "/diseases",
      icon: <BookIcon />,
      className: "nav-text"   
    },
    {
      title: "Change Password",
      path: "/passwordreset",
      icon: <LockIcon />,
      className: "nav-text"   
    },
    {
      title: "Settings",
      path: "/settings",
      icon: <SettingsIcon />,
      className: "nav-text"   
    },
]
