import React, { useState, useEffect } from 'react';
import { Button, Typography, Paper, Grid, Container, Card } from '@material-ui/core';
import Divider from '@mui/material/Divider';
import Alert from '@material-ui/lab/Alert';
import AlertTitle from '@material-ui/lab/AlertTitle';
import { useDispatch, useSelector } from 'react-redux';
import useStyles from './styles';
import Input from "../../Auth/Input";
import Errors from '../Errors';
import profileImg from "../../../images/blank-profile.png"; // source: https://pixabay.com/vectors/blank-profile-picture-mystery-man-973460/

export default function Profile({ currentId, setCurrentId }) {

    const classes = useStyles();
    let initialState = { fullName: "",  age: "", height: "", weight: "", sex: "", address: "", city: "", zip: "", state: "", primaryPhone: "", smoke: "", drink: "", profileImg: "" };
    const [profileData, setProfileData] = useState(initialState);

    const [isEdit, setIsEdit] = useState(false);
    // function changes the state of show password from on --> off and vice versa
    const handleEdit = () => setIsEdit((isEdit) => !isEdit);

    const handleChange = (e) => {
        // this sets the values for all of the information from form data. All values have to use the same handlesubmit function and can work for unlimited fields
        setProfileData( { ...profileData, [e.target.name]: e.target.value });
     };

     const handleSubmit = async (e) => {
        e.preventDefault();
    
            if (currentId === 0) {
            // dispatch update user profile
            // dispatch(updatePatient(currentId, { ...postData, name: user?.result?.name }));
        } else {
            // display an error
            console.log("error");
        }
    }

    return (
        <Container className={classes.container}>
                <Paper variant="outlined" className={classes.paper}>
                <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={isEdit ? handleSubmit : null}>
                    <img className={classes.profileImg} src={profileData.profileImg === "" ? profileImg : profileData?.profileImg} alt="User's face"></img>
                       
                    <Grid className={classes.grid} container spacing={2}>
                            <Grid item xs={12}><Paper><Typography variant="h6">User Information</Typography></Paper></Grid>
                            <Grid item xs={6}><Paper><Typography variant="h6">Name: Marinos Dakis {profileData?.name}</Typography></Paper></Grid>
                            <Grid item xs={6}><Paper><Typography variant="h6">Sex: Male {profileData?.sex}</Typography></Paper></Grid>
                            <Grid item xs={6}><Paper><Typography variant="h6">Height: 182cm {profileData?.height}</Typography></Paper></Grid>
                            <Grid item xs={6}><Paper><Typography variant="h6">Weight: 165lbs {profileData?.weight}</Typography></Paper></Grid>
                            <Grid item xs={6}><Paper><Typography variant="h6">Smoke: {profileData?.smoke ? "Yes" : "No"}</Typography></Paper></Grid>
                            <Grid item xs={6}><Paper><Typography variant="h6">Drink: {profileData?.drink ? "Yes" : "No"}</Typography></Paper></Grid>  
                    </Grid>

                    <Grid className={classes.grid} container spacing={2}>
                            <Grid item xs={12}><Paper><Typography variant="h6">Address Information</Typography></Paper></Grid>
                            <Grid item xs={6}> <Paper><Typography variant="h6">Address: 151-47 11th Ave {profileData?.address}</Typography></Paper></Grid>
                            <Grid item xs={6}><Paper><Typography variant="h6">City: Whitestone {profileData?.city}</Typography></Paper></Grid>
                            <Grid item xs={6}><Paper><Typography variant="h6">State: NY {profileData?.state}</Typography></Paper></Grid>
                            <Grid item xs={6}><Paper><Typography variant="h6">Zip: 11357 {profileData?.zip}</Typography></Paper></Grid>        
                    </Grid>

                    <Grid className={classes.grid} container spacing={2}>
                            <Grid item xs={12}><Paper><Typography variant="h6">Contact Information</Typography></Paper></Grid>
                            <Grid item xs> <Paper><Typography variant="h6">Phone: 516-757-5961 {profileData?.phone}</Typography></Paper></Grid>    
                    </Grid>

                    <Button className={classes.buttonEdit} variant="contained" size="large" onClick={handleEdit} disabled={isEdit ? true : false}>Edit</Button>
                    <Button className={classes.buttonSubmit} variant="contained" size="large" onClick={handleEdit} disabled={isEdit ? false : true}>Save</Button>

                </form>
                </Paper>
        </Container>
    )
}
