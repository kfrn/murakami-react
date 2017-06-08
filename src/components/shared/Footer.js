import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='navbar-static-bottom'>
      <div className='container-fluid'>
        <p className='footer-text'><Link to='https://github.com/kfrn/library-app'>source code</Link></p>
      </div>
    </footer>
  );
}

export default Footer;
