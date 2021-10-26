import { Container, Grow, Grid } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { fetchMessages } from "../../../actions/messages";
import AllMessages from "../Messages/AllMessages";
import Form from "../../Form/Form";

const Messages = () => {
    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMessages());
    }, [currentId, dispatch]);

    return (
        <Grow in>
        <Container>
            <Grid container justify-content="space-between" alignItems="stretch" spacing={3}>
                <Grid item xs={12} sm={7}>
                    <AllMessages setCurrentId={setCurrentId} />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Form currentId={currentId} setCurrentId={setCurrentId} />
                </Grid>
            </Grid>
        </Container>
    </Grow>
    )
}

export default Messages