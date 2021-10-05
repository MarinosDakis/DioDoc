// adapted from: https://www.youtube.com/watch?v=ngc9gnGgUdA&list=PL6QREj8te1P7VSwhrMf3D3Xt4V6_SRkhu&index=1
// adapted from: https://www.youtube.com/watch?v=aibtHnbeuio&list=PL6QREj8te1P7VSwhrMf3D3Xt4V6_SRkhu&index=2
import { AUTH } from "../constants/actionsTypes";
import * as api from "../api/index.js";

// we are dispatching this action
export const signin = (formData, history) => async (dispatch) => {

    try {

        // log in the user 
        // this is asking to get some data from data base with api call
        const { data } = await api.signIn(formData);
        dispatch({ type: AUTH, data });

        history.push("/");

    } catch (error) {
        console.log(error);
    }

};

export const signup = (formData, history) => async (dispatch) => {

    try {
        // signup the user
        const { data } = await api.signUp(formData);
        dispatch({ type: AUTH, data });

        history.push("/");
    } catch (error) {
        console.log(error);
    }
};