// adapted from: https://www.youtube.com/watch?v=ngc9gnGgUdA&list=PL6QREj8te1P7VSwhrMf3D3Xt4V6_SRkhu&index=1
// adapted from: https://www.youtube.com/watch?v=aibtHnbeuio&list=PL6QREj8te1P7VSwhrMf3D3Xt4V6_SRkhu&index=2
import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from "../constants/actionsTypes";

// eslint-disable-next-line import/no-anonymous-default-export
export default (posts = [], action) => {
    switch (action.type) {
        case DELETE:
            // filter to keep all posts except for the one where the id = action.payload
            return posts.filter((post) => post._id !== action.payload);
        case UPDATE:
            return posts.map((post) => (post._id === action.payload._id ? action.payload : post));
        case LIKE:
            return posts.map((post) => (post._id === action.payload._id ? action.payload : post));
        case FETCH_ALL:
            return action.payload;
        case CREATE:
            return [...posts, action.payload];
        default:
            return posts;
    }
}