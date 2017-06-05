import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
  render() {
    return (
      <footer className='navbar-static-bottom'>
        <div className='container-fluid'>
          <p className='text-muted'><Link to='https://github.com/kfrn/library-app'>source code</Link></p>
        </div>
      </footer>
    );
  }
}

export default Footer;
