import React, { useState, useEffect } from 'react';
import { Button, Typography, Grid, Container, Card, CardContent, CardActions } from '@material-ui/core';

import useStyles from './styles';
import {settingsData} from "./settingsData";

export default function Settings({ currentId, setCurrentId }) {

    const classes = useStyles();

    return (

        <Grid container>
                {settingsData.map((item, index) => (
                    <Grid item sx={12} sm={12} md={6} lg={6} key={index}  className={classes.container}>
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
        </Grid>

    )
}
