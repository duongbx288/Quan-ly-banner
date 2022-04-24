import React, { Component } from 'react';
import { Switch, Route, Link } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import styled from "styled-components";
import './App.css';

import Contact from "./pages/ContactUs";
import BannerManage from "./pages/BannerManage";
import CreateBanner from "./components/banner/CreateBanner";
import UpdateBanner from "./components/banner/UpdateBanner";
import DisplayBanner from "./components/section/DisplayBanner";
import Layout from './components/dashboard/Layout';
<<<<<<< HEAD
import SectionList from './components/section/SectionList';
import SapoWeb from './dashboard/SapoWeb';

function App({ userInfo }) {
  return (
    <Router>
      <Home>
        <Layout>
          <Switch>
            <Route path="/about-us" exact component={AboutUs} />
            <Route path="/banner/manage" exact component={BannerManage} />
            <Route path="/banner/create" exact component={CreateBanner} />
            <Route path="/banner/update/:code" exact component={UpdateBanner} />
            <Route path="/banner/update" exact component={UpdateBanner} />
            <Route path="/banner/delete" exact component={DisplayBanner} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/section" exact component={SectionList} />
            <Route path="/section/SapoWeb" exact component={SapoWeb} />
          </Switch>
        </Layout>
      </Home>
    </Router>
  );
=======

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
      </div>
    );
  }
>>>>>>> 1f58ebbe42fe8b6a215f01f7a2b441c063f6598a
}

export default App;

// import './App.css';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import BannerManage from "./pages/BannerManage";
// import Sidebar from "./components/dashboard/Sidebar";
// import styled from "styled-components";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import { AboutUs, OurAim, OurVision } from "./pages/AboutUs";
// import { Services } from "./pages/Services";
// import { Events, EventsOne, EventsTwo } from "./pages/Events";
// import Contact from "./pages/ContactUs";
// import Support from "./pages/Support";
// import CreateBanner from "./components/banner/CreateBanner";
// import UpdateBanner from "./components/banner/UpdateBanner";
// import DisplayBanner from "./components/section/DisplayBanner";
// import Layout from './components/dashboard/Layout';
// import { CheckboxProvider } from './context/CheckboxContext';
// import { CheckboxArrProvider } from './context/CheckboxListContext'
// function App({ userInfo }) {
//   return (
//     <CheckboxProvider>
//     <CheckboxArrProvider>
//     <Router>
//       <Home>
//         <Layout>
//           <Switch>
//             <Route path="/about-us" exact component={AboutUs} />
//             <Route path="/banner/manage" exact component={BannerManage} />
//             <Route path="/banner/create" exact component={CreateBanner} />
//             <Route path="/banner/update/:code" exact component={UpdateBanner} />
//             <Route path="/banner/update" exact component={UpdateBanner} />
//             <Route path="/banner/delete" exact component={DisplayBanner} />
//             <Route path="/contact" exact component={Contact} />
//           </Switch>
//         </Layout>
//       </Home>
//     </Router>
//     </CheckboxArrProvider>
//     </CheckboxProvider>
//   );
// }
// export const Home = styled.div`
//   display: flex;
// `;

// export default App;