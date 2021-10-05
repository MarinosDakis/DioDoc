// adapted from: https://www.youtube.com/watch?v=ngc9gnGgUdA&list=PL6QREj8te1P7VSwhrMf3D3Xt4V6_SRkhu&index=1
// adapted from: https://www.youtube.com/watch?v=aibtHnbeuio&list=PL6QREj8te1P7VSwhrMf3D3Xt4V6_SRkhu&index=2
import { FETCH_ALL, CREATE, UPDATE, DELETE } from "../constants/actionsTypes";
import * as api from "../api";

// Action Creators
export const getPosts = () => async (dispatch) => {
    
    try {
        const { data } = await api.fetchPosts();
        
        dispatch( { type: FETCH_ALL, payload: data } );

    } catch (error) {
        console.log(error);
    }
}

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post);
        
        dispatch({ type: CREATE, payload: data });

    } catch (error) {
        console.log(error);
    }
}

export const updatePost = (id, post) => async (dispatch) => {
    try {
        const {data} = await api.updatePost(id, post);
       
        dispatch({ type: UPDATE, payload: data });

    } catch (error) {
        console.log(error);
    }
}

export const deletePost = (id) => async (dispatch) => {
    try {
        await api.deletePost(id);
       
        dispatch({ type: DELETE, payload: id });

    } catch (error) {
        console.log(error);
    }
}

export const likePost = (id) => async (dispatch) => {
    try {

        const {data} = await api.likePost(id);
       
        dispatch({ type: UPDATE, payload: data });

    } catch (error) {
        console.log(error);
    }
}