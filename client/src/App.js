import React, { useState } from 'react'
import { Container } from "@material-ui/core";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// not logged in
import Navbar from "./components/Navbar/Navbar";
import Auth from "./components/Auth/Auth";
import DioDocHome from "./components/pages/DioDocHome/DioDocHome"
// logged in
import Sidebar from "./components/Sidebar/Sidebar"

const App = () => {

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  return (
    <BrowserRouter>
      <Container maxWidth="lg">
        {!user ? <Sidebar /> :
          <Container>
            <Navbar />
            <Switch>
              <Route path="/" exact component={DioDocHome} />
              <Route path="/auth" exact component={Auth} />
            </Switch>
          </Container>
        }
      </Container>
    </BrowserRouter>
  );
}

export default App;
