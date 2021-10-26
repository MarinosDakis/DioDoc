// adapted from: https://www.youtube.com/watch?v=ngc9gnGgUdA&list=PL6QREj8te1P7VSwhrMf3D3Xt4V6_SRkhu&index=1, https://www.youtube.com/watch?v=aibtHnbeuio&list=PL6QREj8te1P7VSwhrMf3D3Xt4V6_SRkhu&index=2
import { FETCH_ALL, UPDATE, DELETE } from "../constants/actionsTypes";
import * as api from "../api";

// used when dispatching
// action creators
export const fetchProfile = (id) => async (dispatch) => {
    
    try {
        const { data } = await api.fetchProfile(id);
        
        dispatch( { type: FETCH_ALL, payload: data } );

    } catch (error) {
        console.log(error);
    }
}

export const updateAccount = (id, updatedAccount) => async (dispatch) => {
    try {
        const {data} = await api.updateMessage(id, updatedAccount);
       
        dispatch({ type: UPDATE, payload: data });

    } catch (error) {
        console.log(error);
    }
}

export const deleteAccount = (id) => async (dispatch) => {
    try {
        await api.deleteAccount(id);
       
        dispatch({ type: DELETE, payload: id });

    } catch (error) {
        console.log(error);
    }
}

export const updateEmail = (id, updatedEmail) => async (dispatch) => {
    try {
        const {data} = await api.updateEmail(id, updatedEmail);
       
        dispatch({ type: UPDATE, payload: data });

    } catch (error) {
        console.log(error);
    }
}
