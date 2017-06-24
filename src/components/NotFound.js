import React from 'react';

const NotFound = () => {
  return (
    <div className="container">
      <h3>Error 404</h3>
      <p className="error">Page not found :(</p>
      <img
        src="/images/Murakami_MicahLidberg_AfterDark.jpg"
        alt="Murakami-inspired illustration by Micah Lidberg"
        className="desktop"
      />
      <img
        src="/images/Murakami_MicahLidberg_AfterDark_portrait.jpg"
        alt="Murakami-inspired illustration by Micah Lidberg"
        className="mobile"
      />
      <p className="attribution">
        Artwork by <a href="http://www.micahlidberg.com/">Micah Lidberg</a>
      </p>
    </div>
  );
};

export default NotFound;
