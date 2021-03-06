import React, { useState, useEffect } from 'react';
import { Switch, Route, Redirect, Link } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import AuthService from "./services/auth";
import EventBus from "./common/EventBus";
import { CheckboxProvider } from './context/CheckboxContext';
import { CheckboxArrProvider } from './context/CheckboxListContext'

import Login from "./components/authentication/Login";
import Home from "./components/authentication/Home";
import Profile from './components/authentication/Profile';
import BoardUser from './components/authentication/BoardUser';
import BoardAdmin from './components/authentication/BoardAdmin';
import CreateBanner from "./components/banner/CreateBanner";
import UpdateBanner from "./components/banner/UpdateBanner";
import DisplayBanner from "./components/section/DisplayBanner";
import SectionList from './components/section/SectionList';
import Layout from './components/dashboard/Layout';

import Report from './pages/Report';
import BannerManage from "./pages/BannerManage";


const App = () => {
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);
  // const [username, setUsername] = useState(null);
  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      // setUsername(user.username);
      setCurrentUser(user);
      setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
    }

    EventBus.on("logout", () => {
      logOut();
    });

    return () => {
      EventBus.remove("logout");
    };
  }, []);

  const logOut = () => {
    AuthService.logout();
    setShowAdminBoard(false);
    setCurrentUser(undefined);
  };

  return (
    <div className='wrapper'>
      <CheckboxProvider>
        <CheckboxArrProvider>
          <Switch>
            {currentUser ? (
              <Layout logOut={logOut} showAdminBoard={showAdminBoard}>
                <Redirect from="/*" to="/home" />
                <Route exact path="/home">
                  <Home/>
                </Route>
                <Route path="/profile">
                  <Profile/>
                </Route>
                <Route path="/user">
                  <BoardUser/>
                </Route>
                <Route path="/admin">
                  <BoardAdmin/>
                </Route>
                <Route path="/banner/manage">
                  <BannerManage/>
                </Route>
                <Route path="/banner/create" >
                  <CreateBanner showAdminBoard={showAdminBoard}/>
                </Route>
                <Route path="/banner/update/:code">
                  <UpdateBanner showAdminBoard={showAdminBoard}/>
                </Route>
                <Route path="/banner/update">
                  <UpdateBanner showAdminBoard={showAdminBoard}/>
                </Route>
                <Route path="/banner/delete/:id">
                  <DisplayBanner/>
                </Route>
                <Route path="/section/:position_web">
                  <SectionList/>
                </Route>
                <Route path="/report">
                  <Report/>
                </Route>
              </Layout>
            ):(
              <>
                <Redirect from="/*" to="/login" />
                <Route exact path="/login">
                  <Login/>
                </Route>
              </>
            )} 
          </Switch>
        </CheckboxArrProvider>
      </CheckboxProvider>
    </div>
  );
};

export default App;