// adapted from: https://www.youtube.com/watch?v=ngc9gnGgUdA&list=PL6QREj8te1P7VSwhrMf3D3Xt4V6_SRkhu&index=1
// adapted from: https://www.youtube.com/watch?v=aibtHnbeuio&list=PL6QREj8te1P7VSwhrMf3D3Xt4V6_SRkhu&index=2
import React, { useState, useEffect } from 'react'
import { Container} from "@material-ui/core";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// not logged in import
import Navbar from "./components/Navbar/Navbar";
import DioDocHome from "./components/pages/DioDocHome/DioDocHome";
import Auth from "./components/Auth/Auth";
// logged in imports
import Dashboard from "./components/pages/Dashboard/Dashboard";
import Profile from "./components/pages/Profile/Profile";
import Messages from "./components/pages/Messages/Messages";
import Diseases from "./components/pages/Diseases/Diseases";
import Settings from "./components/pages/Settings/Settings";
import Sidebar from "./components/Sidebar/Sidebar"

const App = () => {

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

    return (
    <BrowserRouter>
        <Container maxWidth="lg">
          {user ? <Navbar /> : <Sidebar />}
          <Switch>
            <Route path="/" exact component={DioDocHome} /> 
            <Route path="/auth" exact component={Auth} />
          </Switch>
        </Container>
    </BrowserRouter>
    );
}

export default App;
