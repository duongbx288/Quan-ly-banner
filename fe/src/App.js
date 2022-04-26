import React, { useState, useEffect } from 'react';
import { Switch, Route } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';


import CreateBanner from "./components/banner/CreateBanner";
import UpdateBanner from "./components/banner/UpdateBanner";
import DisplayBanner from "./components/section/DisplayBanner";
import SectionList from './components/section/SectionList';
import Layout from './components/dashboard/Layout';

import AuthService from "./services/auth";
import EventBus from "./common/EventBus";

import { CheckboxProvider } from './context/CheckboxContext';
import { CheckboxArrProvider } from './context/CheckboxListContext'
import Login from "./components/authentication/Login";
import Home from "./components/authentication/Home";
import Profile from './components/authentication/Profile';
import BoardUser from './components/authentication/BoardUser';
import BoardAdmin from './components/authentication/BoardAdmin';
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
                <Route exact path={["/", "/home"]}>
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
                <Route path="/banner/delete">
                  <DisplayBanner/>
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
              <Route exact path={["/", "/login"]}>
                <Login/>
              </Route>
            )} 
          </Switch>
        </CheckboxArrProvider>
      </CheckboxProvider>
      
      {/* <nav className="navbar navbar-expand navbar-dark bg-dark">
        <Link to={"/"} className="navbar-brand">
          HOME
        </Link>
        <div className="navbar-nav mr-auto">
          {showAdminBoard && (
            <li className="nav-item">
              <Link to={"/admin"} className="nav-link">
                Admin Board
              </Link>
            </li>
          )}
          {currentUser && (
            <li className="nav-item">
              <Link to={"/user"} className="nav-link">
                User
              </Link>
            </li>
          )}
        </div>
        {currentUser ? (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/profile"} className="nav-link">
                {currentUser.username}
              </Link>
            </li>
            <li className="nav-item">
              <a href="/login" className="nav-link" onClick={logOut}>
                LogOut
              </a>
            </li>
          </div>
        ) : (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/login"} className="nav-link">
                Login
              </Link>
            </li>
          </div>
        )}
      </nav> 

      <div className="container mt-3">
        <Switch>
          <Route exact path={["/", "/home"]}>
            <Home/>
          </Route>
          <Route exact path="/login" >
            <Login/>
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
            <CreateBanner/>
          </Route>
          <Route path="/banner/update/:code">
            <UpdateBanner/>
          </Route>
          <Route path="/banner/update">
            <UpdateBanner/>
          </Route>
          <Route path="/banner/delete">
            <DisplayBanner/>
          </Route>
          <Route path="/report">
            <Contact/>
          </Route>
        </Switch>
      </div> */}

    </div>
  );
};

export default App;