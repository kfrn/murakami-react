import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container">
      <h3>Welcome to the Murakami bookstore!</h3>
      <p className="entry">Click the image below to enter.</p>
      <Link to="/books"><img src='./images/Murakami_MicahLidberg_Elephant.jpg' alt="Murakami-inspired illustration by Micah Lidberg"></img></Link>
      <p className='attribution'>Artwork by <a href='http://www.micahlidberg.com/'>Micah Lidberg</a></p>
    </div>
  );
}

export default Home;
