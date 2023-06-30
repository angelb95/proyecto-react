import "../src/style/main.scss";
import React, { Component } from "react";
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faTrash, faSignOutAlt, faEdit, faSpinner} from "@fortawesome/free-solid-svg-icons";

import NavigationContainer from "./components/navigation/navigation-container";
import Home from "./components/pages/home";
import About from "./components/pages/about";
import Contact from "./components/pages/Contact";
import Blog from "./components/pages/blog";
import PortfolioDetail from "./components/portfolio/portfolio-detail";
import PortfolioManager from "./components/pages/portfolio-manager";
import Auth from "./components/pages/auth";
import NoMatch from "./components/pages/no-match";
import BlogDetail from "./components/pages/blog-detail";
import axios from "axios";

library.add(faTrash, faSignOutAlt, faEdit, faSpinner, faPlusCircle);

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedInStatus: "NOT_LOGGED_IN"
    };
    this.handleSuccessfulLogin = this.handleSuccessfulLogin.bind(this);
    this.handleUnSuccessfulLogin = this.handleUnSuccessfulLogin.bind(this);
    this.handleSuccessfulLogout = this.handleSuccessfulLogout.bind(this);
  }
  handleSuccessfulLogin() {
    this.setState({
      loggedInStatus: "LOGGED_IN"
    });
  }
  handleUnSuccessfulLogin() {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN"
    });
  }
  handleSuccessfulLogout() {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN"
    });
  }
  checkLoginStatus() {
    return axios
      .get("https://api.devcamp.space/logged_in", {
        withCredentials: true
      })
      .then(response => {
        const loggedIn = response.data.logged_in;
        const loggedInStatus = this.state.loggedInStatus;
        if (loggedIn && loggedInStatus === "LOGGED_IN") {
          return loggedIn;
        } else if (loggedIn && loggedInStatus === "NOT_LOGGED_IN") {
          this.setState({
            loggedInStatus: "LOGGED_IN"
          });
        } else if (!loggedIn && loggedInStatus === "LOGGED_IN") {
          this.setState({
            loggedInStatus: "NOT_LOGGED_IN"
          });
        }
      })
      .catch(error => {
        console.log("Error", error);
      });
  }
  componentDidMount() {
    this.checkLoginStatus();
  }
  authorizedPages() {
    return [<Route
       key="portfolio-manager"
       path="/portfolio-manager"
       element={<PortfolioManager/>} />];
  }
  render() {
    return (
      <div className="container">
        <Router>
          <div>
            <NavigationContainer
              loggedInStatus={this.state.loggedInStatus}
              handleSuccessfulLogout={this.handleSuccessfulLogout}
            />
            <Routes>
              <Route exact path="/" element={<Home/>} />
              <Route
                path="/auth"
                element={
                  <Auth
                    handleSuccessfulLogin={this.handleSuccessfulLogin}
                    handleUnSuccessfulLogin={this.handleUnSuccessfulLogin}
                  />
                }
              />
              <Route path="/about-me" element={About} />
              <Route path="/contact" element={Contact} />

              <Route
                path="/blog"
                render={props => (
                  <Blog {...props} loggedInStatus={this.state.loggedInStatus} />
                )}
              />

              <Route path="/b/:slug" component={BlogDetail} />
              {this.state.loggedInStatus === "LOGGED_IN" ? (
                this.authorizedPages()
              ) : null}
              <Route
                exact
                path="/portfolio/:slug"
                element={PortfolioDetail}
              />
              <Route element={NoMatch} />
            </Routes>
          </div>
        </Router>
      </div>
    );
  }
}