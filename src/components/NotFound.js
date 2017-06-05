import React from 'react';

const NotFound = () => {
  return (
    <div className="container">
      <h1>Error 404</h1>
      <p className="error">Page not found :(</p>
      <img src='./images/Murakami_MicahLidberg_AfterDark.jpg' alt="Murakami-inspired illustration by Micah Lidberg"></img>
      <p className='attribution'>Artwork by <a href='http://www.micahlidberg.com/'>Micah Lidberg</a></p>
    </div>
  );
}

export default NotFound;
