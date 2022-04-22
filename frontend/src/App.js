
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import BannerManage from "./pages/BannerManage";
import Sidebar from "./components/dashboard/Sidebar";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { AboutUs, OurAim, OurVision } from "./pages/AboutUs";
import { Services } from "./pages/Services";
import { Events, EventsOne, EventsTwo } from "./pages/Events";
import Contact from "./pages/ContactUs";
import Support from "./pages/Support";
import CreateBanner from "./components/banner/CreateBanner";
import UpdateBanner from "./components/banner/UpdateBanner";
import DisplayBanner from "./components/section/DisplayBanner";
import Layout from './components/dashboard/Layout';

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
          </Switch>
        </Layout>
      </Home>
    </Router>
  );
}
export const Home = styled.div`
  display: flex;
`;

export default App;
