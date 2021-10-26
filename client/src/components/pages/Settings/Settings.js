import React, { useState, useEffect } from 'react';
import { Button, Typography, Grid, Container, Card, CardContent, CardActions } from '@material-ui/core';

import useStyles from './styles';
import {settingsData} from "./settingsData";

export default function Settings({ currentId, setCurrentId }) {

    const classes = useStyles();

    const handleSubmit = async (e) => {

        e.preventDefault();
        if (currentId === 0) {
            // dispatch update user profile
            // dispatch(deletePatient(currentId, { ...postData, name: user?.result?.name }));
        } else {
            // display an error
            console.log("account deleted");
        }
    }

    const changeUsername = async (e) => {
        e.preventDefault();

        console.log("Username Changed");
    }

    const showDetails = async (e) => {
        e.preventDefault();

        console.log("details displayed");
    }

    return (

        <Grid>
            <Container>
                {settingsData.map((item, index) => (
                    <Grid item sx={12} sm={6} md={6} lg={6} key={index}>
                        <Card className={classes.card} sx={{ minWidth: 400 }}>
                            <CardContent className={classes.cardContent}>
                                <Typography variant="h5" gutterBottom>{item.settingName}</Typography>
                                <Typography>{item.desc}</Typography>
                            </CardContent>
                            <CardActions>
                                <Button className={classes.buttonSubmit} size="medium" onClick={null}>Click Here</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Container>
        </Grid>

    )
}
