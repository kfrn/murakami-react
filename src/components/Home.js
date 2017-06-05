import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div className="container">
        <h2>Welcome to the Murakami bookstore!</h2>
        <p>Click the image below to enter.</p>
        <a href="/books"><img src='./images/Murakami_MicahLidberg.jpg' alt="Murakami-inspired illustration by Micah Lidberg"></img></a>
        <p className='attribution'>Artwork by <a href='http://www.micahlidberg.com/'>Micah Lidberg</a></p>
      </div>
    );
  }
}

export default Home;
