import React from 'react';
import Alert from '@material-ui/lab/Alert';
import AlertTitle from '@material-ui/lab/AlertTitle';
import { Grid } from '@material-ui/core';
import useStyles from '../pages/ChangePassword/styles';

const Errors = ( {errors, half} ) => {

    const classes = useStyles();

    return (
        <Grid item xs={12} sm={half ? 6 : 12}>
        {errors.map((storedErrors, index) => (
            <Alert className={classes.alert} severity="error">{storedErrors}</Alert>
        ))}
        </Grid>
    );

}

export default Errors;