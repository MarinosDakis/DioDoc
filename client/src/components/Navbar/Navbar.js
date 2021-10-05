import React, { useState, useEffect } from 'react'
import { Link, useHistory, useLocation } from "react-router-dom";
import { AppBar, Typography, Toolbar, Avatar, Button } from '@material-ui/core'
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';
import useStyles from "./styles";
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';

const Navbar = () => {
    const classes = useStyles();
    //default user is information we stored in local storage from google sign in
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();

    const logout = () => {
        dispatch({ type: "LOGOUT" })

        // after user logs out we push them to the home route
        history.push("/");

        // set user to null after
        setUser(null);
    }

    useEffect(() => {
        const token = user?.token;

        // check if JWT token has expired

        // see if token exists
            if (token) {
                const decodedToken = decode(token);

             // if expired log user out
                if (decodedToken.exp * 1000 < new Date().getTime()){
                    logout();
                }
            }
            
        setUser(JSON.parse(localStorage.getItem("profile")));
    }, [location]);

    return (

    <AppBar className={classes.appBar} position="static" color="inherit">
        <div className={classes.brandContainer}>
            <Typography className={classes.heading} component={Link} to="/" variant="h2" align="center">Dio-Doc</Typography>
            <MedicalServicesIcon fontSize="large" className={classes.icon} />
        </div>
        <Toolbar className={classes.toolbar} >
            {user ? (
                <div className={classes.profile}>
                    <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
                    <Typography className={classes.userName} variant="h6">{user.result.name}</Typography>
                    <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Logout</Button>
                </div>
            ) : (
                <Button component={Link} to="/auth" variant="contained" color="default">Sign In</Button>
            )}
        </Toolbar>
    </AppBar>
    );
};

export default Navbar