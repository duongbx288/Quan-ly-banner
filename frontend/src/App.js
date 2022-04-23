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

      </div>
    );
  }
}

export default App;
