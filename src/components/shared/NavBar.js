import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link to="/" className="navbar-brand">Murakami books</Link>
          </div>
          <div className="collapse navbar-collapse navbar-right" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li><Link to="/about">About</Link> </li>
              <li><Link to="/books">Books</Link> </li>
              <li><Link to="/cart">Cart</Link> </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
