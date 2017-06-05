import React, { Component } from 'react';
import Footer from './components/shared/Footer'
import NavBar from './components/shared/NavBar'
// import NotFound from './components/NotFound'
import Home from './components/Home'
import About from './components/About'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Home />
        <Footer />
      </div>
    );
  }
}

export default App;
