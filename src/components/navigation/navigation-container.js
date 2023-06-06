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
      <div>
        <NavLink exact to="/" avtiveClassName="nav-link-active">
          Home
          </NavLink> 
        <NavLink to="/about-me" avtiveClassName="nav-link-active">
          About
          </NavLink>
        <NavLink to="/contact" avtiveClassName="nav-link-active">
          contact
          </NavLink> 
        <NavLink to="/blog" avtiveClassName="nav-link-active">
          blog
          </NavLink> 
        
      
        {false ? <button>Add Blog</button> : null}
      </div>
    )
  }
}