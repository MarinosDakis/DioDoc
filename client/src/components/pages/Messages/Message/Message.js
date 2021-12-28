// adapted from: https://www.youtube.com/watch?v=ngc9gnGgUdA&list=PL6QREj8te1P7VSwhrMf3D3Xt4V6_SRkhu&index=1
// adapted from: https://www.youtube.com/watch?v=aibtHnbeuio&list=PL6QREj8te1P7VSwhrMf3D3Xt4V6_SRkhu&index=2
import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import DeleteIcon from '@material-ui/icons/Delete';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import useStyles from "./styles";

import { deletePost } from "../../../../actions/posts";

const Message = ({ message, setCurrentId }) => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const user = JSON.parse(localStorage.getItem('profile'));

    return (
        <Card className={classes.card}>
            <div className={classes.overlay}>
                <Typography variant="h6">From: {message.doctorName}</Typography>
                <Typography variant="body2">{moment(message.createdAt).fromNow()}</Typography>
            </div>
            <Typography className={classes.title} variant="h5" gutterBottom>{ message.messageTitle }</Typography>
            <CardContent>
                 <Typography variant="body2" color="textSecondary" component="p">{ message.messageBody }</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" onClick={() => dispatch(deletePost(message._id))}>
                <DeleteIcon fontSize="small" />
                &nbsp; Delete &nbsp;
            </Button> 
            </CardActions>
        </Card>
    );
}

export default Message;