// adapted from: https://www.youtube.com/watch?v=ngc9gnGgUdA&list=PL6QREj8te1P7VSwhrMf3D3Xt4V6_SRkhu&index=1
// adapted from: https://www.youtube.com/watch?v=aibtHnbeuio&list=PL6QREj8te1P7VSwhrMf3D3Xt4V6_SRkhu&index=2
import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Message from "./Message/Message"
import useStyles from "./styles";

const AllMessages = ({ setCurrentId }) => {

    // get all messages
    const messages = useSelector((state) => state.messages);
    const classes = useStyles();

    return (
        !messages.length < 0 ? <CircularProgress /> : (
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {messages.map((message) => (
                    <Grid key={message._id} item xs={12} sm={6}>
                        <Message post={message} setCurrentId={setCurrentId} />
                    </Grid>
                ))}
            </Grid>
        )
    );
};

export default AllMessages;