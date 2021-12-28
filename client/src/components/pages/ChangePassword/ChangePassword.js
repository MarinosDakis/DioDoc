import React, { useState, useEffect } from 'react';
import { Button, Typography, Paper, Grid, Zoom } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import AlertTitle from '@material-ui/lab/AlertTitle';
import { useDispatch, useSelector } from 'react-redux';
import useStyles from './styles';
import Input from "../../Auth/Input";
import Errors from '../Errors';

export default function ChangePassword({ currentId, setCurrentId }) {

    const classes = useStyles();
    const [resetPasswordData, setResetPasswordData] = useState({ currentPassword: "", newPassword: "", confirmNewPassword: "" });

    var errors = [];

    // resets fields
    const clear = () => {
        //setCurrentId(0);
        setResetPasswordData({ currentPassword: "", newPassword: "", confirmNewPassword: "" });
    };

    const handleChange = (e) => {
        // this sets the values for all of the information from form data. All values have to use the same handlesubmit function and can work for unlimited fields
        setResetPasswordData({ ...resetPasswordData, [e.target.name]: e.target.value });
    };

    const isValid = (e) => {

        let errorCount = 0;

        // check if the password matches current one


        // check if passwords match
        if (resetPasswordData.newPassword !== resetPasswordData.confirmNewPassword) {
            errors.push("Passwords do not match!");
            errorCount++;
        }

        // check if password matches reg expression (Minimum eight characters, at least one letter, one number and one special character)
        // used from: https://stackoverflow.com/questions/19605150/regex-for-password-must-contain-at-least-eight-characters-at-least-one-number-a#:~:text=Minimum%20eight%20characters%2C%20at%20least%20one%20letter%2C%20one%20number%20and%20one%20special%20character%3A
        let regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d\W]{8,}$/;
        if (!regex.test(resetPasswordData.newPassword)) {
            errors.push("New password does not meet requirements!");
            errorCount++;
        }

        // if there's errors return false, otherwise return true
        if (errorCount > 0) return false;
        if (errorCount) return true;

    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (currentId === 0) {
            // dispatch update password
            // dispatch(updatePost(currentId, { ...postData, name: user?.result?.name }));
            clear();
        } else {
            // display an error
            console.log("error");
            clear();
        }
    };

    return (
        <Zoom in>
            <Grid container className={classes.container}>
                <Paper className={classes.paper}>
                    <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={isValid() === true ? handleSubmit : null}>
                        <Typography className={classes.title} display="block" variant="h5" >Reset Password</Typography>
                        <Alert className={classes.alert} severity="info"><AlertTitle>Password Requirements:</AlertTitle>Must be 8 characters with one letter, one number and one special character!</Alert>
                        {errors.length > 0 ? <Errors className={classes.alert} errors={errors} /> : null}
                        <Input name="currentPassword" label="Current Password" value={resetPasswordData.currentPassword} type="password" handleChange={handleChange} autoFocus />
                        <Input name="newPassword" label="New Password" value={resetPasswordData.newPassword} type="password" handleChange={handleChange} />
                        <Input name="confirmNewPassword" label="Confirm New Password" value={resetPasswordData.confirmNewPassword} type="password" handleChange={handleChange} />
                        <Button className={classes.buttonSubmit} variant="contained" size="large" type="submit">Submit</Button>
                        <Button className={classes.buttonClear} variant="contained" size="large" onClick={clear}>Clear</Button>
                    </form>
                </Paper>
            </Grid>
        </Zoom>
    );
}