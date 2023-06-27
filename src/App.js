import "../src/style/main.scss";
import React, { Component } from "react";
import './App.css';


import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
  Link,
} from 'react-router-dom';
import PortfolioContainer from "./components/portfolio/portfolio-container";
import NavigationContainer from "./components/navigation/navigation-container";
import Home from "./components/pages/home";
import About from "./components/pages/about";
import Contact from "./components/pages/Contact";
import Blog from "./components/pages/blog";
import PortfolioDetail from "./components/portfolio/portfolio-detail";
import Auth from "./components/pages/auth";
import NoMatch from "./components/pages/no-match";



export default class App extends Component {
    constructor(props) {
      super(props);

      this.state = {
        loggedInStatus: "NOT_LOGGED_IN"
      }

      this.handleSuccessfullLogin = this.handleSuccessfullLogin.bind(this)
      this.handleUnSuccessfullLogin = this.handleUnSuccessfullLogin.bind(this);
    }

    handleSuccessfullLogin(){
      this.setState({
        loggedInStatus: "LOGGED_IN"
      })
    }

    handleUnSuccessfullLogin(){
      this.setState({
        loggedInStatus: "NOT_LOGGED_IN"
      });
    
  }

render() {

  return (
    <div className="container">
      <Router>
        <div>
          <NavigationContainer />
          <Routes>
            <Route exact path="/" element={<Home/>}/>

            <Route
             path="/auth" 
             render={props => (
              <Auth
                {...props}
                handleSuccessfulLogin={this.handleSuccessfulLogin}
                handleUnSuccessfulLogin={this.handleUnSuccessfulLogin}

              />

             )}

            /> 


            <Route path="/about-me" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/blog" element={<Blog/>}/>
            <Route path="/portfolio/:slug" element={<PortfolioDetail/>}/>
            <Route element={<NoMatch/>}/>
            
          </Routes>
        </div>
      </Router>
    </div>
  );
}
}
