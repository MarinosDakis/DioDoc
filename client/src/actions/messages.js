// adapted from: https://www.youtube.com/watch?v=ngc9gnGgUdA&list=PL6QREj8te1P7VSwhrMf3D3Xt4V6_SRkhu&index=1, https://www.youtube.com/watch?v=aibtHnbeuio&list=PL6QREj8te1P7VSwhrMf3D3Xt4V6_SRkhu&index=2
import { FETCH_ALL, CREATE, UPDATE, DELETE } from "../constants/actionsTypes";
import * as api from "../api";

// used when dispatching
// action creators
export const fetchMessages = (id) => async (dispatch) => {
    
    try {
        const { data } = await api.fetchMessages(id);
        
        dispatch( { type: FETCH_ALL, payload: data } );

    } catch (error) {
        console.log(error);
    }
}

export const createMessage = (newMessage) => async (dispatch) => {
    try {
        const { data } = await api.createMessage(newMessage);
        
        dispatch({ type: CREATE, payload: data });

    } catch (error) {
        console.log(error);
    }
}

export const updateMessage = (id, updatedMessage) => async (dispatch) => {
    try {
        const {data} = await api.updateMessage(id, updatedMessage);
       
        dispatch({ type: UPDATE, payload: data });

    } catch (error) {
        console.log(error);
    }
}

export const deleteMessage = (id) => async (dispatch) => {
    try {
        await api.deleteMessage(id);
       
        dispatch({ type: DELETE, payload: id });

    } catch (error) {
        console.log(error);
    }
}
