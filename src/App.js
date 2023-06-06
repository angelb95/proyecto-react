import React, { Component } from "react";
import './App.css';
import moment from 'moment';
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
import NoMatch from "./components/pages/no-match";


export default class App extends Component {
render() {
  return (
    <div className="App">
      <Router>
      <h1>Angel Betancourt</h1>
     <div>
      {moment().format('MMMM Do YYYY, h:mm:ss a')}
     </div>
        <div>
          <NavigationContainer />
          <Routes>
            <Route exact path="/" element={<Home/>}/>
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