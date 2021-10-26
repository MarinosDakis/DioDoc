import React from 'react'
import { Typography, Grid, Card, Zoom, Container } from '@material-ui/core';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import GitHubIcon from '@mui/icons-material/GitHub';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

import useStyles from './styles';
import background from "../../../images/background.png";

export default function Home() {

    const classes = useStyles();

    return (
        <Zoom in>
            <Grid container className={classes.container}>
                <Grid className={classes.container} item xs={12} sm={12} md={12} lg={12}>
                <Card sx={{ maxWidth: 345 }} className={classes.card}>
                    <Typography gutterBottom variant="h6" align="center">Created by Marinos Dakis</Typography>
                    <Container className={classes.container}>
                        <CardMedia className={classes.root} component="img" height="auto" image={background} alt="crypto-image" />
                    </Container>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Dio-Doc is a patient portal web application created using Javascript (React JS, Node Js, Redux), MongoDB, and Material UI.
                        </Typography>
                        <Typography variant="body2">
                            <strong>Current Features:</strong> Patient management, disease encylopedia, Google login authentication, mobile responsiveness, and an administrator view.
                        </Typography>
                    </CardContent>
                    <CardActions display="flex">
                        <Grid container spacing={2}>
                            <Grid item xs align="center">
                                <a className={classes.url} href="https://github.com/MarinosDakis" target="_blank" rel="noreferrer">
                                    <GitHubIcon />
                                    <Typography textDecoration="none">GitHub</Typography>
                                </a>
                            </Grid>
                            <Grid item xs align="center">
                                <a className={classes.url} href="https://marinosdakis.com/" target="_blank" rel="noreferrer">
                                    <AccountBoxIcon />
                                    <Typography>Portfolio site</Typography>
                                </a>
                            </Grid>
                        </Grid>
                    </CardActions>
                </Card>
                </Grid>
            </Grid>
        </Zoom>
    )
}