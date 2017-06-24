import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const NavBar = ({cart}) => {
  const itemsInCart = cart.length
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
          <NavLink to="/" className="navbar-brand emphasis">Murakami books</NavLink>
        </div>
        <div className="collapse navbar-collapse navbar-right" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav">
            <li><NavLink to="/about" activeStyle={{color: '#001324', backgroundColor: '#f2deee'}}>About</NavLink> </li>
            <li><NavLink to="/books" activeStyle={{color: '#001324', backgroundColor: '#f2deee'}}>Books</NavLink> </li>
            <li><NavLink to="/cart" activeStyle={{color: '#001324', backgroundColor: '#f2deee'}}>Cart <strong>({itemsInCart})</strong></NavLink> </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;

NavBar.propTypes = {
  cart: PropTypes.array.isRequired,
};
