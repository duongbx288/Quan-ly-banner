import React, { Component } from 'react';
import { Switch, Route, Link } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import styled from "styled-components";
import './App.css';

import { AboutUs, OurAim, OurVision } from "./pages/AboutUs";
import Contact from "./pages/ContactUs";
import BannerManage from "./pages/BannerManage";
import CreateBanner from "./components/banner/CreateBanner";
import UpdateBanner from "./components/banner/UpdateBanner";
import DisplayBanner from "./components/section/DisplayBanner";
import Layout from './components/dashboard/Layout';

import AuthService from "./services/auth";
import EventBus from "./common/EventBus";
import Login from "./components/authentication/Login";
import Home from "./components/authentication/Home";
import Profile from './components/authentication/Profile';
import BoardUser from './components/authentication/board-user';
import BoardAdmin from './components/authentication/board-admin';

class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showAdminBoard: false,
      currentUser: null,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
      });
    }
    
    EventBus.on("logout", () => {
      this.logOut();
    });
  }

  componentWillUnmount() {
    EventBus.remove("logout");
  }

  logOut() {
    AuthService.logout();
    this.setState({
      showAdminBoard: false,
      currentUser: null,
    });
  }

  render() {
    const { currentUser, showAdminBoard } = this.state;
    return (
      <div className='wrapper'>
        {/* <nav className="navbar navbar-expand navbar-dark bg-dark">
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
                  {currentUser.roles}
                </Link>
              </li>
              <li className="nav-item">
                <a href="/login" className="nav-link" onClick={this.logOut}>
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

        <Switch>
          <Route exact path={["/", "/home"]} component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/profile" component={Profile} />
          <Route path="/user" component={BoardUser} />
          <Route path="/admin" component={BoardAdmin} />
        </Switch>  */}
         

        {currentUser ? (
          <Layout logOut={this.logOut} roles={this.roles}>
            <Switch>
              <Route exact path={["/", "/home"]} component={Home} />
              <Route exact path="/profile" component={Profile} />
              <Route path="/user" component={BoardUser} />
              <Route path="/admin" component={BoardAdmin} />
              <Route path="/banner/manage" exact component={BannerManage} />
              <Route path="/banner/create" exact component={CreateBanner} />
              <Route path="/banner/update/:code" exact component={UpdateBanner} />
              <Route path="/banner/update" exact component={UpdateBanner} />
              <Route path="/banner/delete" exact component={DisplayBanner} />
              <Route path="/report" exact component={Contact} />
            </Switch> 
          </Layout>
        ):(
          <Route exact path={["/", "/login"]} component={Login} />
        )}

      </div>
    );
  }
}

export default App;
