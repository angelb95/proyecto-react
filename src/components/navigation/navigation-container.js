import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes,
    NavLink
  } from 'react-router-dom';


export default class NavigationComponent extends Component {
    constructor() {
    super();
}



    render() {
      return (
        <div className="nav-wrapper">
          <div className="left-side">
            <div className="nav-link-wrapper">
          <NavLink exact to="/" avtiveClassName="nav-link-active">
            Home
            </NavLink> 
            </div>

            <div className="nav-link-wrapper">
          <NavLink to="/about-me" avtiveClassName="nav-link-active">
            About
            </NavLink>
            </div>

            <div className="nav-link-wrapper">
          <NavLink to="/contact" avtiveClassName="nav-link-active">
            contact
            </NavLink> 
            </div>

            <div className="nav-link-wrapper">
          <NavLink to="/blog" avtiveClassName="nav-link-active">
            blog
            </NavLink> 
            </div>
          </div>
      
        
        <div className="right-side">
          Angel Betancourt Garcia
        </div>
      </div> 
      
    )
  }
}