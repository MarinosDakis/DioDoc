import { Container, Grid } from "@material-ui/core";
// import React, { useState, useEffect } from "react";
// import { useDispatch } from "react-redux";
import { Typography, Paper } from '@material-ui/core';
import useStyles from './styles';

const Home = () => {

    const classes = useStyles();
    //const [currentId, setCurrentId] = useState(0);
    //const dispatch = useDispatch();

    return (
        <Container>
            <Grid container justify-content="center">
                <Container item xs={12} sm={7}>
                    <Paper className={classes.paper}>
                    <Typography variant="h5" align="center">
                    Dio-Doc is a prototype patient portal web application created using Javascript (React JS, Node Js), MongoDB (Mongoose), and Material UI.
                    </Typography>
                    </Paper>
                    <Paper className={classes.paper}>
                    <Typography variant="h5" align="center">
                    Current Features: Patient Management, Disease Encylopedia, Google login authentication, and an Administrator view.                      
                    </Typography>
                    </Paper>
                    <Paper className={classes.paper}>
                    <Typography variant="h5" align="center">
                    Please create an account and sign in to view its features!                     
                    </Typography>
                    </Paper>
                </Container>
            </Grid>
        </Container>
    )
}

export default Home
