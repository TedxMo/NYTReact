import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () =>
  <nav className="navbar navbar-default navbar-fixed-top">
    <div className="container">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/saved">Saved Articles</Link></li>
      </ul>
    </div>
  </nav>

export default Nav;
