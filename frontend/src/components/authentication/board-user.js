import React, { Component } from "react";

import UserService from "../../services/user";
import EventBus from "../../common/EventBus";
import Layout from "../dashboard/Layout";

export default class BoardUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }

  componentDidMount() {
    UserService.getUserBoard().then(
      response => {
        this.setState({
          content: response.data
        });
      },
      error => {
        this.setState({
          content:
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString()
        });

        if (error.response && error.response.status === 401) {
          EventBus.dispatch("logout");
        }
      }
    );
  }

  render() {
    return (
      <Layout>
        <header className="jumbotron">
          <h3>{this.state.content}</h3>
        </header>
      </Layout>
    );
  }
}