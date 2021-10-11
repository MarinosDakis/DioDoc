import React, { useState, useEffect } from 'react';
import { Button, Typography, Paper } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import AlertTitle from '@material-ui/lab/AlertTitle';
import { useDispatch, useSelector } from 'react-redux';
import useStyles from './styles';
import Input from "../../Auth/Input";
import Errors from '../Errors';

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
        <Paper className={classes.paper}>
          <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={isEdit ? handleSubmit : null}>
            <Typography className={classes.title} display="block" variant="h5" >Hi {profileData.fullName}</Typography>

          </form>
        </Paper>
    )
}
