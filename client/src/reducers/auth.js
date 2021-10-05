// adapted from: https://www.youtube.com/watch?v=ngc9gnGgUdA&list=PL6QREj8te1P7VSwhrMf3D3Xt4V6_SRkhu&index=1
// adapted from: https://www.youtube.com/watch?v=aibtHnbeuio&list=PL6QREj8te1P7VSwhrMf3D3Xt4V6_SRkhu&index=2
import { AUTH, LOGOUT } from "../constants/actionsTypes";

const authReducer = (state = { authData: null }, action) => {
  switch (action.type) {
      case AUTH:
        localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
        return { ...state, authData: action?.data };
        
      case LOGOUT:
          localStorage.clear();
        return { ...state, authData: null };

      default:
          return state;
  }  
}

export default authReducer;